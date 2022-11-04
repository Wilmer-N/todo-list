import './style.css';
import { createSideBar, createHeader, createTodos } from './layout';

const content = document.querySelector("#content")

createHeader()
createSideBar()
createTodos()


console.log("hello")