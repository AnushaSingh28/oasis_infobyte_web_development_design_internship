function addTask() {
    const titleInput = document.getElementById('task-title');
    const descInput = document.getElementById('task-desc');
    const taskTitle = titleInput.value.trim();
    const taskDesc = descInput.value.trim();
    if (taskTitle === '' || taskDesc === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>${taskTitle}</strong>: ${taskDesc}`;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => completeTask(taskItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    document.getElementById('pending-tasks').appendChild(taskItem);
    titleInput.value = '';
    descInput.value = '';
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    document.getElementById('completed-tasks').appendChild(taskItem);
    taskItem.querySelector('button').remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}
