const baseURL = 'http://localhost:3000';

const form = document.querySelector('form');

const checkbox = document.getElementsByClassName('task-edit');

// task container (empty 'ul'),
// addTask() - fills this element with 'li':
const taskList = document.getElementById("task-list");

// get input element:
const inputBox = document.getElementById('task');

const loadTasks = async () => {
  // get req:
  await fetch(`${baseURL}/tasks`, { 
    method: 'GET' 
  })
  .then(res => { return res.json(); })
  .then(data => { 
    const allTasks = data.tasks.map(task => {
      const { _id: taskID, completed, task: name } = task;

      if (completed) {
        console.log(name + ' is completed!');
        checkbox.checked = true;
      }

      return `<li data-id="${taskID}">
        <input type="checkbox" name="completed" class="task-edit" />
        <label>${name}</label>
        <button class="delete-btn">Delete</button>
      </li>`;
    }).join('');

    taskList.innerHTML = allTasks;
  })
  .catch(error => console.log(error));
}

loadTasks();

/* Add task into list: */
form.onsubmit = async (e) => {
  // prevent page reload on button click:
  e.preventDefault();
  addTask();
  
  // post req:
  await fetch(`${baseURL}/tasks`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task: inputBox.value })
  })
  .then(res => { return res.json(); })
  .then(data => console.log(data));
  
  // reset input text
  inputBox.value = "";
}

/* Remove task from list: */
taskList.addEventListener('click', async (e) => {
  // remove li corresponding to delete button:   
  if (e.target.tagName.toLowerCase() === 'button') {
    const id = e.target.parentElement.dataset.id;

    // delete req:
    await fetch(`${baseURL}/tasks/${id}`, {
      method: 'DELETE',
    })
    .then(res => { return res.json(); })
    .then(data => console.log(data));
    //e.target.parentElement.remove();
    loadTasks();
  }
  else if (e.target.tagName.toLowerCase() === 'input') {
    const id = e.target.parentElement.dataset.id;
    await fetch(`${baseURL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: true
      })
    })
    .then(res => { return res.json(); })
    .then(data =>  { 
  
      //const { _id: items } = data;
      //console.log(taskID);
      checkbox.checked = true;
      console.log(checkbox);
    });
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert('cannot submit empty task...');
    return;
  }
  else {
    // new list element:
    const li = document.createElement("li");
    
    const input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'completed');
    
    const label = document.createElement("label");
    label.append(inputBox.value)

    const deleteBtn = document.createElement("button");
    deleteBtn.append('Delete');
    
    li.appendChild(input);      // add completed checkbox
    li.appendChild(label);      // add input's text value
    li.appendChild(deleteBtn);  // add delete button

    // Append 'li' to task list:
    taskList.appendChild(li);
  }
}