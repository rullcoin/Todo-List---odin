const todoApp = (() => {
  //Projects are stored in this array with their todo's
  let projectList = [];
  let contentDiv = document.getElementById("content")
  let newForm = document.createElement("form")

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
    projectList.push({name, id, projectTodoList: []})
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
    projectList[projectID].projectTodoList.splice(idToDelete, 1)
    console.log(projectList[projectID].projectTodoList.length);

    // Needed to refresh current todo's div ID.
    displayContent(projectID)

    //Refresh local item list
    localStoreItem('list', JSON.stringify(projectList))
  };

  let editTask = (e) => {
    let projectID = e.target.parentNode.parentNode.getAttribute("project-id");
    let idToUpdate = e.target.parentNode.parentNode.getAttribute('div-id')
    let project = projectList[projectID].projectTodoList[idToUpdate]
    
    let currentTitle = project.title
    let currentDescription = project.description
    let currentDate = project.dueDate
    let currentPriority = project.priority
    //Add date and priority as well
    
    let projectDiv = document.getElementById("add-project-container")

    newForm.classList = "edit-form"
    newForm.id = "edit-form"

    let editingDiv = document.createElement("div")
    editingDiv.id = "editing-div"

    createBlockerDiv(editingDiv)

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
        // Refresh localStorage list
        localStoreItem('list', JSON.stringify(projectList))

        displayContent(projectID)
        //Removes edit-form div on submission
        e.target.parentNode.parentNode.parentNode.removeChild(editingDiv)
        newForm.textContent = ""
    }) 

    newForm.append(title, description, date, priority, button)
    editingDiv.append(newForm)
    projectDiv.append(editingDiv)
  }

  let createBlockerDiv = (div) => {
    let blockerDiv = document.createElement("div")
    blockerDiv.classList = "blocker"
    blockerDiv.id = "blocker"

    div.append(blockerDiv)

    blockerDiv.addEventListener('click', function(e) {
        div.classList = "project-label-hidden"
        newForm.textContent = ""
        if (e.target.parentNode.id === "editing-div") {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        } else {
            e.target.parentNode.removeChild(blockerDiv)
        }
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
    
    let projectsName = document.createElement("h1")
    projectsName.classList = "projects-title"
    projectsName.textContent = projectList[id].name

    contentDiv.append(projectsName)
    createForm(id)
    
    //For each project todo, make div etc
    for (let i = 0; i < currentProject.projectTodoList.length; i++) {
        
        let childDiv = document.createElement("div");
        childDiv.classList = "task-container"
        childDiv.setAttribute('div-id', i)
        childDiv.setAttribute('project-id', id)

        let nameDiv = document.createElement("div")
        nameDiv.classList = "task-content-div"
        let TodoName = document.createElement("h4")
        nameDiv.append(TodoName)

        let descDiv = document.createElement("div")
        descDiv.classList = "task-content-div"
        let TodoDescription = document.createElement("p")
        descDiv.append(TodoDescription)

        let dateDiv = document.createElement("div")
        dateDiv.classList = "task-content-div"
        let TodoDate = document.createElement("p")
        dateDiv.append(TodoDate)

        let priorityDiv = document.createElement("div")
        priorityDiv.classList = "task-content-div"
        let TodoPriority = document.createElement('p')
        priorityDiv.append(TodoPriority)



        TodoName.textContent = currentProject.projectTodoList[i].title
        TodoDescription.textContent = currentProject.projectTodoList[i].description
        TodoDate.textContent = currentProject.projectTodoList[i].dueDate
        TodoPriority.textContent = currentProject.projectTodoList[i].priority

        if (TodoPriority.textContent === "Important") {
            TodoPriority.classList = "important-priority"
        } else {
            TodoPriority.classList = "low-priority"
        }
        

        childDiv.append(nameDiv, descDiv, dateDiv, priorityDiv)
        contentDiv.append(childDiv)
        

        addTaskButtons(childDiv)
        
    }
  };

  let addTaskButtons = (taskDiv) => {
    let taskButtonDiv = document.createElement("div")
    taskButtonDiv.classList = "task-buttons"
    let deleteButton = document.createElement("img");
    deleteButton.id = 'delete-button'
    deleteButton.src = "/src/trash-can.png"

    let editButton = document.createElement("img");
    editButton.id = 'update-button'
    editButton.src = "/src/pencil.png"

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
    let form = document.createElement("form")
    form.classList.add("form-div")

    let button = document.createElement("input");
    let title = document.createElement("input")
    let description = document.createElement("input")
    let date = document.createElement("input")
    let priority = document.createElement("select")

    title.type = 'text'
    title.id = "title"
    title.placeholder = "New task title"
    title.required = true

    description.type = "text"
    description.id = "description"
    description.placeholder = "Description"
    description.required = true


    button.type = 'button'
    button.id = 'label-button'
    button.value = 'Add task'

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

        // Local item storage
        localStoreItem('list', JSON.stringify(projectList))
       
        displayContent(currentID)

    } else {
        alert("Make sure that you enter a title!")
    }
    })
}

let localStoreItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

let retrieveLocalItem = (item) => {
    let x = localStorage.getItem(item)
    let parsedItem = JSON.parse(x)
    return JSON.parse(parsedItem)
}

let displayLocalItems = () => {
    if (localStorage.length === 1) {
        projectList = retrieveLocalItem('list')
        addToDiv()
    }
}

  return { CreateNewTodo, newProject, projectList, deleteTask, 
    addToDiv, displayContent, createForm, createBlockerDiv, localStoreItem, 
    retrieveLocalItem, displayLocalItems };
})();

export default todoApp;
