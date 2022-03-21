import 'normalize.css';
const activeUserBlock = document.querySelector('.active-user span')
const tasksTableBody = document.querySelector('tbody.tasks-table')

const newTaskDate = document.getElementById('header-date');
const newTaskText = document.getElementById('header-text');
const newTaskStatus = document.querySelector('#header-status input');
const newTaskBtn = document.getElementById('header-btn');

const searchInput = document.getElementById('search-input')

const modalEditText = document.querySelector('.modal-edit-text')
const modalEditDate = document.querySelector('.modal-edit-date')

class TODO {
    countTasks = 4;

    getTime(date) {
        var d = new Date(date);
        return [d.getDate(),
            d.getMonth() + 1,
            d.getFullYear()
        ].join('/') + ' ' + [d.getHours(),
            d.getMinutes(),
            d.getSeconds()
        ].join(':');
    }

    setTasksInNotes(item) {
        let task = `
        <td>
            <div class="task-status"></div>
        </td>
        <td class = "task-text">${item.text}</td>
        <td class = "task-date">${this.getTime(item.date)}</td>
        <td class = "task-btn">
            <button type="button" class="btn btn-warning" id= "task-delete-btn">Delete</button>
        </td>
        <td class = "task-btn">
            <button type="button" class="btn btn-info" id="task-edit-btn" data-toggle="modal" data-target="#modalLoginForm">Edit</button>
        </td>`
        const TR = document.createElement('TR');
        TR.innerHTML = `${task}`;
        TR.classList = `task-${item.status}`
        TR.setAttribute('data-task-id', `${item.id}`)
        tasksTableBody?.appendChild(TR)

        const taskEditBtns = document.querySelectorAll('#task-edit-btn');

        taskEditBtns.forEach(btn => {
            btn?.addEventListener('click', e => {
                let id = e.target.parentElement.parentElement.getAttribute('data-task-id');
                localStorage.setItem('selected-edit-task-id', id)

                let db = window.indexedDB.open('todo')
                db.onsuccess = e => {
                    let data = e.target.result
                    let tx = data.transaction("tasks", "readonly").objectStore('tasks').openCursor();

                    tx.onsuccess = e => {
                        let cursor = e.target.result;

                        if (cursor) {

                            if (cursor.value.id == id) {
                                modalEditText.value = cursor.value.text;
                                modalEditDate.valueAsDate = new Date(cursor.value.date);
                            }

                            cursor.continue()
                        }


                    }

                }
            })
        })

        const taskDeleteBtns = document.querySelectorAll("#task-delete-btn")
        taskDeleteBtns.forEach(btn => {
            btn?.addEventListener('click', e => {
                this.deleteTask(e.target.parentElement.parentElement)
            })
        })

        if (TR) TR.querySelectorAll('td:not(.task-btn)').forEach(e => {
            e.addEventListener('click', () => {
                TR.classList = 'task-done';
                let newItem = item;
                newItem.status = 'done'
                let request = window.indexedDB.open('todo');
                request.onsuccess = e => {
                    let db = e.target.result;

                    let tx = db.transaction('tasks','readwrite').objectStore('tasks')
                    let objectStoreRequest = tx.put(newItem)
                    objectStoreRequest.onsuccess = e => {
                        alert('Successfully moved!!!')
                    }
                }
            })
        })
    }

    addTaskInNotes(newDate, newText, status) {
        let currentTaskStatus;

        if (status) {
            currentTaskStatus = 'important'
        } else {
            currentTaskStatus = 'process'
        }



        let db;
        let dbRequest = window.indexedDB.open('todo');
        dbRequest.onsuccess = e => {
            db = e.target.result;
            let tx = db.transaction('tasks', 'readwrite').objectStore('tasks')
            let id;
            let countRequest = tx.count();
            countRequest.onsuccess = e => {
                id = +countRequest.result + 1;
                let newTask = {
                    id: id,
                    text: `${newText}`,
                    date: newDate,
                    status: `${currentTaskStatus}`,
                    completed: false
                }
                this.setTasksInNotes(newTask);
                tx.add(newTask)
            }
        }
    }

    searchTask(searchText) {
        let searchTextLength = searchText.length;
        tasksTableBody.innerHTML = ""

        let tasks;
        let request = window.indexedDB.open('todo');

        request.onsuccess = (e) => {
            tasks = e.target.result;
            let tx = tasks.transaction(['tasks'], 'readonly').objectStore('tasks')

            tx.openCursor().onsuccess = e => {
                let cursor = e.target.result;

                if (cursor) {
                    let currentText = cursor.value.text

                    if (currentText.slice(0, searchTextLength).toUpperCase() == searchText.toUpperCase()) {
                        this.setTasksInNotes(cursor.value);
                    }

                    cursor.continue()
                }
            }
        }
    }

