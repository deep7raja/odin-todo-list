import './style.css';
import './popup-new-todo.css'
import { updateTodoContainer } from './todo-container';
import {getNewTodo, createNewTodoForm, cancelNewTodo} from './get-new-todo';
import { initSidebar } from './sidebar';
import Project from './project-item';
import { updateHeaderProject } from './header';

let projectList;
let projectListJSON = localStorage.getItem('projectList');
if(projectListJSON){
    projectList = JSON.parse(projectListJSON);
}
else{
    projectList = [new Project('default')];
}

let currentProject = projectList[0];

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
    localStorage.setItem('projectList', JSON.stringify(projectList));
    // appendtoTodoContainer(newTodo, todoContainer);
}
document.querySelector('#btn-cancel-todo-add').onclick = ()=>{
    cancelNewTodo();
}

document.querySelector('#btn-new-todo').onclick=()=>{
    createNewTodoForm(projectList, currentProject);
}
