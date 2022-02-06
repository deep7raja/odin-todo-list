import TodoItem from "./todo-item";

export default function getNewTodo(){
    return new TodoItem(
        document.querySelector('#in-todo-title').value,
        document.querySelector('#in-todo-description').value,
        document.querySelector('#in-todo-dueDate').value,
        document.querySelector('#in-todo-priority').value
    );
}