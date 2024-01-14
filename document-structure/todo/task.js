const btnTaskAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function RemoveTask (event) {
    let id = event.currentTarget.dataset.id;
    const tasks = document.getElementsByClassName('task');

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].dataset.id == id) {
            tasksList.removeChild(tasks[i]);
        }
    }
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

    remove.addEventListener('click', RemoveTask);

    
    taskTitle.innerHTML = taskInput.value;
    tasksList.appendChild(task);
    counter ++;
    taskInput.value = '';

    event.preventDefault();
})
