const element = document.getElementsByClassName('dropdown__list')[0];

document.getElementsByClassName('dropdown__value')[0].onclick = () => { 
    element.classList.add('dropdown__list_active');
}

const list = document.getElementsByClassName('dropdown__item');
for(let i = 0; i < list.length; i++) {
    const item = list[i];
    item.onclick = (event) => {
        event.preventDefault();
        let a = event.currentTarget.getElementsByTagName('a')[0].innerText;
        document.getElementsByClassName('dropdown__value')[0].textContent = a;
        element.classList.remove('dropdown__list_active');
    }
}