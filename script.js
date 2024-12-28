let tasks = []
let projects = []

class Project{
    constructor(project, tasks){
        this.name = project
        this.todos = tasks
    }
}

class Task{
    constructor(title, description, due, priority, notes, project){
        this.title = title
        this.description = description
        this.due = due
        this.priority = priority
        this.notes = notes
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


function attachDotListeners() {
    let dots = document.querySelectorAll(".circle"); // Always query the latest NodeList
    dots.forEach(dot => {
        dot.addEventListener('click', handleDotClick);
    });
}

function handleDotClick(event) {
    let element = event.currentTarget; // The clicked dot
    let task = element.parentElement;
    task.style.cssText = "position: relative";

    let existingContainer = task.querySelector('.action-container');
    if (existingContainer) {
        task.removeChild(existingContainer);
        return;
    }

    let container = document.createElement("div");
    container.classList.add('action-container');
    task.append(container);

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.textContent = "View";
    p2.textContent = "Edit";
    p3.textContent = "Delete";

    container.append(p1, p2, p3);

    p1.style.cssText = "margin:0; border:1.5px solid grey; border-radius:0.5vh; padding: 0vh 0.5vh; cursor:pointer";
    p2.style.cssText = "margin:0; border:1.5px solid grey; border-radius:0.5vh; padding: 0vh 0.5vh; cursor:pointer";
    p3.style.cssText = "margin:0; border:1.5px solid grey; border-radius:0.5vh; padding: 0vh 0.5vh; cursor:pointer";

    container.style.cssText = "display:flex; gap:0.5vh; position:absolute; top:-0.75vh; right:-4vh; border-radius:1vh";

    p1.addEventListener("click", () => handleViewClick(task));
    p2.addEventListener("click", () => handleEditClick(task));
}

function handleViewClick(task) {
    task.innerHTML = "";

    let properties = ["title", "description", "due", "priority", "notes", "project"];
    let paraWrapper = document.createElement("div");

    properties.forEach(property => {
        let para = document.createElement("p");
        para.textContent = property;
        para.style.cssText = "background:rgb(200, 200, 200); color:black; font-size:3vh";
        paraWrapper.append(para);
    });

    paraWrapper.style.cssText = "width: 100%; background:rgb(200, 200, 200); display:flex; flex-direction:column;align-items:center";
    task.append(paraWrapper);

    let exit = document.createElement("p");
    exit.textContent = "x";
    task.style.cssText = "position:relative";
    exit.style.cssText = "position:absolute; top:0vh; right:2vh; font-size: 5vh; cursor:pointer";
    task.append(exit);

    exit.addEventListener("click", () => handleExitClick(task));
}

function handleEditClick(task) {
    task.innerHTML = "";

    let properties = ["title", "description", "due", "priority", "notes", "project"];
    let inputs = {};
    let formWrapper = document.createElement("div");

    properties.forEach(property => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        inputs[property] = input;

        label.textContent = property;
        label.style.cssText = "font-size:2.5vh; margin-bottom:1vh";

        input.type = "text";
        input.placeholder = `Enter ${property}`;
        input.style.cssText = "font-size:2.5vh; margin-bottom:1vh; padding:0.5vh; border-radius:0.5vh; width:90%";

        let inputWrapper = document.createElement("div");
        inputWrapper.style.cssText = "display:flex; flex-direction:column; align-items:flex-start; width:100%";

        inputWrapper.append(label, input);
        formWrapper.append(inputWrapper);
    });

    formWrapper.style.cssText = "width: 100%; background:rgb(200, 200, 200); display:flex; flex-direction:column;align-items:center; padding:1vh";
    task.append(formWrapper);

    // Save Button
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.cssText = "font-size:2.5vh; padding:0.5vh 1vh; background:green; color:white; border:none; border-radius:0.5vh; cursor:pointer; margin-top:1vh";
    task.append(saveButton);

    saveButton.addEventListener("click", () => {
        task.innerHTML = ""; // Clear task

        let box = document.createElement("input");
        box.type = "checkbox";
        let title = document.createElement("p");
        title.classList.add("title");
        title.textContent = inputs.title.value || "title"; // Default to "title" if empty
        let circle = document.createElement("div");
        circle.classList.add("circle");
        let img = document.createElement("img");
        img.src = "./three-dots-svgrepo-com.svg";
        circle.append(img);

        task.append(box, title, circle);
        attachDotListeners(); // Reattach event listeners
    });

    // Exit Button
    let exit = document.createElement("p");
    exit.textContent = "x";
    task.style.cssText = "position:relative";
    exit.style.cssText = "position:absolute; top:0vh; right:2vh; font-size: 5vh; cursor:pointer";
    task.append(exit);

    exit.addEventListener("click", () => handleExitClick(task));
}

function handleExitClick(task) {
    task.innerHTML = ""; // Clear task content

    // Recreate original structure
    let box = document.createElement("input");
    box.type = "checkbox";
    let title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "title";
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let img = document.createElement("img");
    img.src = "./three-dots-svgrepo-com.svg";
    circle.append(img);

    task.append(box, title, circle);
    attachDotListeners(); // Reattach event listeners
}

// Initial setup
attachDotListeners();
