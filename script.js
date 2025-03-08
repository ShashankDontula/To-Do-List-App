const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
window.onload = () => {
    taskList.innerHTML = localStorage.getItem('tasks') || '';
    attachEventListeners();
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class='delete' onclick='deleteTask(this)'>❌</button>`;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = '';

    saveTasks();
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', taskList.innerHTML);
}

function attachEventListeners() {
    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });
    });
}
