let tasks = []
let projects = []

class Project{
    constructor(project, tasks){
        this.name = project
        this.todos = tasks
    }
}

class Task{
    constructor(title, description, due, priority, notes, checked, project){
        this.title = title
        this.description = description
        this.due = due
        this.priority = priority
        this.notes = notes
        this.checked = checked
        this.project = project
    }
}

/*
function displayProjects(){
    let container = document.querySelector(".projects")

}
*/

let add = document.querySelector(".add")
dialog = document.querySelector("dialog")

add.addEventListener("click", ()=> {
    dialog.showModal()   
})

let penes = ["a", "e", "i"]

let select = document.querySelector("#project")

penes.forEach(option => {
    let optionElement = document.createElement("option");
    optionElement.textContent = option; 
    select.appendChild(optionElement);
})