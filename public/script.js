document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(removeBtn);
        list.appendChild(li);
    }
});
