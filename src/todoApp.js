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

  let deleteProject = (e) => {
    let idToDelete = e.target.getAttribute("data-id");
  };

  let addToDiv = () => {
    let projectDiv = document.getElementById("projects-element");
    projectDiv.textContent = "";

    for (let i = 0; i < projectList.length; i++) {
      let childDiv = document.createElement("div");
      childDiv.id = "project-name"
      let projectTitle = document.createElement("h1");

      //Sets new ID for the div
      childDiv.setAttribute("data-id", i);
      //Project name.
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
        let TodoName = document.createElement("h1")

        TodoName.textContent = currentProject.projectTodoList[i].title
        

        childDiv.append(TodoName)
        contentDiv.append(childDiv)
    }
  };

  let createForm = (id) => {
    let formDiv = document.createElement("div")
    let form = document.createElement("form")

    let button = document.createElement("input");
    let title = document.createElement("input")
    title.type = 'text'
    title.id = "title"
    title.placeholder = "new task title"


    button.type = 'button'
    button.id = 'label-button'
    button.value = 'submit'
    button.setAttribute("button-id", id)

    button.addEventListener('click', function(e) {
        title = document.getElementById('title').value
        let currentID = e.target.getAttribute('button-id')
        let newTask = CreateNewTodo(title, "black", "red")
        let currentProjectList = projectList[currentID].projectTodoList

        currentProjectList.push(newTask)
        console.log(projectList);
        displayContent(currentID)
    })

    form.append(button, title)
    formDiv.append(form)

    contentDiv.append(formDiv)
}

  return { CreateNewTodo, newProject, projectList, deleteProject, 
    addToDiv, displayContent, createForm };
})();

export default todoApp;
