import {IDataBase} from "./db";

const cartMainProduct = document.querySelector('.card-main-product');
const cartBuyProductBtn = document.querySelector('#card-buy');
const modalBuyProductBtn = document.querySelector('.save-user-edit');
const modalClientName:HTMLInputElement = document.querySelector('#modal-buy-product-name');
const modalClientPhoneNumber:HTMLInputElement = document.querySelector('#modal-buy-product-tell');

interface IUser {
    nickname: string,
    password: string
}

class Cart {
    private cartProduct: IDataBase[] = (JSON.parse(localStorage.getItem("product"))) ? JSON.parse(localStorage.getItem("product")) : [];
    private user: IUser;

    constructor(user: IUser) {
        this.user = user
    }

    totalPrice() {
        const totalPriceBlock: Element = document.querySelector('.card-price-total');

        const lcCartProduct: IDataBase[] = JSON.parse(localStorage.getItem("product"));
        let sum = 0;
        lcCartProduct?.forEach((e, i) => {
            sum += e.price * e.count;
        })
        if (totalPriceBlock) totalPriceBlock.innerHTML = `${sum}`;
    }

    createCartProduct(item: IDataBase): void {
        const cartProductItem = document.createElement('div')
        cartProductItem.setAttribute('class', 'card-product-item')

        const cartProductImgBlock = document.createElement('div')
        cartProductImgBlock.setAttribute('class', 'card-product-img')
        const cartProductImg = document.createElement('img');
        cartProductImg.setAttribute('src', `${item.img}`)
        cartProductImgBlock.appendChild(cartProductImg);

        const cartProductName = document.createElement('div')
        cartProductName.setAttribute('class', 'card-product-name')
        cartProductName.innerHTML = `${item.name}`;

        const cartProductCount = document.createElement('div')
        cartProductCount.setAttribute('class', 'card-product-count')
        const cartProductCountInput = document.createElement('input')
        cartProductCountInput.setAttribute('id', 'card-product-count-input')
        cartProductCountInput.setAttribute('name', 'card-product-count-input')
        cartProductCountInput.setAttribute('type', 'number')
        cartProductCountInput.setAttribute('min', '0')
        cartProductCountInput.value = `${item.count}`;
        cartProductCount.appendChild(cartProductCountInput);

        cartProductCountInput.addEventListener('input', (e) => {
            let lcCartProduct: IDataBase[] = JSON.parse(localStorage.getItem("product"));
            lcCartProduct.forEach((e, i) => {
                if (e.id === item.id) {
                    lcCartProduct[i].count = parseInt(cartProductCountInput.value);
                }
            })
            localStorage.setItem('product', JSON.stringify(lcCartProduct))
            this.totalPrice();
        })

        const cartProductDelete = document.createElement('div')
        cartProductDelete.setAttribute('class', 'card-product-delete')
        const cartProductDeleteBtn = document.createElement('input')
        cartProductDeleteBtn.setAttribute('value', 'Delete')
        cartProductDeleteBtn.setAttribute('type', 'button')
        cartProductDelete.appendChild(cartProductDeleteBtn);

        cartProductDeleteBtn.addEventListener('click', (e) => {
            let lcCartProduct: IDataBase[] = JSON.parse(localStorage.getItem("product"));
            lcCartProduct.forEach((e, i) => {
                if (e.id === item.id) {
                    lcCartProduct.splice(i, 1);
                }
            });
            (e.target as any).parentElement.parentElement.parentElement.removeChild((e.target as any).parentElement.parentElement);
            localStorage.setItem('product', JSON.stringify(lcCartProduct))
            this.totalPrice();
        })

        cartProductItem.appendChild(cartProductImgBlock)
        cartProductItem.appendChild(cartProductName)
        cartProductItem.appendChild(cartProductCount)
        cartProductItem.appendChild(cartProductDelete)
        cartMainProduct?.appendChild(cartProductItem)
        this.totalPrice();
    }

    autoSetProduct() {
        let product: IDataBase[] = JSON.parse(localStorage.getItem(`product`));

        if (cartMainProduct) {
            cartMainProduct.innerHTML = '';
        }

        product.forEach(e => {
            this.createCartProduct(e)
        });

        this.totalPrice();
    }

    setProduct(item: IDataBase) {
        if (localStorage.getItem("product")) {
            if (JSON.parse(localStorage.getItem("product")).every(e => e.id != item.id)) {
                this.cartProduct.push(item);
                localStorage.setItem("product", JSON.stringify(this.cartProduct))
                this.createCartProduct(item);
                alert('The product was successfully added!!!')
            } else {
                alert('The product has already added!!!')
            }
        } else {
            this.cartProduct.push(item);
            localStorage.setItem("product", JSON.stringify(this.cartProduct))
            this.createCartProduct(item);
            alert('The product was successfully added!!!')
        }
    }

    cardClear() {
        this.cartProduct = [];
        localStorage.removeItem('product');
        this.totalPrice();
        cartMainProduct.innerHTML = "";
    }

}

export let myCart = new Cart(JSON.parse(localStorage.getItem('active-user')));
if (localStorage.getItem("product")) {
    myCart.autoSetProduct();
}

const cardClear: HTMLInputElement = document.querySelector('#card-clear')
cardClear?.addEventListener('click', (e) => {
    myCart.cardClear()
})

export interface IBuy {
    clientName: string,
    phoneNumber: string,
    purchasedProduct: IDataBase[]
}

modalBuyProductBtn?.addEventListener('click', (e) => {
    let orderOfClient: IBuy = {
        clientName: modalClientName.value,
        phoneNumber: modalClientPhoneNumber.value,
        purchasedProduct: JSON.parse(localStorage.getItem("product"))
    };
    localStorage.setItem('orderOfClient', JSON.stringify(orderOfClient));
    alert('Thank you for your purchase')

})