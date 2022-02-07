import TodoItem from "./todo-item";

const form = document.querySelector('.popup-new-todo');

export function getNewTodo(){
    form.style.visibility = 'hidden';
    return new TodoItem(
        document.querySelector('#in-todo-title').value,
        document.querySelector('#in-todo-description').value,
        document.querySelector('#in-todo-dueDate').value,
        document.querySelector('#in-todo-priority').value,
        document.querySelector('#in-todo-project').value
    );
}

export function createNewTodoForm(projectList, currentProject){
    let projectOptions = document.querySelector('#in-todo-project');
    let numOptions = projectOptions.children.length;
    for(let i=0; i<numOptions-1;++i){
        projectOptions.removeChild(projectOptions.lastChild);
    }
    projectList.forEach(project =>{
        let newOption = document.createElement('option');
        newOption.value = project.name;
        newOption.innerHTML = project.name;
        if(project.name === currentProject.name){
            newOption.selected = 'selected';
        }
        projectOptions.appendChild(newOption);
    });

    form.style.visibility = 'visible';
}