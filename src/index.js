import './styles.css'
import todoApp from "./todoApp.js"


let submitButton = document.getElementById("submit-button")
let addProjectDiv = document.querySelector(".project-label-hidden")
let projectLabel = document.getElementById("add-project")

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let title = document.getElementById("add-project").value
    let newProject = todoApp.newProject(title)
  
    todoApp.projectList.push(newProject)
    console.log(todoApp.projectList)
    todoApp.addToDiv()

    addProjectDiv.classList = "project-label-hidden"
})

let projectDiv = document.querySelector('.projects-element')
projectDiv.addEventListener('click', function(e) {
    //Render all current projects
    todoApp.displayContent(e.target.parentElement.getAttribute('data-id'))
})

let addNewProjectButton = document.getElementById("new-project-button")
addNewProjectButton.addEventListener('click', function() {
    addProjectDiv.classList = "project-label"
    projectLabel.value = ""
})

let cancelProjectButton = document.getElementById("cancel-button")
cancelProjectButton.addEventListener("click", function(e) {
    e.preventDefault()
    addProjectDiv.classList = "project-label-hidden"
    projectLabel.value = ""
})