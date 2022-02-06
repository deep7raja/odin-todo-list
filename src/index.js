import './style.css';
import './header.css';
import './popup-new-todo.css'


import TodoItem from './todo-item.js';
import createTodoCard from './todo-card.js';
import { createTodoContainer } from './todo-container';
import getNewTodo from './get-new-todo';

const body = document.querySelector('body');

let todoList = [];
for(let i=0; i<20; ++i){
    todoList.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}
body.appendChild(createTodoContainer(todoList));

document.querySelector('#btn-submit-todo').onclick = ()=>{
    console.log(getNewTodo());
}
