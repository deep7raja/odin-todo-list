import './style.css';
import './popup-new-todo.css'
import TodoItem from './todo-item.js';
import { updateTodoContainer, appendtoTodoContainer } from './todo-container';
import {getNewTodo, createNewTodoForm} from './get-new-todo';
import { initSidebar } from './sidebar';
import Project from './project-item';
import { updateHeaderProject } from './header';

const projectList = [new Project('default'), new Project('project1'), new Project('project2'), new Project('project3'), new Project('project4')]
let currentProject = projectList[0];

const body = document.querySelector('body');


for(let i=0; i<3; ++i){
    projectList[0].todos.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}
for(let i=0; i<6; ++i){
    projectList[1].todos.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}
for(let i=0; i<10; ++i){
    projectList[2].todos.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}
for(let i=0; i<20; ++i){
    projectList[3].todos.push(new TodoItem('hello', 'there', 'general', 'kenobi'));
}

updateTodoContainer(currentProject.todos)

initSidebar(projectList, currentProject);


document.querySelector('#btn-submit-todo').onclick = ()=>{
    let newTodo = getNewTodo();
    projectList.forEach(project =>{
        if(project.name === newTodo.project){
            currentProject = project;
        }
    });
    currentProject.todos.unshift(newTodo);
    updateTodoContainer(currentProject.todos);
    updateHeaderProject(currentProject);
    // appendtoTodoContainer(newTodo, todoContainer);
}

document.querySelector('#btn-new-todo').onclick=()=>{
    createNewTodoForm(projectList, currentProject);
}
