// project container
const inputElement = document.getElementById('input-project');
const addProject = document.getElementById('btn-add-project');
const projectList = document.getElementById('project-list')
const deleteProject = document.getElementById('delete-project')

const STORAGE_KEY = 'todoAppData';

function saveTasks() {
    const projectItems = Array.from(projectList.querySelectorAll('li.project-item')).map(item => {
        const span = item.querySelector('span');
        const checkbox = item.querySelector('input[type="checkbox"]');
        return {
            text: span ? span.textContent.trim() : '',
            completed: checkbox ? checkbox.checked : false
        };
    });

    const dailyItems = Array.from(dailyList.querySelectorAll('li.daily-item')).map(item => {
        const span = item.querySelector('span');
        const checkbox = item.querySelector('input[type="checkbox"]');
        return {
            text: span ? span.textContent.trim() : '',
            completed: checkbox ? checkbox.checked : false
        };
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ projects: projectItems, daily: dailyItems }));
}

function createProjectItem(data) {
    const newItem = document.createElement('li');
    newItem.classList.add('list', 'project-item');

    newItem.innerHTML = `
        <div class="content-list-container" id="content-project">
            <input type="checkbox" id="checkbox-project">
            <span>${data.text}</span>
        </div>
        <div class="btn-delete-container" id="btn-delete-project">
            <button class="delete-project">Delete</button>
        </div>
    `;

    const checkboxProj = newItem.querySelector('input[type="checkbox"]');
    const taskTextProj = newItem.querySelector('span');
    const deleteBtn = newItem.querySelector('.delete-project');

    checkboxProj.checked = data.completed;
    if (data.completed) {
        taskTextProj.classList.add('completed');
    }

    deleteBtn.addEventListener('click', () => {
        newItem.remove();
        updateCounts();
        saveTasks();
    });

    checkboxProj.addEventListener('change', () => {
        taskTextProj.classList.toggle('completed', checkboxProj.checked);
        updateCounts();
        saveTasks();
    });

    projectList.appendChild(newItem);
    updateCounts();
    saveTasks();
}

function createDailyItem(data) {
    const newItem = document.createElement('li');
    newItem.classList.add('list', 'daily-item');

    newItem.innerHTML = `
        <div class="content-list-container" id="content-daily">
            <input type="checkbox" id="checkbox-daily">
            <span>${data.text}</span>
        </div>
        <div class="btn-delete-container" id="btn-delete-daily">
            <button class="delete-daily">Delete</button>
        </div>
    `;

    const checkboxDaily = newItem.querySelector('input[type="checkbox"]');
    const taskTextDaily = newItem.querySelector('span');
    const deleteBtn = newItem.querySelector('.delete-daily');

    checkboxDaily.checked = data.completed;
    if (data.completed) {
        taskTextDaily.classList.add('completed');
    }

    deleteBtn.addEventListener('click', () => {
        newItem.remove();
        updateCounts();
        saveTasks();
    });

    checkboxDaily.addEventListener('change', () => {
        taskTextDaily.classList.toggle('completed', checkboxDaily.checked);
        updateCounts();
        saveTasks();
    });

    dailyList.appendChild(newItem);
    updateCounts();
    saveTasks();
}

function loadTasks() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) {
        updateCounts();
        return;
    }

    try {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed.projects)) {
            parsed.projects.forEach(task => createProjectItem(task));
        }
        if (Array.isArray(parsed.daily)) {
            parsed.daily.forEach(task => createDailyItem(task));
        }
    } catch (error) {
        console.error('Failed to load tasks from localStorage', error);
    }
}

//add project function

addProject.addEventListener('click', () => {
    const inputValue = inputElement.value.trim();
    if (inputValue === '') {
        alert('Please enter a valid input!');
        return;
    }

    createProjectItem({ text: inputValue, completed: false });
    inputElement.value = '';
});

const inputDailyElement = document.getElementById('input-daily');
const addDaily = document.getElementById('btn-add-daily');
const dailyList = document.getElementById('daily-list');
const deleteDaily = document.getElementById('btn-delete-daily');

//add daily function
addDaily.addEventListener('click', () => {
    const inputValue = inputDailyElement.value.trim();
    if (inputValue === '') {
        alert('Please enter a valid input!');
        return;
    }

    createDailyItem({ text: inputValue, completed: false });
    inputDailyElement.value = '';
});

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

//project section
const projects = document.getElementById('btn-projects');
projects.addEventListener('click', () => {
    dashboardSection.style.display = 'none';
    // dashboardSection.style.backgroundColor = 'blue';
    projectSection.style.display = 'block';
    dailySection.style.display = 'none';
});


//daily section
const daily = document.getElementById('btn-daily');
daily.addEventListener('click', () => {
    dashboardSection.style.display = 'none';
    // dashboardSection.style.backgroundColor = 'blue';
    projectSection.style.display = 'none';
    dailySection.style.display = 'block';   
});

//count function
const totalListCount = document.getElementById('total-list-count');
const projectListCount = document.getElementById('total-project-count');
const dailyListCount = document.getElementById('total-daily-count');
const completedListCount = document.getElementById('total-completed-count');

function updateCounts() {
    const projectItems = projectList.querySelectorAll('li.project-item');
    const dailyItems = dailyList.querySelectorAll('li.daily-item');
    const completedItems = document.querySelectorAll('.tasks-lists li input[type="checkbox"]:checked');

    const projectCount = projectItems.length;
    const dailyCount = dailyItems.length;

    projectListCount.textContent = projectCount;
    dailyListCount.textContent = dailyCount;
    totalListCount.textContent = projectCount + dailyCount;
    completedListCount.textContent = completedItems.length;
}

loadTasks();

  