import createTodoCard from "./todo-card";

export function updateTodoContainer(todoList){
    const content = document.querySelector('.content');
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-card-container');
    todoList.forEach(todo => {
        todoContainer.appendChild(createTodoCard(todo));
    });
    if(content.childNodes.length>1){
        content.removeChild(content.lastChild);
    }
    content.appendChild(todoContainer);
}

export function appendtoTodoContainer(todo, todoContainer){
    todoContainer.insertBefore(createTodoCard(todo),  todoContainer.firstChild);   //to add new todo at first 
    // todoContainer.appendChild(createTodoCard(todo));                            //it was adding at last
}