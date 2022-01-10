import {IDataBase} from './db';
import './db';
import {myCart} from "./card";
import {clientOrder} from "./order";

let DataBase: IDataBase[] = JSON.parse(localStorage.getItem('database'));
const productMain = document.getElementById('product-main');

const newProductTitle: HTMLInputElement = document.querySelector('#validationTooltip1');
const newProductPrice: HTMLInputElement = document.querySelector('#validationTooltip2');
const newProductDiscount: HTMLInputElement = document.querySelector('#validationTooltip3');
const newProductDescription: HTMLInputElement = document.querySelector('#validationTooltip4');

const modalTitle: HTMLInputElement = document.querySelector('#validationTooltip11');
const modalPrice: HTMLInputElement = document.querySelector('#validationTooltip22');
const modalDiscount: HTMLInputElement = document.querySelector('#validationTooltip33');
const modalDescription: HTMLInputElement = document.querySelector('#validationTooltip44');
const productTabMain = document.querySelectorAll('.lookbookItems .tab-pane .tab-main-inner');
const indexProduct: Element = document.querySelector('.main-product');


const productViewBannerTitle = document.querySelector('#banner__subtitle');
const imgZoom = document.querySelector('#img-zoom-container img');
const productViewTitle = document.querySelector('#product__title');
const productViewIdCode = document.querySelector('#product-id-code');
const productViewPrice = document.querySelector('.product__price span');
const productViewAddToCart = document.querySelector('.product-add-to-cart');

class Product {
    private defaultImage: string = './image/defaultimg.jpg';
    private selectedProduct: IDataBase;
    private selectedItem: MouseEvent;

    adminSetProduct(): void {
        DataBase.forEach(element => {
            this.adminCreateProduct(element);
        });
    }

    userSetProduct(): void {
        DataBase.forEach(element => {
            this.createProduct(element);
        });
    }

    indexSetProduct(): void {
        DataBase.forEach(element => {
            this.indexCreateProduct(element);
        });
    }

    private indexCreateProduct(item: IDataBase): void {
        const tabsItem: Element = document.createElement('div');
        tabsItem.setAttribute('class', 'tabs-item')

        const tabsItemImgBlock: Element = document.createElement('div');
        tabsItemImgBlock.setAttribute('class', 'tabs-item-img')
        const tabsItemImg: Element = document.createElement('img');
        tabsItemImg.setAttribute('data-productId', `${item.id}`);
        tabsItemImg.setAttribute('src', `${item.img}`);

        const tabsItemInfoIcon: Element = document.createElement('i');
        tabsItemInfoIcon.setAttribute('class', 'fas fa-info-circle');
        tabsItemImgBlock.appendChild(tabsItemImg);
        tabsItemImgBlock.appendChild(tabsItemInfoIcon);
        tabsItem.appendChild(tabsItemImgBlock);

        const tabsItemFooter: Element = document.createElement('div');
        tabsItemFooter.setAttribute('class', 'tabs-item-footer')

        const tabsItemTitle: Element = document.createElement('div');
        tabsItemTitle.setAttribute('class', 'tabs-item-title')
        tabsItemTitle.innerHTML = `${item.name}`;

        const tabsItemText: Element = document.createElement('div');
        tabsItemText.setAttribute('class', 'tabs-item-text')
        tabsItemText.innerHTML = `${item.description}`;

        const tabsItemOrder: Element = document.createElement('div');
        tabsItemOrder.setAttribute('class', 'tabs-item-order');

        const tabsItemCard: Element = document.createElement('button');
        tabsItemCard.setAttribute('class', 'tabs-item-cart');
        tabsItemCard.setAttribute('data-productId', `${item.id}`);
        tabsItemCard.innerHTML = `<i class="fas fa-shopping-cart"></i>`

        tabsItemCard?.addEventListener('click', (e) => {
            addCart(item);
        })

        const tabsItemFavourite: Element = document.createElement('button');
        tabsItemFavourite.setAttribute('class', 'tabs-item-favourite');
        tabsItemFavourite.innerHTML = `<i class="fas fa-heart"></i>`

        const tabsItemCompare: Element = document.createElement('button');
        tabsItemCompare.setAttribute('class', 'tabs-item-compare');
        tabsItemCompare.innerHTML = `<i class="fas fa-compress-alt"></i>`
        tabsItemOrder.appendChild(tabsItemCard);
        tabsItemOrder.appendChild(tabsItemFavourite);
        tabsItemOrder.appendChild(tabsItemCompare);

        tabsItemFooter.appendChild(tabsItemTitle)
        tabsItemFooter.appendChild(tabsItemText)
        tabsItemFooter.appendChild(tabsItemOrder)

        tabsItem.appendChild(tabsItemImgBlock)
        tabsItem.appendChild(tabsItemFooter)

        indexProduct?.appendChild(tabsItem)

        tabsItemImgBlock?.addEventListener('click', (e) => {
            localStorage.setItem('selectedProduct', JSON.stringify(item));
            openProductView();
        })

    }

