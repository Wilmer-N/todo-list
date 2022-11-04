import './style.css';
import { createSideBar, createHeader, createTodos, createProjectDiv, displayWhatToAdd} from './layout';

const content = document.querySelector("#content")

createHeader()
createSideBar()
createTodos()
displayWhatToAdd()

const addBtn = document.querySelector("#add-project")
const sidebar = document.querySelector("#sidebar")
const projectInput = document.querySelector("#title-input")
const bigCard = document.querySelector("#big-card")
const submitProjectBtn = document.querySelector("#project-submit")


const projects = []

function CreateProject(title){
    projects.push(title)
    const todoArray = new Array()
    todoArray.push(title)

    return{
        title,
        todoArray
    }
}
console.log(bigCard)

addBtn.addEventListener("click", function(){
    bigCard.style.display = "initial"
})

submitProjectBtn.addEventListener("click", function(){
    const project = CreateProject(projectInput.value)
    projectInput.value = ""
    displayProjects()
    bigCard.style.display = "none"
})


function displayProjects(){
    //Removes all current divs//
    const projectDivs = document.querySelectorAll(".sidebar-project")
    projectDivs.forEach(sideBarprojectDiv => {
        sideBarprojectDiv.remove()
    });
    //-----------//
    //creates new div
    projects.forEach(project => {
        createProjectDiv(project)
    });
    console.log(projects)
}