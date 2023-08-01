const btn = document.getElementById('submit');

btn.addEventListener('click', (e) => {
  // prevent page reload on button click:
  e.preventDefault();
  
  // new list element:
  const node = document.createElement("li");

  // get input element:
  let task = document.getElementById('task');

  if (task.value === "") {
    console.error('cannot submit empty task...');
    return;
  }
  // append input's text value to new 'li' element:
  node.append(task.value);

  // Append 'li' to task list:
  document.getElementById("task-list").appendChild(node);

  // reset input text
  task.value = "";
});