const todoApp = (() => {
  //Projects are stored in this array with their todo's
  let projectList = [];
  let contentDiv = document.getElementById("content")
  

  let CreateNewTodo = (title, description, dueDate, priority) => {
    return {
      title,
      description,
      dueDate,
      priority,
    };
  };

  let newProject = (name) => {
    let id = projectList.length;
    return {
      name,
      id,
      projectTodoList: [],
    };
  };

  let deleteTask = (e) => {
    let projectID = e.target.parentNode.parentNode.getAttribute("project-id");
    let idToDelete = e.target.parentNode.parentNode.getAttribute('div-id')

    e.target.parentNode.parentNode.remove()
    //console.log(projectList[projectID].projectTodoList[idToDelete]);
    projectList[projectID].projectTodoList.splice(idToDelete, 1)
   
  };

  let editTask = (e) => {
    let projectID = e.target.parentNode.parentNode.getAttribute("project-id");
    let idToUpdate = e.target.parentNode.parentNode.getAttribute('div-id')
    
    let currentTitle = projectList[projectID].projectTodoList[idToUpdate].title
    let currentDescription = projectList[projectID].projectTodoList[idToUpdate].description
    let currentDate = projectList[projectID].projectTodoList[idToUpdate].dueDate
    let currentPriority = projectList[projectID].projectTodoList[idToUpdate].priority
    //Add date and priority as well
    
    //let parentDiv = e.target.parentNode.parentNode
    let projectDiv = document.getElementById("add-project-container")

    
    let newForm = document.createElement("form")
    newForm.classList = "edit-form"

    //createBlockerDiv(projectDiv)

    let title = document.createElement("input")
    let description = document.createElement("input")
    let date = document.createElement("input")
    let priority = document.createElement("select")

    title.type = 'text'
    title.id = "edit-title"
    title.value = currentTitle

    description.type = "text"
    description.id = "edit-description"
    description.value = currentDescription

    date.type = "date"
    date.id = "edit-date"
    date.value = currentDate

    priority.id = "edit-select"
    let optionLow = document.createElement('option')
    let optionImportant = document.createElement('option')
    optionLow.text = 'Low'
    optionImportant.text = 'Important'
    optionImportant.classList = 'important-priority'
    optionLow.classList = 'low-priority'
    priority.append(optionLow, optionImportant)

    let button = document.createElement("button");
    button.type = 'submit'
    button.id = 'edit-button'
    button.textContent = 'Edit'

    button.addEventListener("click", function(e) {
        e.preventDefault()
        let newTitle = document.getElementById("edit-title").value
        let newDescription = document.getElementById("edit-description").value
        let newDate = document.getElementById("edit-date").value
        let newPriority = document.getElementById("edit-select").value
  
        projectList[projectID].projectTodoList.splice(idToUpdate, 1, CreateNewTodo(newTitle, newDescription, newDate, newPriority))
        

        displayContent(projectID)
        //Removes edit-form div on submission
        //e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        //e.target.parentNode.parentNode.removeChild("blocker")
    })

    newForm.append(title, description, date, priority, button)
    //parentDiv.append(newForm)
    projectDiv.append(newForm)
  }

  let createBlockerDiv = (div) => {
    let blockerDiv = document.createElement("div")
    blockerDiv.classList = "blocker"

    div.append(blockerDiv)

    blockerDiv.addEventListener('click', function(e) {
        div.classList = "project-label-hidden"
        e.target.parentNode.removeChild(e.target)
    })
  }

  //Creates the new projects div
  let addToDiv = () => {
    let projectDiv = document.getElementById("projects-element");
    projectDiv.textContent = "";

    for (let i = 0; i < projectList.length; i++) {
      let childDiv = document.createElement("div");
      childDiv.id = "project-name"
      let projectTitle = document.createElement("h3");

      //Sets new ID for the div
      childDiv.setAttribute("data-id", i);
      //Project name
      projectTitle.textContent = projectList[i].name;

      childDiv.append(projectTitle);
      projectDiv.append(childDiv);
    }
  };

  let displayContent = (id) => {
    let currentProject = projectList[id]
    
    //Resets content div, needed so there are no duplicates
    contentDiv.textContent = ""
    
    createForm(id)
    


    //For each project todo, make div etc
    for (let i = 0; i < currentProject.projectTodoList.length; i++) {
        
        let childDiv = document.createElement("div");
        childDiv.classList = "task-container"
        childDiv.setAttribute('div-id', i)
        childDiv.setAttribute('project-id', id)

        let TodoName = document.createElement("h1")
        let TodoDescription = document.createElement("p")
        let TodoDate = document.createElement("p")
        let TodoPriority = document.createElement('p')
        

        TodoName.textContent = currentProject.projectTodoList[i].title
        TodoDescription.textContent = currentProject.projectTodoList[i].description
        TodoDate.textContent = currentProject.projectTodoList[i].dueDate
        TodoPriority.textContent = currentProject.projectTodoList[i].priority

        if (TodoPriority.textContent === "Important") {
            TodoPriority.classList = "important-priority"
        } else {
            TodoPriority.classList = "low-priority"
        }

        childDiv.append(TodoName, TodoDescription, TodoDate, TodoPriority)
        contentDiv.append(childDiv)

        addTaskButtons(childDiv)
        
    }
    //newTaskButton()
  };

  let addTaskButtons = (taskDiv) => {
    let taskButtonDiv = document.createElement("div")
    taskButtonDiv.classList = "task-buttons"
    let deleteButton = document.createElement("button");
    deleteButton.id = 'label-button'
    deleteButton.textContent = 'delete'

    let editButton = document.createElement("button");
    editButton.id = 'update-button'
    editButton.textContent = "Edit"

    for (let i = 0; i < projectList.length; i++) {
        deleteButton.setAttribute('button-id', i)
        editButton.setAttribute('button-id', i)
    }

    taskButtonDiv.append(deleteButton, editButton)
    taskDiv.append(taskButtonDiv)

    deleteButton.addEventListener("click", deleteTask)
    editButton.addEventListener('click', editTask)
  };

  let createForm = (id) => {
    let currentID = id

    let formDiv = document.createElement("div")

    formDiv.classList.add("input-container")
    //formDiv.classList.add("input-container-hidden")
    let form = document.createElement("form")
    form.classList.add("form-div")

    let button = document.createElement("input");
    let title = document.createElement("input")
    let description = document.createElement("input")
    let date = document.createElement("input")
    let priority = document.createElement("select")

    title.type = 'text'
    title.id = "title"
    title.placeholder = "new task title"
    title.required = true

    description.type = "text"
    description.id = "description"
    description.placeholder = "Description"
    description.required = true


    button.type = 'button'
    button.id = 'label-button'
    button.value = 'submit'

    date.type = "date"
    date.id = 'date'

    priority.id = 'select'
    let optionLow = document.createElement('option')
    let optionImportant = document.createElement('option')
    optionLow.text = 'Low'
    optionImportant.text = 'Important'
    optionImportant.classList = 'important-priority'
    optionLow.classList = 'low-priority'

    priority.append(optionLow, optionImportant)

    form.append(title, description, date, priority, button)
    formDiv.append(form)
    contentDiv.append(formDiv)

    //Cannot add "required" inputs because of this function
    button.addEventListener('click', function(e) {
        
        title = document.getElementById('title').value
        description = document.getElementById('description').value
        date = document.getElementById('date').value
        priority = document.getElementById('select').value

        
        if (title != "") {
        let newTask = CreateNewTodo(title, description, date, priority)
        let currentProjectList = projectList[currentID].projectTodoList

        currentProjectList.push(newTask)
        console.log(projectList);
        displayContent(currentID)

    } else {
        alert("Make sure that you enter a title!")
    }
    })

}

  return { CreateNewTodo, newProject, projectList, deleteTask, 
    addToDiv, displayContent, createForm, createBlockerDiv };
})();

export default todoApp;


  //Removing for now. Not needed/better flow without it.
//   let newTaskButton = () => {
//     let button = document.createElement("button")
//     button.textContent = "Add task"
//     button.classList = "add-task-button"

//     let form = document.querySelector(".input-container-hidden")
//     button.addEventListener("click", function() {
//         form.classList = "input-container"
//     })
    
//     contentDiv.append(button)
//   };