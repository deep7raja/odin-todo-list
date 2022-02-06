import './style.css';
import TodoItem from './todo-item.js';
import createTodoCard from './todo-card.js';

const body = document.querySelector('body');

const item = new TodoItem('hello', 'there', 'general', 'kenobi');
body.appendChild(createTodoCard(item));