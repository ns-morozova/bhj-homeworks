let xhr = new XMLHttpRequest();

const btnSend = document.getElementById('send');
const progress = document.getElementById('progress');

btnSend.addEventListener('click', (event) => {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
    event.preventDefault();
})

xhr.upload.addEventListener('progress', (event) => {
    progress.value = event.loaded / event.total;
})