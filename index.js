const btn = document.getElementById('submit');
const taskList = document.getElementById("task-list");

btn.addEventListener('click', (e) => {
  // prevent page reload on button click:
  e.preventDefault();
  
  // new list element:
  const node = document.createElement("li");
  node.setAttribute('id', uniqueID());

  const input = document.createElement("input");
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'completed');

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute('id', 'deleteBtn');
  deleteBtn.append('delete');
  
  // get input element:
  let task = document.getElementById('task');
  
  if (task.value === "") {
    console.error('cannot submit empty task...');
    return;
  }

  // add to new 'li' element:
  node.append(task.value);      // add input's text value
  node.appendChild(input);      // add completed checkbox
  node.appendChild(deleteBtn);  // add delete button

  // Append 'li' to task list:
  taskList.appendChild(node);

  // reset input text
  task.value = "";
});

for (let i = 0; i < taskList.childNodes.length; i++) {
  console.log(taskList.childNodes);  
}

// helper functions:
// generate unique id for each list item:
function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}