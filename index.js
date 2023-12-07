document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const tasksBody = document.getElementById("tasksBody");
  const tasksInfo = document.getElementById("tasksInfo");

  // Task counter
  let taskCounter = 0;

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Increment task counter
      taskCounter++;

      // Create a new row for the task
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${taskCounter}</td>
        <td class="w-50">${taskText}</td>
        <td>${getCurrentDate()}</td>
        <td><input type="checkbox" class="form-check-input"></td>
        <td><button class="btn btn-outline-danger btn-sm" onclick="deleteTask(this)">Delete</button></td>
      `;

      // Append the new row to the tasks body
      tasksBody.appendChild(newRow);

      // Update tasks info
      updateTasksInfo();

      // Clear the input field
      taskInput.value = "";
    }
  }

  // Function to get the current date in the format YYYY-MM-DD
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Function to update tasks info
  function updateTasksInfo() {
    tasksInfo.textContent = `Total tasks: ${taskCounter}`;
  }

  // Function to delete a task
  window.deleteTask = function (button) {
    const row = button.closest("tr");
    row.remove();

    // Decrement task counter
    taskCounter--;

    // Update tasks info
    updateTasksInfo();
  };

  // Event listener for add task button
  addTaskBtn.addEventListener("click", addTask);
});

  