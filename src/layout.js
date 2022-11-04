function createSideBar(){
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "sidebar")
    content.appendChild(sidebar)
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

export {createSideBar, createHeader, createTodos}