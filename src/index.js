import './styles.css'
import todoApp from "./todoApp.js"


let submitButton = document.getElementById("submit-button")
let addProjectDiv = document.querySelector(".project-label-hidden")
let projectLabel = document.getElementById("add-project")
let projectDiv = document.querySelector('.projects-element')
let cancelProjectButton = document.getElementById("cancel-button")
let addNewProjectButton = document.getElementById("new-project-button")
let projectLabelDiv = document

addNewProjectButton.addEventListener('click', function() {
    addProjectDiv.classList = "project-label"
    addProjectDiv.id = "project-label"
    projectLabel.value = ""

    let blockerDiv = document.createElement("div")
    blockerDiv.classList = "blocker"

    addProjectDiv.append(blockerDiv)

    blockerDiv.addEventListener('click', function(e) {
        addProjectDiv.classList = "project-label-hidden"
        e.target.parentNode.removeChild(e.target)
    })
})

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let title = document.getElementById("add-project").value
    let newProject = todoApp.newProject(title)
  
    todoApp.projectList.push(newProject)
    console.log(todoApp.projectList)
    todoApp.addToDiv()

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


// let div = document.getElementById('project-label')




// div.append(newDiv)

