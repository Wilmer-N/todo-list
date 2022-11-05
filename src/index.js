import './style.css';
import { createSideBar, createHeader, createTodos, createProjectDiv, displayWhatToAdd, displayTodos, displayWhatToAddContent} from './layout';

const content = document.querySelector("#content")

createHeader()
createSideBar()
createTodos()
displayWhatToAdd()


const addBtn = document.querySelector("#add-project")
const sidebar = document.querySelector("#sidebar")
const bigCard = document.querySelector("#big-card")
const addTodoBtn = document.querySelector("#add-todo")
const todosContainer = document.querySelector("#todos-container")


const projects = []

function CreateProject(title){
    const todoArray = new Array()
    projects.push({title, todoArray})
    return{
        title,
        todoArray
    }
}

addBtn.addEventListener("click", function(){
    bigCard.style.display = "initial"
    displayWhatToAddContent(true, false, bigCard)
    const submitProjectBtn = document.querySelector("#project-submit")
    const projectInput = document.querySelector("#title-input")
    submitProjectBtn.addEventListener("click", function(){
        const project = CreateProject(projectInput.value)
        projectInput.value = ""
        displayProjects()
        bigCard.style.display = "none"
    })
})




function displayProjects(){
    let targetedProject = ""
    let currentArray
    //Removes all current divs//
    const OldprojectDivs = document.querySelectorAll(".sidebar-project")
    OldprojectDivs.forEach(oldSideBarprojectDiv => {
        oldSideBarprojectDiv.remove()
    });
    //-----------//
    //creates new div
    projects.forEach(project => {
        createProjectDiv(project.title, projects.indexOf(project))
    });
    const removeBtns = document.querySelectorAll(".remove-button-class")
    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener("click", function(e){
            projects.splice(e.target["id"], 1)
            displayProjects()
        })
    });
    const newProjectDivs = document.querySelectorAll(".sidebar-project")
    newProjectDivs.forEach(newProjectDiv => {
        newProjectDiv.addEventListener("click", function(){
            targetedProject = String(newProjectDiv.firstChild.textContent)
            projects.forEach(project => {
                if(project.title == String(targetedProject)){
                    project.todoArray.push(project.title)
                    todosContainer.innerHTML = ""
                    project.todoArray.forEach(arrayElement => {
                        displayTodos(arrayElement, todosContainer)
                    });
                }
                addTodoBtn.addEventListener("click", function(){
                    bigCard.style.display = "initial"
                    displayWhatToAddContent(false, true, bigCard)
                }) 
            });
        })
    }); 
}