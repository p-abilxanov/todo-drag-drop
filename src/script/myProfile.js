const showPasswordBtn = document.getElementById('password-show');
const generatePasswordBtn = document.getElementById('password-generate');
const confirmPasswordInput = document.getElementById('inputPassword5');
const emailInput = document.getElementById('inputEmail4');
const passwordInput = document.getElementById('inputPassword4');
const infoSaveBtn = document.getElementById('user-info-save-btn');

class Settings {
    generatePassword() {
        let length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    showPasswordCheck() {
        if (showPasswordBtn.checked) {
            confirmPasswordInput.setAttribute('type', 'text')
            passwordInput.setAttribute('type', 'text')
        } else {
            confirmPasswordInput.setAttribute('type', 'password')
            passwordInput.setAttribute('type', 'password')
        }
    }

    generatePasswordCheck() {
        if (generatePasswordBtn.checked) {
            let generatePasswordValue = this.generatePassword();
            confirmPasswordInput.value = generatePasswordValue;
            passwordInput.value = generatePasswordValue;
            confirmPasswordInput.setAttribute('disabled', 'true')
            passwordInput.setAttribute('disabled', 'true')
        } else {
            confirmPasswordInput.removeAttribute('disabled')
            passwordInput.removeAttribute('disabled')
        }
    }

    infoSave(newEmail, newPassword) {
        let activeUser = localStorage.getItem('active-user').split('[and]')
        let currentUser = activeUser[0];

        let request = window.indexedDB.open('todo');

        request.onsuccess = e => {
            let db = e.target.result;
            let tx = db.transaction('users', 'readwrite').objectStore('users');
            let objectStoreRequest = tx.openCursor();
            objectStoreRequest.onsuccess = e => {
                let cursor = e.target.result

                if (cursor) {

                    if (cursor.value.login == currentUser) {
                        let putRequest = tx.put({
                            id: cursor.value.id,
                            login: newEmail,
                            password: newPassword,
                            permissions: cursor.value.permissions
                        });

                        putRequest.onsuccess = e => {
                            localStorage.setItem('active-user', `${newEmail}[and]${newPassword}`);
                            window.open('./index.html', '_self');
                        }
                    }

                    cursor.continue()
                }
            }
        }

    }
}

let settings = new Settings();

showPasswordBtn?.addEventListener('click', e => {
    settings.showPasswordCheck()
})

generatePasswordBtn?.addEventListener('click', e => {
    settings.generatePasswordCheck();
})

// SAVE INFO
infoSaveBtn?.addEventListener('click', e => {
    if (emailInput.value != "" && passwordInput.value != "" && confirmPasswordInput.value != "" && confirmPasswordInput.value == passwordInput.value) {
        settings.infoSave(emailInput.value, passwordInput.value)

    } else {
        alert('Try again. Email or password was wrong');
    }

})

window.onload = e => {
    let activeUser = localStorage.getItem('active-user').split('[and]');
    emailInput.value = activeUser[0];
    passwordInput.value = activeUser[1];
    confirmPasswordInput.value = activeUser[1];
}