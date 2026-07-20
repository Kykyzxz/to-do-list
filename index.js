// project container
const inputElement = document.getElementById('input-project');
const addProject = document.getElementById('btn-add-project');
const projectList = document.getElementById('project-list')
const deleteProject = document.getElementById('delete-project')

//add project function

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
    newItem.classList.add('list', 'project-item');

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

    //selects the exact list then strikethrough 
    const checkboxProj = newItem.querySelector('input[type="checkbox"]');
    const taskTextProj = newItem.querySelector('span');

    checkboxProj.addEventListener('change', () => {
        taskTextProj.classList.toggle('completed', checkboxProj.checked);
    });

    // add to the child element
    projectList.appendChild(newItem);

    // delete / clear the inputs
    inputElement.value = '';

})


// const projectList = document.getElementById('project-list');
const inputDailyElement = document.getElementById('input-daily');
const addDaily = document.getElementById('btn-add-daily');
const dailyList = document.getElementById('daily-list')
const deleteDaily = document.getElementById('btn-delete-daily');

//add daily function
addDaily.addEventListener('click', () => {
    const inputValue = inputDailyElement.value;
    // console.log(inputDaily)
    // console.log(inputDailyElement);
    // console.log(addDaily);
    // console.log(dailyList)

    //check if the input is valid
    if(inputValue === ''){
        alert('Please enter a valid input!');
        return;
    }

    const newItem = document.createElement('li')
    newItem.classList.add('list', 'daily-item');
    
    newItem.innerHTML = `
        <div class="content-list-container" id="content-daily">
            <input type="checkbox" id="checkbox-daily">
            <span>${inputValue}</span>
        </div>
        <div class="btn-delete-container" id="btn-delete-daily">
            <button class="delete-daily">Delete</button>
        </div>
    `

    //delete function of the daily list
    const deleteBtn = newItem.querySelector('.delete-daily');
    deleteBtn.addEventListener('click', () => {
        newItem.remove();
    });

    //strikethrough design
    const checkboxDaily = newItem.querySelector('input[type="checkbox"]');
    const taskTextDaily = newItem.querySelector('span');
    checkboxDaily.addEventListener('change', () => {
        taskTextDaily.classList.toggle('completed', checkboxDaily.checked);
    });

    // add to the child element
    dailyList.appendChild(newItem);

    // delete / clear the inputs
    inputDailyElement.value = '';

})



//section separation

//dashboard
const dashboard = document.getElementById('btn-dashboard');
const dashboardSection = document.querySelector('.dashboard-section');
const projectSection = document.getElementById('project-section');
const dailySection = document.getElementById('daily-section');


dashboard.addEventListener('click', () => {
    dashboardSection.style.display = 'block';
    // dashboardSection.style.backgroundColor = 'blue';
    projectSection.style.display = 'none';
    dailySection.style.display = 'none';
});






const projects = document.getElementById('btn-projects');
projects.addEventListener('click', () => {
    dashboardSection.style.display = 'none';
    // dashboardSection.style.backgroundColor = 'blue';
    projectSection.style.display = 'block';
    dailySection.style.display = 'none';
});



const daily = document.getElementById('btn-daily');
daily.addEventListener('click', () => {
    dashboardSection.style.display = 'none';
    // dashboardSection.style.backgroundColor = 'blue';
    projectSection.style.display = 'none';
    dailySection.style.display = 'block';
});


