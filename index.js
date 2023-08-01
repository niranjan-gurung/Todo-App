const btn = document.getElementById('submit');

btn.addEventListener('click', (e) => {
  // prevent page reload on button click:
  e.preventDefault();
  
  // new list element:
  const node = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'completed');

  const deleteBtn = document.createElement("button");
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
  document.getElementById("task-list").appendChild(node);

  // reset input text
  task.value = "";
});