    //USER PRODUCT
    private createProduct(item: IDataBase): void {
        const tabItem = document.createElement('div')
        tabItem.setAttribute('class', 'tabs-item');

        const tabItemImg = document.createElement('div')
        tabItemImg.setAttribute('class', 'tabs-item-img');
        const productImg = document.createElement('img')
        productImg.setAttribute('data-productId', `${item.id}`);
        productImg.setAttribute('src', `${item.img}`);

        const tabItemHover = document.createElement('div')
        tabItemHover.setAttribute('class', 'tabs-item-hover');
        const tabHoverInfoIcon = document.createElement('i');
        tabHoverInfoIcon.setAttribute('class', `fas fa-info-circle`)
        const tabHoverLikeIcon = document.createElement('i');
        tabHoverLikeIcon.setAttribute('class', `fas fa-heart`)

        tabItemHover.appendChild(tabHoverInfoIcon)
        tabItemHover.appendChild(tabHoverLikeIcon)

        tabItemImg.appendChild(productImg);
        tabItemImg.appendChild(tabItemHover);

        tabItem.appendChild(tabItemImg);

        productTabMain.forEach(element => {
            element.appendChild(tabItem);
        })
    }

    //ADMIN PRODUCT
    private adminCreateProduct(item: IDataBase): void {
        const TR = document.createElement('tr');
        TR.style.border = '1px solid #ccc;';

        //PRODUCT IMAGE
        const tdImage = document.createElement('td');
        tdImage.setAttribute('class', `product-img text-center`);
        const productImg = document.createElement('IMG');
        productImg.setAttribute('src', `${(item.img) ? item.img : this.defaultImage}`);
        productImg.style.width = '40px';
        productImg.style.height = '40px';
        productImg.style.borderRadius = '50%';
        tdImage.appendChild(productImg);

        //PRODUCT TITLE
        const tdType = document.createElement('td');
        tdType.setAttribute('class', `product-title text-center`);
        const productTitle = document.createElement('span');
        productTitle.innerText = `${item.name}`;
        tdType.appendChild(productTitle);

        //PRODUCT PRICE
        const tdPrice = document.createElement('td');
        tdPrice.setAttribute('class', `product-price text-center`);
        tdPrice.setAttribute('scope', `row`);
        const productPrice = document.createElement('span');
        productPrice.innerText = `${item.price}`;
        tdPrice.appendChild(productPrice);

        //PRODUCT ID
        const tdProductId = document.createElement('td');
        tdProductId.setAttribute('class', `product-id text-center`);
        const productID = document.createElement('span');
        productID.innerText = `${item.id}`;
        tdProductId.appendChild(productID);

        //PRODUCT DISCOUNT
        const tdDiscount = document.createElement('td');
        tdDiscount.setAttribute('class', `product-discount text-center`);
        const productDiscount = document.createElement('span');
        productDiscount.innerText = `${item.discount}`;
        tdDiscount.appendChild(productDiscount);

        //PRODUCT CHANGE
        const tdChange = document.createElement('td');
        tdChange.setAttribute('class', `product-change text-center`);
        const productChange = document.createElement('button');
        productChange.setAttribute('type', `button`);
        productChange.setAttribute('class', `btn btn-primary`);
        productChange.setAttribute('data-toggle', `modal`);
        productChange.setAttribute('data-target', '#exampleModal')
        productChange.innerText = 'Change';
        tdChange.appendChild(productChange);

        //Change MODAL SHOW
        productChange.addEventListener('click', (e) => {
            this.productChangeModal(item, e);
        })

        //PRODUCT DELETE
        const tdDelete = document.createElement('td');
        tdDelete.setAttribute('class', `product-delete text-center`);
        const productDelete = document.createElement('button');
        productDelete.setAttribute('class', `btn btn-danger`);
        productDelete.innerText = 'Delete';
        tdDelete.appendChild(productDelete);

        //PRODUCT DELETE
        productDelete.addEventListener('click', (e) => {
            this.productDelete(item, e);
        });

        TR.appendChild(tdImage);
        TR.appendChild(tdType);
        TR.appendChild(tdPrice);
        TR.appendChild(tdProductId);
        TR.appendChild(tdDiscount);
        TR.appendChild(tdChange);
        TR.appendChild(tdDelete);

        productMain?.appendChild(TR);
    }

