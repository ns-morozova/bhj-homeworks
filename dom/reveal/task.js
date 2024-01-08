function IsVisible (target) {
    const targetPosition = target.getBoundingClientRect();
    // Получаем позиции окна
    const windowPosition = {
        top: 0,
        left: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
    };

    if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
      // Если элемент полностью видно
      return true;
    } else {
      return false;
    };

  };

window.addEventListener('scroll', (event) => {
    const reveals = document.getElementsByClassName('reveal');
    for (let i = 0; i < reveals.length; i++) {
        const reveal = reveals[i];
        if (IsVisible(reveal)) {
            if (!reveal.classList.contains('reveal_active')) {
                reveal.classList.add('reveal_active');
            } 
        } else {
            if (reveal.classList.contains('reveal_active')) {
                reveal.classList.remove('reveal_active');
            }
        }
    }
});


