const email = document.querySelector('input#email')
const password = document.querySelector('input#password')
const submit = document.querySelector('input#submit')


submit?.addEventListener('click', e => {
    let userDB;
    let request = window.indexedDB.open('todo');
    request.onerror = (e) => {
        console.error(`IndexedDB error: ${e}`);
    }

    request.onsuccess = (e) => {
        userDB = e.target.result;
        console.log('Successful database connection => ', userDB);
        let tx = userDB.transaction(['users'], 'readonly').objectStore('users')

        tx.openCursor().onsuccess = e => {
            let cursor = e.target.result;

            if (cursor) {
                let currentEncryptEmail = cursor.value.login;
                let currentEncryptPassword = cursor.value.password;

                let currentEmail = currentEncryptEmail;
                let currentPassword = currentEncryptPassword;

                if (email.value == currentEmail && password.value == currentPassword) {
                    localStorage.setItem('active-user', `${currentEncryptEmail}[and]${currentEncryptPassword}`)
                    window.open('./notes.html', '_self')
                }

                cursor.continue()
            }
        }
    }

})