const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editTask(span));

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

function editTask(span) {
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}
