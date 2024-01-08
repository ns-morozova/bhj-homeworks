const rotators = document.getElementsByClassName('rotator__case');
let counter = 0;

setInterval( () => {
    for (let i = 0; i < rotators.length; i++) {
        const rotator = rotators[i];
        if (i == counter) {
            rotator.classList.add('rotator__case_active');
        } else if (rotator.classList.contains('rotator__case_active')) {
            rotator.classList.remove('rotator__case_active');

        }
    }
    counter ++;
    if (counter == rotators.length) {
        counter = 0;
    }
}, 1000)