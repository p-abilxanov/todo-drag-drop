export interface IDataBase {
    id: number
    name: string
    price: number
    discount: number
    count: number
    img?: string
    description: string
}

let DataBase: IDataBase[] = [
    {id: 1, name: 'ave classic sweatshirt', price: 107, discount: 10, count: 1, img: './image/itemImg1.png', description: 'Classic casual t-shirt for women on the move. 100% cotton.'},
    {id: 2, name: 'ave classic sweatshirt', price: 120, discount: 10, count: 1, img: './image/itemImg2.png', description: 'Classic casual t-shirt for women on the move.100% cotton.'},
    {id: 3, name: 'ave classic sweatshirt', price: 100, discount: 10, count: 1, img: './image/itemImg3.png', description: 'Classic casual t-shirt for women on the move.100% cotton.'},
    {id: 4, name: 'ave classic sweatshirt', price: 90, discount: 10, count: 1, img: './image/itemImg4.png', description: 'Classic casual t-shirt for women on the move.100% cotton.'},
    {id: 5, name: 'ave classic sweatshirt', price: 115, discount: 10, count: 1, img: './image/itemImg5.png', description: 'Classic casual t-shirt for women on the move.100% cotton.'},
    {id: 6, name: 'ave classic sweatshirt', price: 130, discount: 10, count: 1, img: './image/itemImg6.png', description: 'Classic casual t-shirt for women on the move.100% cotton.'},
    {id: 7, name: 'ave classic sweatshirt', price: 105, discount: 10, count: 1, img: './image/itemImg7.png', description: 'Classic casual t-shirt for women on the move.100% cotton.'},
]

if(!localStorage.getItem('database')){
    localStorage.setItem('database', JSON.stringify(DataBase));
}
export interface IUser {
    nickname: string
    password: string
}
let account: IUser[] = [
    {
        nickname: 'admin',
        password: 'admin'
    }, {
        nickname: 'abc',
        password: 'abc'
    }, {
        nickname: 'aaa',
        password: 'aaa'
    }, {
        nickname: 'bbb',
        password: 'ccc'
    },
];

if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(account));
}