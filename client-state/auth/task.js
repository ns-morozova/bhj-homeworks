const xhr = new XMLHttpRequest();

const btn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
})

function welcomeActive (userId) {
    const signin = document.getElementById('signin');
    if (signin.classList.contains('signin_active')) {
        signin.classList.remove('signin_active');
    }
    const welcome = document.getElementById('welcome');
    const span = welcome.getElementsByTagName('span')[0];
    span.textContent = userId.toString();
    welcome.classList.add('welcome_active');

}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        let answer = JSON.parse(xhr.responseText);
        if (!answer.success) {
            alert('Неверный логин/пароль');
            return;
        } 
        welcomeActive(answer.user_id);

        localStorage.setItem('user_id', answer.user_id);

    }
})

window.addEventListener('load', () => {
    const userId = localStorage.getItem('user_id');
    if (!(userId == undefined)) {
        welcomeActive(userId);
    }
})





