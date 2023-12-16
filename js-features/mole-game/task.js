getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
  document.getElementById(`hole${i}`).onclick = () => {
    const allItems = document.querySelectorAll('.hole_has-mole');

    if(allItems[0] == getHole(i)) {
      document.getElementById('dead').textContent ++;
    } else {
      document.getElementById('lost').textContent ++;
    }

    let dead = Number(document.getElementById('dead').textContent);
    let lost = Number(document.getElementById('lost').textContent);

    if((dead == 10) || (lost == 5)) {
      alert((dead == 10) ? 'Победа!':'Вы проиграли!');
      document.getElementById('dead').textContent = '0';
      document.getElementById('lost').textContent = '0';
    }
  }
}



