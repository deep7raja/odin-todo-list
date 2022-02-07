import { updateHeaderProject } from "./header";
import Project from "./project-item";
import { updateTodoContainer } from "./todo-container";

export function initSidebar(projectList, currentProject){
    const form = document.querySelector('.new-project-form');
    const btnNewProject = document.querySelector('#btn-new-project');
    const btnSubmitProject = document.querySelector('#btn-new-project-submit');
    const inProjectName = document.querySelector('#in-new-project');
    form.style.display = 'none';
    btnNewProject.onclick = ()=>{form.style.display = 'flex';};
    btnSubmitProject.onclick = ()=>{
        form.style.display = 'none';
        projectList.unshift(new Project(inProjectName.value));
        currentProject = projectList[0];
        updateHeaderProject(currentProject);
        updateTodoContainer(currentProject.todos)
        fillSidebar(projectList);
    };
    fillSidebar(projectList);
}

export function fillSidebar(projectList){
    let list = document.querySelector('.sidebar>ul');
    while(list.lastChild){
        list.removeChild(list.lastChild);
    }
    projectList.forEach(project => {
        let item = document.createElement('li');
        item.innerHTML = project.name;
        list.appendChild(item);
        item.onclick=()=>{
            updateHeaderProject(project);
            updateTodoContainer(project.todos);
        };
    });
}