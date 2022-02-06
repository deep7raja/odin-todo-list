import createTodoCard from "./todo-card";

export function createTodoContainer(todoList){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-card-container');
    todoList.forEach(todo => {
        todoContainer.appendChild(createTodoCard(todo));
    });
    return todoContainer;
}

export function appendtoTodoContainer(todo, todoContainer){
    todoContainer.appendChild(createTodoCard(todo));
}