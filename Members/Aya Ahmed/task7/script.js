const tasks = [
  {
    title: "Learn JavaScript Basics",
    description: "Complete variables and functions exercises",
    completed: false
  },
  {
    title: "Create HTML Project",
    description: "Build simple DOM manipulation example",
    completed: true
  }
];

const tasksContainer = document.getElementById("tasks");

function displayTasks() {

  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {

    const card = document.createElement("div");

    card.className = "task";

    if (task.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h2>${task.title}</h2>

      <p>${task.description}</p>

      <p>
        Status:
        ${task.completed ? "✅ Completed" : "⏳ Pending"}
      </p>

      <div class="buttons">
        <button class="toggle">Toggle Status</button>
        <button class="remove">Remove</button>
      </div>
    `;

    const toggleBtn = card.querySelector(".toggle");

    toggleBtn.addEventListener("click", function () {
      task.completed = !task.completed;
      displayTasks();
    });

    const removeBtn = card.querySelector(".remove");

    removeBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      displayTasks();
    });

    tasksContainer.appendChild(card);

  });

}

displayTasks();