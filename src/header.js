export function updateHeaderProject(currentProject){
    const div = document.querySelector('.header-project');
    div.textContent = currentProject.name;
}