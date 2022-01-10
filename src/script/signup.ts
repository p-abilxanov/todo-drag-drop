let account: IUser[] = JSON.parse(localStorage.getItem('users'));

const usersMain: Element = document.querySelector('.users-main')
const signinLogin: HTMLInputElement = document.querySelector('#signin-input-email')
const signinPassword: HTMLInputElement = document.querySelector('#signin-input-password')
const signinBtn = document.querySelector('.signin-btn')

const signupLogin: HTMLInputElement = document.querySelector('#signup-input-email')
const signupPassword: HTMLInputElement = document.querySelector('#signup-input-password')
const signupConfirmPassword: HTMLInputElement = document.querySelector('#signup-input-confirm-password')
const signupBtn = document.querySelector('.register-btn')

const adminNewUserLogin: HTMLInputElement = document.querySelector('#user-login-in');
const adminNewUserPassword: HTMLInputElement = document.querySelector('#user-password-in');
const adminNewUserConfirmPassword: HTMLInputElement = document.querySelector('#user-confirm-password-in');
const adminAddNewUser = document.querySelector('.add-new-user');

const modalUserSaveBtn = document.querySelector('.save-user-edit');
const modalUserConfirmPassword: HTMLInputElement = document.querySelector('#modal-user-edit-confirm-password');
const modalUserPassword: HTMLInputElement = document.querySelector('#modal-user-edit-password');

interface IUser {
    nickname: string
    password: string
}

class User {
    // SIGN IN
    activeUser: IUser;

    // MODAL
    private selectedUser: IUser;
    private selectedItem: MouseEvent;

    private userChangeModal(item: IUser, e: MouseEvent) {
        this.selectedUser = item;
        this.selectedItem = e;
    }

    setUserTable(): void {
        account.forEach((element) => {
            this.createUserTable(element);
        })
    }

