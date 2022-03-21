const userList = document.querySelector('.user-list')
const PERMISSIONS = ['delete', 'add', 'edit'];

// MODAL
const modalInputEmail = document.getElementById('input-email')
const modalUserPassword = document.querySelector('input.modal-user-password')
const modalSaveBtn = document.getElementById('modal-save-btn')

// active permissions
const activePermissions = document.getElementById('1')
// available permissions
const availablePermissions = document.getElementById('2')


const showPasswordBtn = document.getElementById('password-show');
const generatePasswordBtn = document.getElementById('password-generate');
const infoSaveBtn = document.getElementById('modal-save-btn');

const addNewUserGeneratePasswordBtn = document.getElementById('add-new-user-password-generate');
const addNewUserPassword = document.querySelector('.add-new-user-password');
const addNewUserPasswordShow = document.getElementById('add-new-user-password-show');
const addNewUserLogin = document.getElementById('add-new-user-login');
const makeAdminBtn = document.getElementById('make-admin');
const addNewUserBtn = document.getElementById('add-new-user');


class Permissions {
    setPermissionsDrag(bool, permission) {
        const innerList = document.createElement('LI')
        innerList.classList = "bg-info py-1 px-3 text-center rounded mb-3";
        innerList.setAttribute('data-permission-name', `${permission}`);
        innerList.innerHTML = `can-${permission}`;
        if (bool) {
            activePermissions.appendChild(innerList)
        } else {
            availablePermissions.appendChild(innerList)
        }
    }

    setUser(item) {
        let userItemList = document.createElement('LI');
        let itemInner = `
                        <div class="d-flex justify-content-between mb-3">
                            <div class="user-email">${item.login}</div>
                            <div class="user-btn d-flex justify-content-between" data-user-id = ${item.id}>
                                <button type="button" class="btn-xs btn-danger mr-1 user-delete-btn">Delete</button>
                                <button type="button" class="btn-xs btn-primary user-edit-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Change</button>
                            </div>
                        </div>`;
        userItemList.innerHTML = itemInner
        userList.appendChild(userItemList)

        document.querySelectorAll('.user-edit-btn').forEach(item => {
            item.addEventListener('click', e => {
                let id = item.parentElement.getAttribute('data-user-id');
                localStorage.setItem('selected-user-id-permissions', id);

                let request = window.indexedDB.open('todo');
                request.onsuccess = e => {

                    let db = e.target.result;
                    let tx = db.transaction('users', 'readonly').objectStore('users').openCursor()
                    tx.onsuccess = e => {
                        let cursor = e.target.result;
                        if (cursor) {
                            let currentLogin = cursor.value.login;
                            let currentPassword = cursor.value.password;

                            if (cursor.value.id == id) {
                                activePermissions.innerHTML = ""
                                availablePermissions.innerHTML = ""
                                modalInputEmail.value = `${currentLogin}`
                                modalUserPassword.value = `${currentPassword}`

                                myPermissions.sortPermissions(cursor.value)
                            }
                            cursor.continue();
                        }
                    }
                }

            })
        });
        document.querySelectorAll('.user-delete-btn').forEach(item => {
            item.addEventListener('click', e => {
                let id = +e.target.parentElement.getAttribute('data-user-id');
                this.deleteUser(id, e.target);
            })
        });
    }

