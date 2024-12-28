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


let exit = document.querySelector(".exit")
exit.addEventListener("click", ()=>{
    dialog.close()
})

let task = document.querySelector(".task")
let project = document.querySelector(".project")
let form = document.querySelector("form")

let penes = ["a", "e", "i"]

task.addEventListener("click", ()=>{
    
    form.innerHTML = ""
    

    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    let div4 = document.createElement("div")
    let div5 = document.createElement("div")
    let div6 = document.createElement("div")

    form.style.cssText = "display:flex; flex-direction:column; gap:3vh"

    let divs = [div1, div2, div3, div4, div5, div6]
    for (let i = 0; i < divs.length; i++)
        form.append(divs[i])

    let label1 = document.createElement("label")
    let label2 = document.createElement("label")
    let label3 = document.createElement("label")
    let label4 = document.createElement("label")
    let label5 = document.createElement("label")
    let label6 = document.createElement("label")

    label1.textContent = "Enter the task"
    label2.textContent = "Enter the description of the task"
    label3.textContent = "Enter the due date of the task"
    label4.textContent = "Select the priority of the task"
    label5.textContent = "Enter some notes/comments"
    label6.textContent = "In which project will the task be?"

    let input1 = document.createElement("input") 
    let input2 = document.createElement("input")
    let input3 = document.createElement("input")
    let input5 = document.createElement("input")


    input1.type = "text"
    input2.type = "text"
    input3.type = "datetime-local"
    input5.type = "text"

    let select1 = document.createElement("select")
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option")

    select1.appendChild(option1)
    select1.appendChild(option2)
    select1.appendChild(option3)

    option1.textContent = "Low"
    option2.textContent = "Medium"
    option3.textContent = "High"

    let select2 = document.createElement("select")
    penes.forEach(option => {
    let optionElement = document.createElement("option");
    optionElement.textContent = option; 
    select2.appendChild(optionElement);
    })

    div1.append(label1)
    div1.append(input1)
    div2.append(label2)
    div2.append(input2)
    div3.append(label3)
    div3.append(input3)
    div4.append(label4)
    div4.append(select1)
    div5.append(label5)
    div5.append(input5)
    div6.append(label6)
    div6.append(select2)
})

let select = document.querySelector("#project")
penes.forEach(option => {
    let optionElement = document.createElement("option");
    optionElement.textContent = option; 
    select.appendChild(optionElement);
})

project.addEventListener("click", ()=>{
    form.innerHTML = ""
    form.style.cssText = "gap: 0"
    let label1 = document.createElement("label")
    label1.textContent = "Enter the project name"
    let input1 = document.createElement("input") 
    input1.type = "text"
    form.append(label1)
    form.append(input1)
    input1.style.cssText = "width: 229px !important"
})