    private createUserTable(user: IUser): void {
        const TR: HTMLTableRowElement = document.createElement('tr');
        TR.style.borderTop = '1px solid #ccc';

        const tdIMG: HTMLTableCellElement = document.createElement('td');
        const imgBlock: Element = document.createElement('div')
        imgBlock.setAttribute('class', 'd-flex px-2 py-1 justify-content-center')
        const imgInnerBlock: Element = document.createElement('div')
        imgInnerBlock.setAttribute('class', 'd-flex justify-content-center align-items-center')
        imgInnerBlock.setAttribute('style', 'width: 30px; height: 30px; border-radius: 50%; color: #fff; background-color: #ddd; box-shadow: 0 0 0 3px #fff, 0 0 0 4px #aaa;')
        imgInnerBlock.innerHTML = `<i class="fas fa-user"></i>`;

        imgBlock.appendChild(imgInnerBlock)
        tdIMG.appendChild(imgBlock)

        const tdLogin: HTMLTableCellElement = document.createElement('td');
        const loginBlock: Element = document.createElement('div')
        loginBlock.setAttribute('class', 'd-flex px-2 py-1')
        const loginInnerBlock: Element = document.createElement('div')
        loginInnerBlock.setAttribute('class', 'd-flex flex-column justify-content-center')
        loginInnerBlock.innerHTML = `<input type="text" name="user-login" id="user-login" value="${user.nickname}" style="border: none; outline: none; background-color: transparent;" disabled>`;

        loginBlock.appendChild(loginInnerBlock)
        tdLogin.appendChild(loginBlock)

        const tdPassword: HTMLTableCellElement = document.createElement('td');
        const passwordBlock: Element = document.createElement('div')
        passwordBlock.setAttribute('class', 'd-flex px-2 py-1')
        const passwordInnerBlock: Element = document.createElement('div')
        passwordInnerBlock.setAttribute('class', 'd-flex flex-column justify-content-center')
        passwordInnerBlock.innerHTML = `<input type="text" name="password-login" id="password-login" value="${user.password}" style=" border: none; outline: none; background-color: transparent;" disabled>`;

        passwordBlock.appendChild(passwordInnerBlock)
        tdPassword.appendChild(passwordBlock)

        const tdEdit: HTMLTableCellElement = document.createElement('td');
        tdEdit.setAttribute('class', 'align-middle text-center text-sm')

        const editBtn: HTMLButtonElement = document.createElement('button');
        editBtn.setAttribute('class', 'btn btn-primary')
        editBtn.setAttribute('type', 'button')
        editBtn.setAttribute('style', 'padding: 5px 25px; font-size: 14px;')
        editBtn.setAttribute('data-toggle', `modal`);
        editBtn.setAttribute('data-target', '#exampleModal')
        editBtn.innerHTML = "Edit";
        tdEdit.appendChild(editBtn);

        //Change MODAL
        editBtn.addEventListener('click', (e) => {
            this.userChangeModal(user, e);
        })

        const tdDelete: HTMLTableCellElement = document.createElement('td');
        tdDelete.setAttribute('class', 'align-middle')

        const deleteBtn: HTMLButtonElement = document.createElement('button');
        deleteBtn.setAttribute('class', 'btn btn-danger')
        deleteBtn.setAttribute('type', 'button')
        deleteBtn.setAttribute('style', 'padding: 5px 25px; font-size: 14px;')
        deleteBtn.innerHTML = "Delete";
        tdDelete.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', (e) => {
            this.userDelete(user, e);
        });

        TR.appendChild(tdIMG)
        TR.appendChild(tdLogin)
        TR.appendChild(tdPassword)
        TR.appendChild(tdEdit)
        TR.appendChild(tdDelete)

        usersMain?.appendChild(TR);
    }

    checkUser(nickname: string, password: string): void {
        if (account.every(e => e.nickname !== nickname && e.password !== password)) {
            alert('Invalid login or password!!! Please try again.')
        }
        account.forEach(element => {
            if (element.nickname === nickname && element.password === password) {
                this.activeUser = {
                    nickname: nickname,
                    password: password
                }
                localStorage.setItem('active-user' ,JSON.stringify(this.activeUser))
                alert(this.activeUser.nickname + ": " + this.activeUser.password)
                window.open("./index.html", "_self");
            }
        })
    }

    addUser(nickname: string, password: string): void {
        let newUser: IUser = {
            nickname: nickname,
            password: password
        }
        account.push(newUser)
        localStorage.setItem('users', JSON.stringify(account));
        this.createUserTable(newUser);
    }

    userEditInfo(newPassword: string, newConfirmPassword: string): void {
        (this.selectedItem.target as any).parentElement.parentElement.querySelector('#password-login').value = newPassword;
        account[account.indexOf(this.selectedUser)].password = newPassword;
        localStorage.setItem('users', JSON.stringify(account));
        alert('The change was successful!!!')
    }

    private userDelete(item: IUser, e: MouseEvent) {
        (e.target as any).parentElement.parentElement.parentElement.removeChild((e.target as any).parentElement.parentElement);
        account.splice(account.indexOf(item), 1);
        localStorage.setItem('users', JSON.stringify(account));
        alert('The delete was successfully!!!')
    }
}

export let users = new User();
users.setUserTable();

signinBtn?.addEventListener('click', (e) => {
    if (signinLogin.value != "" && signinPassword.value != "") {
        users.checkUser(signinLogin.value, signinPassword.value);
    }
})

signupBtn?.addEventListener('click', (e) => {
    if (signupLogin.value != "" &&
        signupPassword.value != "" &&
        signupConfirmPassword.value != "" &&
        signupPassword.value == signupConfirmPassword.value) {
        users.addUser(signupLogin.value, signupPassword.value);
        alert('Account added!!!')
    } else {
        alert('Invalid login or password!!! Please try again.')
    }
    ;
})

adminAddNewUser?.addEventListener('click', (e) => {
    if (adminNewUserLogin.value != "" &&
        adminNewUserPassword.value != "" &&
        adminNewUserConfirmPassword.value != "" &&
        adminNewUserPassword.value == adminNewUserConfirmPassword.value) {
        users.addUser(adminNewUserLogin.value, adminNewUserPassword.value);
        alert('Account added!!!')
    } else {
        alert('Invalid login or password!!! Please try again.')
    }
    ;
})

modalUserSaveBtn?.addEventListener('click', (e) => {
    if (modalUserConfirmPassword.value != "" && modalUserPassword.value != "" && modalUserPassword.value == modalUserConfirmPassword.value) {
        users.userEditInfo(modalUserPassword.value, modalUserConfirmPassword.value);
    }
})