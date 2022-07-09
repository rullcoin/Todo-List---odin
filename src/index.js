import './styles.css'
import todoApp from "./todoApp.js"


let submitButton = document.getElementById("submit-button")
let addProjectDiv = document.querySelector(".project-label-hidden")
let projectLabel = document.getElementById("add-project")
let projectDiv = document.querySelector('.projects-element')
let cancelProjectButton = document.getElementById("cancel-button")
let addNewProjectButton = document.getElementById("new-project-button")


addNewProjectButton.addEventListener('click', function() {
    addProjectDiv.classList = "project-label"
    addProjectDiv.id = "project-label"
    projectLabel.value = ""
    todoApp.createBlockerDiv(addProjectDiv)
})

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let title = document.getElementById("add-project").value
    let newProject = todoApp.newProject(title)

    todoApp.projectList.push(newProject)
    console.log(todoApp.projectList)
    todoApp.addToDiv()

    //Needed to remove blocker div
    let blockerDiv = document.getElementById("blocker")
    e.target.parentNode.parentNode.removeChild(blockerDiv)
    //console.log(e.target.parentNode.parentNode.child);

    addProjectDiv.classList = "project-label-hidden"
})

projectDiv.addEventListener('click', function(e) {
    //Render all current projects
    todoApp.displayContent(e.target.parentElement.getAttribute('data-id'))
})

cancelProjectButton.addEventListener("click", function(e) {
    e.preventDefault()
    addProjectDiv.classList = "project-label-hidden"
    projectLabel.value = ""
})