    generatePassword() {
        let length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    showPasswordCheck(showPasswordBtn, userPasswordInput) {
        if (showPasswordBtn.checked) {
            userPasswordInput.setAttribute('type', 'text')
        } else {
            userPasswordInput.setAttribute('type', 'password')
        }
    }

    generatePasswordCheck(generateBTN, generatePassword) {
        if (generateBTN.checked) {
            let generatePasswordValue = this.generatePassword();
            generatePassword.value = generatePasswordValue;
            generatePassword.setAttribute('disabled', 'true')
        } else {
            generatePassword.removeAttribute('disabled')
        }
    }

    infoSave(newEmail, newPassword) {
        let currentUserId = localStorage.getItem('selected-user-id-permissions')

        let request = window.indexedDB.open('todo');

        request.onsuccess = e => {
            let db = e.target.result;
            let tx = db.transaction('users', 'readwrite').objectStore('users');
            let objectStoreRequest = tx.openCursor();
            objectStoreRequest.onsuccess = e => {
                let cursor = e.target.result

                if (cursor) {

                    if (cursor.value.id == currentUserId) {
                        tx.put({
                            id: cursor.value.id,
                            login: newEmail,
                            password: newPassword,
                            permissions: cursor.value.permissions
                        });
                    }

                    cursor.continue()
                }
            }
        }

    }

    sortPermissions(item) {
        let ourPermissions = item.permissions;
        for (let i = 0; i < PERMISSIONS.length; i++) {
            // EGER HESH QAYSISINA TEN' BOLMASA
            if (ourPermissions.some((a, b, c) => a == PERMISSIONS[i])) {
                this.setPermissionsDrag(true, PERMISSIONS[i]);
            } else {
                this.setPermissionsDrag(false, PERMISSIONS[i]);
            }
        }
    }

    addNewUser(newLogin, newPassword) {
        let checkPermissions = (makeAdminBtn.checked) ? PERMISSIONS : []

        let request = window.indexedDB.open('todo')
        request.onsuccess = e => {
            let db = e.target.result;

            let tx = db.transaction('users', 'readwrite').objectStore('users')
            let newUserId;
            let countRequest = tx.count();
            countRequest.onsuccess = e => {
                newUserId = +countRequest.result + 1;

                let newUser = {
                    id: newUserId,
                    login: newLogin,
                    password: newPassword,
                    permissions: checkPermissions
                }

                this.setUser(newUser);

                let objectStoreRequest = tx.add(newUser);
                objectStoreRequest.onsuccess = e => {
                    alert('Successfully added');
                }
            }

        }
    }

    deleteUser(id, element) {
        let request = window.indexedDB.open('todo');
        request.onsuccess = e => {
            let db = e.target.result

            let tx = db.transaction(['users'], 'readwrite').objectStore('users')
            let objectStoreRequest = tx.delete(id);

            objectStoreRequest.onsuccess = e => {
                element.parentElement.parentElement.parentElement.remove();
                alert('Successfully deleted');
            }

        }
    }
}

let myPermissions = new Permissions();

let request = window.indexedDB.open('todo')
request.onsuccess = e => {
    let db = e.target.result;

    let tx = db.transaction('users', 'readonly').objectStore('users').openCursor();
    tx.onsuccess = e => {
        let cursor = e.target.result;

        if (cursor) {
            myPermissions.setUser(cursor.value);

            cursor.continue();
        }
    }
}

addNewUserPasswordShow.addEventListener('click', e => {
    myPermissions.showPasswordCheck(addNewUserPasswordShow, addNewUserPassword)
})

showPasswordBtn.addEventListener('click', e => {
    myPermissions.showPasswordCheck(showPasswordBtn, modalUserPassword)
})

// EDIT USER GENERATE PASSWORD "CLICK"
generatePasswordBtn.addEventListener('click', e => {
    myPermissions.generatePasswordCheck(generatePasswordBtn, modalUserPassword);
})

// NEW USER GENERATE PASSWORD "CLICK"
addNewUserGeneratePasswordBtn.addEventListener('click', e => {
    myPermissions.generatePasswordCheck(addNewUserGeneratePasswordBtn, addNewUserPassword);
})


// SAVE INFO
infoSaveBtn.addEventListener('click', e => {
    if (modalInputEmail.value != "" && modalUserPassword.value != "") {
        myPermissions.infoSave(modalInputEmail.value, modalUserPassword.value)

    } else {
        alert('Try again. Email or password was wrong');
    }

})

addNewUserBtn.addEventListener('click', e => {
    if (addNewUserLogin.value != "" && addNewUserPassword.value != "") {
        myPermissions.addNewUser(addNewUserLogin.value, addNewUserPassword.value)
    }
})