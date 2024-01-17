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

            const cartProduct = cartProducts.find((element) => {
                if (element.dataset.id == id) {
                    return element;
                } else {
                    return undefined;
                }
            });


            if (cartProduct == undefined) {
                const image = currentTarget.querySelector('.product__image');

                const cartProduct = document.createElement('div'); //карточка корзины
                cartProduct.className = 'cart__product';

                const img = document.createElement('img');
                img.className = 'cart__product-image';
                img.setAttribute('src', image.src);

                cartProduct.appendChild(img);

                const count = document.createElement('div');
                count.className = 'cart__product-count';
                count.textContent = currentTarget.querySelector('.product__quantity-value').outerText;

                cartProduct.appendChild(count);
                cartProduct.setAttribute('data-id', id);

                const basket = document.querySelector('.cart__products');
                basket.appendChild(cartProduct);

            } else {
                const count = cartProduct.querySelector('.cart__product-count');
                let oldCount = Number(count.textContent);
                count.textContent = (oldCount + Number(productValue.textContent)).toString();
            }

        }

    })
}