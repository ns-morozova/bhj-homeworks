const hints = document.getElementsByClassName('has-tooltip');

const tip = document.createElement('div');
tip.className = 'tooltip';
document.body.appendChild(tip);

for (const hint of hints) {
    hint.addEventListener('click', (event) => {
        const text = event.currentTarget;   
        
        if (!tip.classList.contains('tooltip_active')) {
            tip.classList.add('tooltip_active');
        } else if (tip.innerHTML == text.title) {
            tip.classList.remove('tooltip_active');
            return;
        }
               
        tip.innerHTML = text.title; //отправка в подсказку строки

        let tarRect = text.getBoundingClientRect(); // координаты HTML-элемента
        let x = tarRect.x;
        if (x < 0) x = 0;                          // корректируем, если вылезла слева
        
        let y = tarRect.y + text.offsetHeight;      // подсказка под HTML-элементом
    
        tip.style.left = x + "px";                 // перемещаем подсказку
        tip.style.top = y + "px";                  // в нужное место

        event.preventDefault();  //отключаем обновление страницы
    })
    
}