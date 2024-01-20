const editor = document.getElementById('editor');

window.addEventListener('beforeunload', () => {
    localStorage.setItem('editor', editor.value);
})

window.addEventListener('load', () => {
    editor.value = localStorage.getItem('editor');
})

const card = document.querySelector('.card');
const btn = document.createElement('button');
btn.innerHTML = 'Очистить содержимое';

btn.addEventListener('click', (event) => {
    event.preventDefault();
    editor.value = '';
})

card.appendChild(btn);