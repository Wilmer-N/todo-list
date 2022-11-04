function createSideBar(){
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "sidebar")
    content.appendChild(sidebar)
    const addBtn = document.createElement("button")
    addBtn.textContent = "Add a project"
    addBtn.setAttribute("id", "add-project")
    sidebar.appendChild(addBtn)
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

function createProjectDiv(title){
    const project = document.createElement("div")
    project.setAttribute("class", "sidebar-project")
    project.textContent = `${title}`
    sidebar.appendChild(project)
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