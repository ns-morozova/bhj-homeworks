const btnTaskAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

btnTaskAdd.addEventListener('click', (event) => {
    event.preventDefault();

    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);

    const remove = tasksList.querySelector('.task').querySelector('.task__remove');

    remove.addEventListener('click', (event) => {
        tasksList.removeChild(event.currentTarget.parentElement);
        let a = 1;
    });

    taskInput.value = '';
})