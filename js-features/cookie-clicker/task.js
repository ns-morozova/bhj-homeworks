const clicker = document.getElementById('clicker__counter');
const cookieSizes = document.getElementById('cookie');
const clickSpeed = document.getElementById('clicker__speed');
let dat1 = new Date;

cookieSizes.onclick = function changeSizes() {
    clicker.textContent ++;
    let nom = Number(clicker.textContent);

    if(nom % 2 === 0) {
        cookieSizes.width = 200;
    } else {
        cookieSizes.width = 150;
    }

    let dat2 = new Date;

    let average = 1/((dat2.getTime() - dat1.getTime())/1000);
    clickSpeed.textContent = average.toFixed(2);

    dat1 = dat2;
    
}