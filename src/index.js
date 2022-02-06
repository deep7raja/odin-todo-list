import './style.css';
import './header.css';
import './popup-new-todo.css'
import TodoItem from './todo-item.js';
import { createTodoContainer, appendtoTodoContainer } from './todo-container';
import {getNewTodo, createNewTodoForm} from './get-new-todo';

const projectList = ['project1', 'project2', 'project3', 'project4'];
let currentProject = projectList[0];

const body = document.querySelector('body');

let todoList = [];
for(let i=0; i<20; ++i){
    todoList.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}
let todoContainer = createTodoContainer(todoList)
body.appendChild(todoContainer);

document.querySelector('#btn-submit-todo').onclick = ()=>{
    appendtoTodoContainer(todoContainer);
}

document.querySelector('#btn-new-todo').onclick=()=>{
    createNewTodoForm(projectList, currentProject);
}
