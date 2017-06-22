document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('input').addEventListener('keypress', addTaskKeyPress);
document.getElementById('event-type').addEventListener('click', eventTypeSelection);
document.getElementById('list').addEventListener('click', toggleComplete);

function addTask() {
  checkEventType();
  let inputNode = document.getElementById('input');
  const list = document.getElementById('list');
  const taskNode = createTaskNode(inputNode.value);
  inputNode.value = '';
  list.appendChild(taskNode);
}

function createTaskNode(input) {
  const li = document.createElement('LI');
  li.className='task';

  const checkbox = document.createElement('SPAN');
  const checkboxClassName = checkEventType() === 'Task' ? 'checkbox taskType' : 'checkbox eventType';
  checkbox.className = checkboxClassName; 
  li.appendChild(checkbox);
  
  const task = document.createTextNode(input);
  li.appendChild(task);
  
  const remove = document.createElement('SPAN');
  remove.className = 'remove';
  remove.addEventListener('click', removeTask);
  li.appendChild(remove);

  return li;
}

function addTaskKeyPress(e) {
  const key = e.keyCode;
  if ( key === 13) {
    addTask();
  }
}

function eventTypeSelection(e) {
  const options = document.getElementById("event-type").getElementsByClassName('btn');
  for (let i = 0; i < options.length; i++) {
    options[i].classList.toggle('active');
  }
}

function checkEventType() {
  const eventType = document.getElementById("event-type").getElementsByClassName('active')[0].textContent;
  return eventType;
}

function toggleComplete(e) {
  if (!e.target.childNodes[0]) return;
  const taskType = e.target.childNodes[0].classList.contains('taskType');
  const className = taskType ? 'complete-task' : 'complete-event';
  e.target.classList.toggle(className);
}

function removeTask(e) {
  const currNode = e.target.parentElement;
  const list = document.getElementById('list');
  list.removeChild(currNode);  
}