import createTodoCard from "./todo-card";
import {getNewTodo} from './get-new-todo';

export function createTodoContainer(todoList){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-card-container');
    todoList.forEach(todo => {
        todoContainer.appendChild(createTodoCard(todo));
    });
    return todoContainer;
}

export function appendtoTodoContainer(todoContainer){
    todoContainer.appendChild(createTodoCard(getNewTodo()));
}