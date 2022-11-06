
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
    }else if(addTodoTrue){
        const titleInput = document.createElement("input")
        titleInput.setAttribute("id", "title-input-todo")
        bigCard.appendChild(titleInput)
        const submitTodo = document.createElement("button")
        submitTodo.setAttribute("id", "todo-submit")
        bigCard.appendChild(submitTodo)
        submitTodo.textContent = "submit todo"
    }
}

function displayTodos(todo, todosContainer, index){
        const todoDiv = document.createElement("div")
        todoDiv.setAttribute("class", "todo-div")
        todoDiv.textContent = todo
        todosContainer.appendChild(todoDiv)
        const removeTodoBtn = document.createElement("button")
        removeTodoBtn.setAttribute("id", `${index}`)
        removeTodoBtn.setAttribute("class", "remove-todo-button-class")
        todoDiv.appendChild(removeTodoBtn)
        removeTodoBtn.textContent = "X"
}

export {createSideBar, createCoverDiv, createHeader, createTodos, createProjectDiv, displayWhatToAdd, displayTodos, displayWhatToAddContent}