    private productChangeModal(item: IDataBase, e: MouseEvent) {
        this.selectedProduct = item;
        this.selectedItem = e;
        modalTitle.value = `${item.name}`;
        modalPrice.value = `${item.price}`;
        modalDiscount.value = `${item.discount}`;
        modalDescription.value = `${item.description}`;
    }

    changeInfo(): void {
        (this.selectedItem.target as any).parentElement.parentElement.querySelector('.product-title span').innerText = modalTitle.value;
        (this.selectedItem.target as any).parentElement.parentElement.querySelector('.product-price span').innerText = modalPrice.value;
        (this.selectedItem.target as any).parentElement.parentElement.querySelector('.product-discount span').innerText = modalDiscount.value;
        DataBase[DataBase.indexOf(this.selectedProduct)].description = modalDescription.value;
        DataBase[DataBase.indexOf(this.selectedProduct)].name = modalTitle.value;
        DataBase[DataBase.indexOf(this.selectedProduct)].price = parseInt(modalPrice.value);
        DataBase[DataBase.indexOf(this.selectedProduct)].discount = parseInt(modalDiscount.value);
        localStorage.setItem('database', JSON.stringify(DataBase));
        alert('The change was successful!!!')
    }

    private productDelete(item: IDataBase, e: MouseEvent) {
        (e.target as any).parentElement.parentElement.parentElement.removeChild((e.target as any).parentElement.parentElement);
        DataBase.splice(DataBase.indexOf(item), 1);
        localStorage.setItem('database', JSON.stringify(DataBase));
        alert('The delete was successfully!!!')
    }

    addProduct(type: string, price: number, discount: number, description: string) {
        let newProduct: IDataBase = {
            id: DataBase[DataBase.length - 1].id + 1,
            price: price,
            name: type,
            description: description,
            img: this.defaultImage,
            discount: discount,
            count: 1
        }

        this.createProduct(newProduct)
        this.adminCreateProduct(newProduct)
        DataBase.push(newProduct);
        localStorage.setItem('database', JSON.stringify(DataBase));
    }
}

let products = new Product();

const modalSaveBtn: HTMLButtonElement = document.querySelector('.save-edit');
if (modalSaveBtn) {
    modalSaveBtn.addEventListener('click', (e) => {
        products.changeInfo();
    })
}

const addNewProductBtn = document.querySelector('.add-new-product');
if (addNewProductBtn) {
    addNewProductBtn.addEventListener('click', (e) => {
        if (newProductTitle.value != "" && newProductTitle.value != " " &&
            newProductPrice.value != "" && newProductPrice.value != " " &&
            newProductDiscount.value != "" && newProductDiscount.value != " " &&
            newProductDescription.value != "" && newProductDescription.value != " "
        ) {
            products.addProduct(newProductTitle.value, parseInt(newProductPrice.value), parseInt(newProductDiscount.value), newProductDescription.value);
        }
    })
}

window.onload = function () {
    products.userSetProduct();
    products.adminSetProduct();
    products.indexSetProduct();
    setProductView();
    clientOrder.createClient();
    clientOrder.setPurchasedProduct();
};

function addCart(item: IDataBase) {
    myCart.setProduct(item);
}

function openProductView(): void {
    window.open('./product-view.html', '_self')
}

function setProductView() {
    let item: IDataBase = JSON.parse(localStorage.getItem('selectedProduct'))
    if(productViewBannerTitle) productViewBannerTitle.innerHTML = `${item.name}`;
    imgZoom?.setAttribute('src', `${item.img}`);
    if(productViewTitle) productViewTitle.innerHTML = `${item.name}`;
    if(productViewIdCode) productViewIdCode.innerHTML = `#${item.id}`;
    if(productViewPrice) productViewPrice.innerHTML = `${item.price}`;
}

productViewAddToCart?.addEventListener('click', (e) => {
    let item: IDataBase = JSON.parse(localStorage.getItem('selectedProduct'))
    addCart(item);
})