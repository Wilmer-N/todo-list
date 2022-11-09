
function createSideBar(){
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "sidebar")
    content.appendChild(sidebar)
    const addBtn = document.createElement("button")
    addBtn.textContent = "Add a project"
    addBtn.setAttribute("id", "add-project")
    sidebar.appendChild(addBtn)
    const addTodoBtn = document.createElement("button")
    addTodoBtn.textContent = "Add a todo"
    addTodoBtn.setAttribute("id", "add-todo")
    sidebar.appendChild(addTodoBtn)
}
function createCoverDiv(){
    const cover = document.createElement("div")
    cover.setAttribute("id", "cover")
    content.appendChild(cover)
}

function createHeader(){
    const header = document.createElement("div")
    header.setAttribute("id", "header")
    content.appendChild(header)
}
function createTodos(){
    const todosContainer = document.createElement("div")
    todosContainer.setAttribute("id", "todos-container")
    content.appendChild(todosContainer)
}

function createProjectDiv(title, index){
    const project = document.createElement("div")
    project.setAttribute("class", "sidebar-project")
    const para = document.createElement("p")
    project.appendChild(para)
    para.textContent = `${title}`
    sidebar.appendChild(project)
    const removeBtn = document.createElement("button")
    removeBtn.setAttribute("id", `${index}`)
    removeBtn.setAttribute("class", "remove-button-class")
    project.appendChild(removeBtn)
    removeBtn.textContent = "X"
}


function displayWhatToAdd(){
    const card = document.createElement("div")
    card.setAttribute("id", "big-card")
    content.appendChild(card)
}

function displayWhatToAddContent(addProjectTrue, addTodoTrue, bigCard){
    if(addProjectTrue){
        const titleInput = document.createElement("input")
        titleInput.setAttribute("id", "title-input")
        bigCard.appendChild(titleInput)
        const submitProject = document.createElement("button")
        submitProject.setAttribute("id", "project-submit")
        bigCard.appendChild(submitProject)
        submitProject.textContent = "submit project"
        const bigCardClose = document.createElement("button")
        bigCardClose.setAttribute("id", "close-bigcard")
        bigCard.appendChild(bigCardClose)
        bigCardClose.textContent = "X"
    }else if(addTodoTrue){
        const titleInput = document.createElement("input")
        titleInput.setAttribute("id", "title-input-todo")
        bigCard.appendChild(titleInput)
        for (let index = 0; index < 3; index++) {
            const priorityInput = document.createElement("input")
            priorityInput.setAttribute("type", "radio")
            priorityInput.setAttribute("class", "radio")
            priorityInput.setAttribute("name", "priority")
            priorityInput.setAttribute("id", `priority-${index}`)
            bigCard.appendChild(priorityInput)
        }
        const dueDateInput = document.createElement("input")
        dueDateInput.setAttribute("type", "date")
        dueDateInput.setAttribute("id", "due-date")
        bigCard.appendChild(dueDateInput)
        const submitTodo = document.createElement("button")
        submitTodo.setAttribute("id", "todo-submit")
        bigCard.appendChild(submitTodo)
        submitTodo.textContent = "submit todo"
    }
}

function displayTodos(todo, todosContainer, index, colorPriority, dueDateDisplay){
        console.log(colorPriority)
        console.log(index)
        const todoDiv = document.createElement("div")
        todoDiv.setAttribute("class", "todo-div")
        todoDiv.setAttribute("id", `todo-dive-${index}`)
        todoDiv.textContent = todo 
        todosContainer.appendChild(todoDiv)
        const removeTodoBtn = document.createElement("button")
        removeTodoBtn.setAttribute("id", `${index}`)
        removeTodoBtn.setAttribute("class", "remove-todo-button-class")
        todoDiv.appendChild(removeTodoBtn)
        removeTodoBtn.textContent = "X"
        const priorityDiv = document.createElement("div")
        priorityDiv.setAttribute("class", "priority-div")
        todoDiv.appendChild(priorityDiv)
        if(colorPriority == "0"){
            todoDiv.style.backgroundColor = "red"
        }else if(colorPriority == "1"){
            todoDiv.style.backgroundColor = "yellow"
        }else if(colorPriority == "2"){
            todoDiv.style.backgroundColor = "green"
        }
        const dueDatePara = document.createElement("p")
        todoDiv.appendChild(dueDatePara)
        dueDatePara.setAttribute("class", "due-date-para")
        dueDatePara.textContent = dueDateDisplay
}

export {createSideBar, createCoverDiv, createHeader, createTodos, createProjectDiv, displayWhatToAdd, displayTodos, displayWhatToAddContent}