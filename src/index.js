import './style.css';
import { createSideBar, createCoverDiv, createHeader, createTodos, createProjectDiv, displayWhatToAdd, displayTodos, displayWhatToAddContent} from './layout';

const content = document.querySelector("#content")

createHeader()
createSideBar()
createTodos()
displayWhatToAdd()
createCoverDiv()


const addBtn = document.querySelector("#add-project")
const sidebar = document.querySelector("#sidebar")
const bigCard = document.querySelector("#big-card")
const addTodoBtn = document.querySelector("#add-todo")
const todosContainer = document.querySelector("#todos-container")
const cover = document.querySelector("#cover")


const projects = []

function CreateProject(title){
    const todoArray = new Array()
    projects.push({title, todoArray})
    return{
        title,
        todoArray
    }
}
function setCover(){
    cover.style.display = "initial"
}
function removeCover(){
    cover.style.display = "none"
}

addBtn.addEventListener("click", function(){
    setCover()
    bigCard.style.display = "initial"
    displayWhatToAddContent(true, false, bigCard)
    const submitProjectBtn = document.querySelector("#project-submit")
    const projectInput = document.querySelector("#title-input")
    submitProjectBtn.addEventListener("click", function(){
        const project = CreateProject(projectInput.value)
        projectInput.value = ""
        displayProjects()
        bigCard.style.display = "none"
        bigCard.innerHTML = ""
        removeCover()
    })
})




function displayProjects(){
    let targetedProject = ""
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
    const removeProjectBtns = document.querySelectorAll(".remove-button-class")
    removeProjectBtns.forEach(removeProjectBtn => {
        removeProjectBtn.addEventListener("click", function(e){
            projects.splice(e.target["id"], 1)
            displayProjects()
            todosContainer.innerHTML = ""
        })
    });
    const newProjectDivs = document.querySelectorAll(".sidebar-project")
    newProjectDivs.forEach(newProjectDiv => {
        newProjectDiv.addEventListener("click", function(){
            targetedProject = String(newProjectDiv.firstChild.textContent)
            projects.forEach(project => {
                if(project.title == String(targetedProject)){
                    todosContainer.innerHTML = ""
                    project.todoArray.forEach(arrayElement => {
                        displayTodos(arrayElement, todosContainer, project.todoArray.indexOf(arrayElement))
                    });
                    selectRemoveButtons(project)
                }
                
            });
            addTodoBtn.addEventListener("click", function(){
                setCover()
                bigCard.style.display = "initial"
                bigCard.innerHTML = ""
                displayWhatToAddContent(false, true, bigCard)
                const todoTitleInput = document.querySelector("#title-input-todo")
                const todoSubmit = document.querySelector("#todo-submit")
                projects.forEach(project => {
                    if(project.title == String(targetedProject)){
                        todoSubmit.addEventListener("click", function(){
                            removeCover()
                            project.todoArray.push(todoTitleInput.value)
                            todosContainer.innerHTML = ""
                            project.todoArray.forEach(arrayElement => {
                            displayTodos(arrayElement, todosContainer, project.todoArray.indexOf(arrayElement))
                            bigCard.style.display = ""
                            bigCard.innerHTML = ""
                            });
                            selectRemoveButtons(project)
                            
                         })
                        };    
                    }
                );
            }) 
        })
    }); 
}

    
function selectRemoveButtons(project){
    const removeTodoBtns = document.querySelectorAll(".remove-todo-button-class")
    removeTodoBtns.forEach(removeTodoBtn => {
        removeTodoBtn.addEventListener("click", function(e){ 
            todosContainer.innerHTML = ""
            project.todoArray.splice(e.target["id"], 1)
            project.todoArray.forEach(arrayElement => {
                displayTodos(arrayElement, todosContainer, project.todoArray.indexOf(arrayElement))
                });
            selectRemoveButtons(project)
        });
    })
}
