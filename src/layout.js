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
function createHeader(){
    const header = document.createElement("div")
    header.setAttribute("id", "header")
    content.appendChild(header)
}
function createTodos(){
    const todos = document.createElement("div")
    todos.setAttribute("id", "todos")
    content.appendChild(todos)
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
    const titleInput = document.createElement("input")
    titleInput.setAttribute("id", "title-input")
    card.appendChild(titleInput)
    const submitProject = document.createElement("button")
    submitProject.setAttribute("id", "project-submit")
    card.appendChild(submitProject)
    submitProject.textContent = "submit project"
}

export {createSideBar, createHeader, createTodos, createProjectDiv, displayWhatToAdd}