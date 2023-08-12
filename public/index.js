const submitBtn = document.getElementById('form-btn');

// task container (empty 'ul'),
// addTask() - fills this element with 'li':
const taskList = document.getElementById("task-list");

// get input element:
const inputBox = document.getElementById('task');

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
  
  // reset input text
  inputBox.value = "";
}

submitBtn.addEventListener('click', (e) => {
  // prevent page reload on button click:
  e.preventDefault();
  addTask();
});

taskList.addEventListener('click', (e) => {
  // remove li corresponding to delete button:   
  if (e.target.tagName.toLowerCase() === 'button')
    e.target.parentElement.remove();
});

// helper functions:
// generate unique id for each list item:
function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}