    editTask(newText, newDate) {
        let id = localStorage.getItem('selected-edit-task-id');
        let db = window.indexedDB.open('todo')

        db.onsuccess = e => {
            let data = e.target.result
            let tx = data.transaction("tasks", "readwrite").objectStore('tasks');
            let objectStoreRequest = tx.openCursor();

            objectStoreRequest.onsuccess = e => {
                let cursor = e.target.result;

                if (cursor) {

                    if (cursor.value.id == id) {
                        let dbPut = tx.put({
                            id: +id,
                            text: newText,
                            date: newDate,
                            status: cursor.value.status,
                            completed: cursor.value.completed
                        });

                        let tr = document.querySelectorAll('.tasks-table TR')

                        tr.forEach(item => {
                            if (id == item.getAttribute('data-task-id')) {
                                item.querySelector('.task-text').innerHTML = newText
                                item.querySelector('.task-date').innerHTML = this.getTime(newDate)
                            }
                        })

                        dbPut.onsuccess = e => {
                            alert('Successfully edited!!!');
                        }
                    }

                    cursor.continue()
                }


            }

        }
    }

    deleteTask(e) {
        let id = +e.getAttribute('data-task-id');
        e.remove();
        let request = window.indexedDB.open('todo');
        request.onsuccess = (e) => {
            let db = e.target.result;
            let tx = db.transaction('tasks', 'readwrite').objectStore('tasks');
            tx.delete(id);
        }
    }

    setDragItem(parentElement, item) {
        const LI = document.createElement('LI');
        LI.classList = 'drag-item';
        let inner = `<div class="drag-item-text">${item.text}</div>
                    <div class="drag-item-footer">
                        <div class="drag-item-date">${this.getTime(item.date)}</div>
                        <div class="drag-item-btn">
                            <button class="drag-item-delete btn btn-danger">Delete</button>
                            <button data-toggle="modal" data-target="#modalLoginForm" class="drag-item-edit btn btn-primary">Edit</button>
                        </div>
                    </div>`;
        LI.innerHTML = `${inner}`;
        LI.setAttribute('data-task-id', item.id)
        parentElement?.appendChild(LI);

        // DRAG TASK EDIT
        const taskEditBtns = document.querySelectorAll('.drag-item-edit');
        taskEditBtns.forEach(btn => {
            btn?.addEventListener('click', e => {
                let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-task-id');
                localStorage.setItem('selected-edit-task-id', id)

                let db = window.indexedDB.open('todo')
                db.onsuccess = e => {
                    let data = e.target.result
                    let tx = data.transaction("tasks", "readonly").objectStore('tasks').openCursor();

                    tx.onsuccess = e => {
                        let cursor = e.target.result;

                        if (cursor) {

                            if (cursor.value.id == id) {
                                modalEditText.value = cursor.value.text;
                                modalEditDate.valueAsDate = new Date(cursor.value.date);
                            }

                            cursor.continue()
                        }


                    }

                }
            })
        })

        // DRAG TASK DELETE
        const taskDeleteBtns = document.querySelectorAll(".drag-item-delete")
        taskDeleteBtns.forEach(btn => {
            btn?.addEventListener('click', e => {
                this.deleteTask(e.target.parentElement.parentElement.parentElement)
            })
        })
    }

    dragEditTask(newText, newDate) {
        let id = localStorage.getItem('selected-edit-task-id');
        let db = window.indexedDB.open('todo')

        db.onsuccess = e => {
            let data = e.target.result
            let tx = data.transaction("tasks", "readwrite").objectStore('tasks');
            let objectStoreRequest = tx.openCursor();

            objectStoreRequest.onsuccess = e => {
                let cursor = e.target.result;

                if (cursor) {

                    if (cursor.value.id == id) {
                        let dbPut = tx.put({
                            id: +id,
                            text: newText,
                            date: newDate,
                            status: cursor.value.status,
                            completed: cursor.value.completed
                        });

                        let li = document.querySelectorAll(`.drag-column-${cursor.value.status} li`)
                        li.forEach(item => {
                            if (id == item.getAttribute('data-task-id')) {
                                item.querySelector('.drag-item-text').innerHTML = newText
                                item.querySelector('.drag-item-date').innerHTML = this.getTime(newDate)
                            }
                        })

                        dbPut.onsuccess = e => {
                            alert('Successfully edited!!!');
                        }
                    }
                    cursor.continue()
                }
            }

        }
    }
}

