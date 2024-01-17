const btnTaskAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function removeTask (event) {
    if (!event.target.classList.contains ('task__remove')) {
        return;
    }
    tasksList.removeChild(event.currentTarget);
}

let counter = 1;

btnTaskAdd.addEventListener('click', (event) => {
    const task = document.createElement('div');
    task.className = 'task';
    task.setAttribute('data-id', counter.toString());

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    task.appendChild(taskTitle);

    const remove = document.createElement('a');
    remove.className = 'task__remove';
    remove.innerHTML = '<a href="#" class="task__remove">&times;</a>';
    remove.setAttribute('data-id', counter.toString());
    task.appendChild(remove);

    task.addEventListener('click', removeTask);

    
    taskTitle.innerHTML = taskInput.value;
    tasksList.appendChild(task);
    counter ++;
    taskInput.value = '';

    event.preventDefault();
})
