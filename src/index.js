import './styles.css'
import todoApp from "./todoApp.js"


let submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let title = document.getElementById("add-project").value
    let newProject = todoApp.newProject(title)
  
    todoApp.projectList.push(newProject)
    console.log(todoApp.projectList)
    todoApp.addToDiv()
})

let projectDiv = document.querySelector('.projects-element')

projectDiv.addEventListener('click', function(e) {
    //Render all current projects
    todoApp.displayContent(e.target.parentElement.getAttribute('data-id'))
   //When I click on the project. I get the parent element data-id and
   // Display dynamically this Projects content
})

