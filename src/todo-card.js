export default function createTodoCard(todo){
    const todoCard = document.createElement('div');
    todoCard.innerHTML = `
    <div class="todo-title">${todo.title}</div>
    <div class='todo-description'>${todo.description}</div>
    <div class='todo-due-color'>
        <div class='todo-due'>${todo.dueDate}</div>
        <div class='todo-color'>${todo.priority}</div>
    </div>`
    todoCard.classList.add('todo-card');
    return todoCard;
}
