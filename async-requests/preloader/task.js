let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        const loader = document.getElementById('loader');
        if (loader.classList.contains) {
            loader.classList.remove('loader_active');
        }

        let curr = JSON.parse(xhr.responseText);
        const items = document.getElementById('items');

        for (let k in curr.response.Valute) {
            const item = document.createElement('div');
            item.className = 'item';

            valute = curr.response.Valute[k];
            const itemCode = document.createElement('div');
            itemCode.className = 'item__code';
            itemCode.textContent = valute.CharCode;
            item.appendChild(itemCode);

            const itemValue = document.createElement('div');
            itemValue.className = 'item__value';
            itemValue.textContent = valute.Value.toString();
            item.appendChild(itemValue);

            const itemCurrency = document.createElement('div');
            itemCurrency.className = 'item__currency';
            itemCurrency.textContent = 'руб.';
            item.appendChild(itemCurrency);

            items.appendChild(item);

        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send();
