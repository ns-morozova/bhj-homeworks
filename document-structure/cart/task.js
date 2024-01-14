const products = document.getElementsByClassName('product');

for (const product of products) {
    product.addEventListener('click', (event) => {
        const currentTarget = event.currentTarget;
        const productValue = currentTarget.getElementsByClassName('product__quantity-value')[0];
        if (event.target.classList.contains('product__quantity-control_inc')) {
            productValue.innerText ++;
        } else if (event.target.classList.contains('product__quantity-control_dec')) {
            productValue.innerText --;
            if (productValue.innerText == '0') productValue.innerText = '1';
        } else if (event.target.classList.contains('product__add')) {
            let id = currentTarget.dataset.id;
           
            const cartProducts = document.getElementsByClassName('cart__product');

            let n = -1;

            for (let i = 0; i < cartProducts.length; i ++) {
                const cartProduct = cartProducts[i];
                if (cartProduct.dataset.id == id) {
                    n = i;
                }
            }



            if (n == -1) {
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
                const cartProduct = cartProducts[n];
                const count = cartProduct.querySelector('.cart__product-count');
                let oldCount = Number(count.textContent);
                count.textContent = (oldCount + Number(productValue.textContent)).toString();
            }

        }

    })
}