const products = document.getElementsByClassName('product');


for (const product of products) {
    product.addEventListener('click', (event) => {
        const currentTarget = event.currentTarget;
        const productValue = currentTarget.getElementsByClassName('product__quantity-value')[0];
        if (event.target.classList.contains('product__quantity-control_inc')) {
            productValue.innerText ++;
        } else if (event.target.classList.contains('product__quantity-control_dec')) {
            productValue.innerText --;
            if (productValue.innerText == '0') {
                productValue.innerText = '1';
            }
        } else if (event.target.classList.contains('product__add')) {
            let id = currentTarget.dataset.id;
            const cartProducts = Array.from(document.getElementsByClassName('cart__product'));

            const cartProduct = cartProducts.find(element => element.dataset.id == id);


            if (cartProduct == undefined) {
                const basket = document.querySelector('.cart__products');

                basket.insertAdjacentHTML('afterbegin', `
                    <div class="cart__product" data-id=${id}>
                        <img class="cart__product-image" src=${currentTarget.querySelector('.product__image').src}>
                        <div class="cart__product-count">${currentTarget.querySelector('.product__quantity-value').outerText}</div>
                    </div>
                `);

            } else {
                const count = cartProduct.querySelector('.cart__product-count');
                let oldCount = Number(count.textContent);
                count.textContent = (oldCount + Number(productValue.textContent)).toString();
            }

        }

    })
}