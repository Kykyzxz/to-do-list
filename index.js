const inputElement = document.getElementById('input-project');
const addProject = document.getElementById('btn-add-project');
const projectList = document.getElementById('project-list')
const deleteProject = document.getElementById('delete-project')

// const projectList = document.getElementById('project-list');
const addDaily = document.getElementById('btn-add-daily');


addProject.addEventListener('click', () => {
    const inputValue = inputElement.value;
    console.log(inputValue)
    console.log(projectList)
    console.log(inputElement)
    // check inputs if empty
    if(inputValue === ''){
        alert('Please enter a valid input!');
        // return and stop if there's no valid input
        return; 
    }

    const newItem = document.createElement('li');
    newItem.classList.add('list');
    newItem.id = 'project'; 

    newItem.innerHTML = `
        <div class="content-list-container" id="content-project">
            <input type="checkbox" id="checkbox-project">
            <span>${inputValue}</span>
        </div>
        <div class="btn-delete-container" id="btn-delete-project">
            <button class="delete-project">Delete</button>
        </div>
    `
    // delete function of the newly added item
    const deleteBtn = newItem.querySelector('.delete-project');
    deleteBtn.addEventListener('click', () =>{
        newItem.remove();
    });

    // this is the problem
    const checkbox = document.getElementById('checkbox-project');
    checkbox.addEventListener('change', ()=>{
        const span
    });
    // add to the child element
    projectList.appendChild(newItem);

    // delete / clear the inputs
    inputElement.value = '';


})