export let todo = new TODO();

// REQUEST DB
let tasksDB;
let request = window.indexedDB.open('todo');

request.onerror = (e) => {
    console.error(`IndexedDB error: ${e}`);
}

request.onsuccess = (e) => {
    tasksDB = e.target.result;
    console.log('Successful database connection => ', tasksDB);
    let tx = tasksDB.transaction('tasks', 'readonly').objectStore('tasks')

    tx.openCursor().onsuccess = e => {
        let cursor = e.target.result;

        if (cursor) {
            todo.setTasksInNotes(cursor.value)

            cursor.continue()
        }
    }
}

// ADD NEW TASK
newTaskBtn?.addEventListener('click', e => {
    let newDate = newTaskDate.value;
    let newText = newTaskText.value;
    let newStatus = newTaskStatus.checked;

    if (newDate != "" && newText != "") {
        todo.addTaskInNotes(newDate, newText, newStatus);
    }
})

// SEARCH
searchInput?.addEventListener('input', e => {
    todo.searchTask(searchInput.value);
})

// edit task
document.querySelector('#modal-edit-save-btn')?.addEventListener('click', e => {
    if (modalEditText != "" && modalEditDate != "") {
        todo.editTask(modalEditText.value, modalEditDate.value);
    }
})

const inprocessColumn = document.querySelector('.drag-column-process ul')
const importantColumn = document.querySelector('.drag-column-important ul')
const doneColumn = document.querySelector('.drag-column-done ul')

let requestDB = window.indexedDB.open('todo');

requestDB.onsuccess = e => {
    let db = e.target.result;
    let tx = db.transaction('tasks', 'readwrite').objectStore('tasks')
    tx.openCursor().onsuccess = e => {
        let cursor = e.target.result;

        if (cursor) {
            // status
            if (cursor.value.status == 'done') {
                todo.setDragItem(doneColumn, cursor.value);
            } else if (cursor.value.status == 'important') {
                todo.setDragItem(importantColumn, cursor.value);
            } else if (cursor.value.status == 'process') {
                todo.setDragItem(inprocessColumn, cursor.value);
            }
            cursor.continue()
        }
    }
}

const newCategoryTaskDate = document.getElementById('category-header-date');
const newCategoryTaskText = document.getElementById('category-header-text');
const newCategoryTaskStatus = document.querySelector('#category-header-status input');
const newCategoryTaskBtn = document.getElementById('category-header-btn');

// DRAG ADD NEW TASK
newCategoryTaskBtn?.addEventListener('click', e => {
    let newDate = newCategoryTaskDate.value;
    let newText = newCategoryTaskText.value;
    let newStatus = newCategoryTaskStatus.checked;

    let requestDB = window.indexedDB.open('todo');
    requestDB.onsuccess = e => {
        let db = e.target.result;
        let tx = db.transaction('tasks', 'readwrite').objectStore('tasks')

        if (newDate != "" && newText != "") {
            let id;
            let countRequest = tx.count();
            countRequest.onsuccess = e => {
                id = +countRequest.result + 1;
                if (newStatus) {
                    todo.setDragItem(importantColumn, {
                        id: id,
                        text: newText,
                        date: new Date(newDate),
                        status: 'important',
                        completed: false
                    })
                    tx.add({
                        id: id,
                        text: newText,
                        date: new Date(newDate),
                        status: 'important',
                        completed: false
                    })
                } else {
                    todo.setDragItem(inprocessColumn, {
                        id: id,
                        text: newText,
                        date: new Date(newDate),
                        status: 'process',
                        completed: false
                    })

                    tx.add({
                        id: id,
                        text: newText,
                        date: new Date(newDate),
                        status: 'process',
                        completed: false
                    })
                }
            }
        }
    }
})

// DRAG EDIT TASK
document.querySelector('#category-modal-edit-save-btn')?.addEventListener('click', e => {
    if (modalEditText != "" && modalEditDate != "") {
        todo.dragEditTask(modalEditText.value, modalEditDate.value);
    }
})

window.onload = e => {
    let activeUser = localStorage.getItem('active-user').split('[and]');
    let activeUserUnEncrypt = activeUser[0]
    if (activeUserBlock) activeUserBlock.innerHTML = `${activeUserUnEncrypt}`
}