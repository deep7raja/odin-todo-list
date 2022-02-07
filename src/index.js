import './style.css';
import './popup-new-todo.css'
import TodoItem from './todo-item.js';
import { createTodoContainer, appendtoTodoContainer } from './todo-container';
import {getNewTodo, createNewTodoForm} from './get-new-todo';
import { initSidebar } from './sidebar';

const projectList = ['project1', 'project2', 'project3', 'project4'];
let currentProject = projectList[0];

const body = document.querySelector('body');
const content = document.querySelector('.content');

let todoList = [];
for(let i=0; i<10; ++i){
    todoList.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}
let todoContainer = createTodoContainer(todoList)
content.appendChild(todoContainer);

initSidebar(projectList);


document.querySelector('#btn-submit-todo').onclick = ()=>{
    appendtoTodoContainer(getNewTodo(), todoContainer);
}

document.querySelector('#btn-new-todo').onclick=()=>{
    createNewTodoForm(projectList, currentProject);
}
