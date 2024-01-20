const getCookie = (name) => {
    const value = ';' + document.cookie;
    let parts = value.split(';' + name + '=');
    if (parts.length === 2) {
        return parts
        .pop()
        .split(';')
        .shift();
    }
}

window.addEventListener('load', () => {
    let param = getCookie('isvisible');

    if (param == undefined) {
        const modal = document.getElementById('subscribe-modal');
        modal.classList.add('modal_active');
        const close = modal.querySelector('.modal__close');
        close.addEventListener('click', (event) => {
            event.preventDefault();
            modal.classList.remove('modal_active');
            document.cookie = 'isvisible=visual';
        })
    }
})

