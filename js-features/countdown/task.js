const timer = document.getElementById('timer');
let counter = Number(timer.textContent);
let dat = new Date;
dat.setHours(0, 0, counter);
timer.textContent = dat.toLocaleTimeString();
var interval_id = setInterval(()=> {
    counter --;
    dat.setHours(0, 0, counter);
    timer.textContent = dat.toLocaleTimeString();
    if(counter === 0) {
        clearInterval(interval_id);
        dat.setHours(0, 0, counter);
        timer.textContent = dat.toLocaleTimeString();
        alert("Вы победили в конкурсе");
    }
}, 1000);




