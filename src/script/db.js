const CryptoJS = require("crypto-js");

export function Encrypt(theText) {
    return CryptoJS.AES.encrypt(theText, "Secret Passphrase");
}

export function unEncrypt(theText) {
    return CryptoJS.AES.decrypt(theText, "Secret Passphrase");
}

let database = [{
        id: 1,
        text: "Lorem ipsum dolor sit amet.",
        date: new Date(2020, 1, 22),
        status: 'process',
        completed: false
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: new Date(2021, 3, 14),
        status: 'important',
        completed: true
    },
    {
        id: 3,
        text: "Dolor sit amet consectetur adipisicing elit",
        date: new Date(2021, 9, 11),
        status: 'done',
        completed: false
    },
    {
        id: 4,
        text: "Sit amet consectetur adipisicing elit",
        date: new Date(2022, 1, 14),
        status: 'process',
        completed: false
    }
]
let user = [{
    id: 1,
    login: 'user1',
    password: 'user1',
    permissions: ['add']
}, {
    id: 2,
    login: 'admin',
    password: 'admin',
    permissions: ['delete', 'edit', 'add']
}, {
    id: 3,
    login: 'user2',
    password: 'user2',
    permissions: ['edit', 'add']
}]
let request = window.indexedDB.open('todo', 1);

request.onerror = (e) => {
    console.error(`IndexedDB error: ${request.error}`);
}
let db;
// request.onsuccess
request.onupgradeneeded = (e) => {
    db = e.target.result;

    db.createObjectStore('tasks', {
        keyPath: 'id'
    });

    db.createObjectStore('users', {
        keyPath: 'id'
    });
}

request.onsuccess = e => {
    db = e.target.result;
    console.log('db: ', db)
    let tx1 = db.transaction(['tasks'], 'readwrite').objectStore('tasks');
    let tx2 = db.transaction(['users'], 'readwrite').objectStore('users');

    database.forEach((item) => {
        tx1.add(item);
    })

    user.forEach((item) => {
        console.log('item: ', item)
        tx2.add(item);
    })
}