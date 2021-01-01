const submitBtn = document.getElementById('submit-Btn');
const todoInput = document.getElementById('todo-Input');
const todoList = document.querySelector('.todo-List');
const filter = document.querySelector('.filter-todo');

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    let newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-item');
    todoList.appendChild(newTodoDiv);

    let newTodo = document.createElement('li');
    newTodoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;

    let completeBtn = document.createElement('button');
    newTodoDiv.appendChild(completeBtn);
    completeBtn.id = 'complete-btn';
    completeBtn.innerHTML = '<i id="completeIcon" class="fas fa-check"></i>';

    let deleteBtn = document.createElement('button');
    newTodoDiv.appendChild(deleteBtn);
    deleteBtn.id = 'delete-btn';
    deleteBtn.innerHTML = '<i id="deleteIcon" class="fas fa-trash"></i>';

    todoInput.value = '';
});

todoList.addEventListener('click', e => {
    const item = e.target;
    if (item.id === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    if (item.id === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
});

filter.addEventListener('click', e => {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
})