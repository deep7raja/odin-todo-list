import createTodoCard from "./todo-card";

export function createTodoContainer(todoList){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-card-container');
    todoList.forEach(todo => {
        todoContainer.appendChild(createTodoCard(todo));
        console.log(todo);
    });
    return todoContainer;
}