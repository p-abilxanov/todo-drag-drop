import {IBuy} from "./card";
import {IDataBase} from "./db";

const clientBuyPurchaseMainBlock = document.querySelector('.client-product-purchase')

class Order {
    createClient(): void {
        const item: IBuy = (localStorage.getItem('orderOfClient')) ? JSON.parse(localStorage.getItem('orderOfClient')) : undefined;

        const TR = document.createElement('TR');
        TR.style.borderTop = '1px solid #ccc';

        const clientNameTD = document.createElement('TD');
        clientNameTD.setAttribute('class', 'align-middle text-center text-sm')
        clientNameTD.innerHTML = `${item.clientName}`;

        const clientPhoneNumberTD = document.createElement('TD');
        clientPhoneNumberTD.setAttribute('class', 'align-middle text-center text-sm')
        clientPhoneNumberTD.innerHTML = `${item.phoneNumber}`;

        const clientProductShowTD = document.createElement('TD');
        clientProductShowTD.setAttribute('class', 'align-middle text-center text-sm')

        const clientProductShowBTN = document.createElement('button');
        clientProductShowBTN.setAttribute('type', 'button')
        clientProductShowBTN.setAttribute('class', 'btn btn-primary')
        clientProductShowBTN.setAttribute('data-toggle', 'modal')
        clientProductShowBTN.setAttribute('data-target', '#exampleModal')
        clientProductShowBTN.style.padding = '5px 25px';
        clientProductShowBTN.style.fontSize = '14px';
        clientProductShowBTN.innerHTML = 'Show'
        clientProductShowTD.appendChild(clientProductShowBTN)

        const clientProductExecuteTD = document.createElement('TD');
        clientProductExecuteTD.setAttribute('class', 'align-middle text-center text-sm')

        const clientProductExecuteBTN = document.createElement('button');
        clientProductExecuteBTN.setAttribute('type', 'button')
        clientProductExecuteBTN.setAttribute('class', 'btn btn-danger')
        clientProductExecuteBTN.style.padding = '5px 25px';
        clientProductExecuteBTN.style.fontSize = '14px';
        clientProductExecuteBTN.innerHTML = 'Execute'
        clientProductExecuteTD.appendChild(clientProductExecuteBTN)

        TR.appendChild(clientNameTD);
        TR.appendChild(clientPhoneNumberTD);
        TR.appendChild(clientProductShowTD);
        TR.appendChild(clientProductExecuteTD);

        clientBuyPurchaseMainBlock?.appendChild(TR);
    }

    showProduct(item: IDataBase){
        const TR = document.createElement('tr');
        TR.style.border = '1px solid #ccc;';

        //PRODUCT IMAGE
        const tdImage = document.createElement('td');
        tdImage.setAttribute('class', `product-img text-center`);
        const productImg = document.createElement('IMG');
        productImg.setAttribute('src', `${item.img}`);
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

        //PRODUCT Count
        const tdCount = document.createElement('td');
        tdCount.setAttribute('class', `product-count text-center`);
        const productCount = document.createElement('span');
        productCount.innerText = `${item.count}`;
        tdCount.appendChild(productCount);

        //PRODUCT DISCOUNT
        const tdDiscount = document.createElement('td');
        tdDiscount.setAttribute('class', `product-discount text-center`);
        const productDiscount = document.createElement('span');
        productDiscount.innerText = `${item.discount}`;
        tdDiscount.appendChild(productDiscount);

        TR.appendChild(tdImage);
        TR.appendChild(tdType);
        TR.appendChild(tdPrice);
        TR.appendChild(tdProductId);
        TR.appendChild(tdCount);
        TR.appendChild(tdDiscount);

        document.querySelector('#orderOfClient-main')?.appendChild(TR);
    }

    setPurchasedProduct(){
        const item: IDataBase[] = (localStorage.getItem('orderOfClient')) ? JSON.parse(localStorage.getItem('orderOfClient')).purchasedProduct : undefined;
        item.forEach((e) => {
            this.showProduct(e);
        })
    }
}

export let clientOrder = new Order();

