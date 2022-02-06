export function fillSidebar(projectList){
    let list = document.querySelector('.sidebar>ul');
    projectList.forEach(project => {
        let item = document.createElement('li');
        item.innerHTML = project;
        list.appendChild(item);
    });
}