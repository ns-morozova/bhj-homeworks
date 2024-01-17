let xhr = new XMLHttpRequest(); //запрос к генератору вопросов
let xhr1 = new XMLHttpRequest(); //запрос к получению ответов

const pollTitle = document.getElementById('poll__title');
const pollAnsw = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {

        let questions = JSON.parse(xhr.responseText);
        pollTitle.textContent = questions.data.title;
        
        for (let i = 0; i < questions.data.answers.length; i ++) {
            let answer = questions.data.answers[i];
            const btnAnswer = document.createElement('button');
            btnAnswer.className = 'poll__answer';
            btnAnswer.textContent = answer;
            pollAnsw.appendChild(btnAnswer);

            btnAnswer.addEventListener('click', (event) => {
                alert('Спасибо, ваш голос засчитан!');
                
                xhr1.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr1.send(`vote=${questions.id.toString()}&answer=${i.toString()}`);
                //location.reload();
            })

        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr1.addEventListener('readystatechange', () => {
    if (xhr1.readyState == xhr1.DONE) {
        let questions = JSON.parse(xhr1.responseText);
        const btns = Array.from(document.getElementsByClassName('poll__answer'));
        for (let i = 0; i < btns.length; i ++) {
            const btn = btns[i];
            pollAnsw.removeChild(btn);
        }

        let sum = 0;

        for (let i = 0; i < questions.stat.length; i ++) {
            const status = questions.stat[i];
            sum = sum + Number(status.votes);
        }

        for (let i = 0; i < questions.stat.length; i ++) {
            const status = questions.stat[i];

            const divStat = document.createElement('div');
            //divStat.className = '';
            divStat.textContent = status.answer + ': ' + (Number(status.votes)/sum*100).toFixed(2) + '%';
            pollAnsw.appendChild(divStat);
        }
    }
})
