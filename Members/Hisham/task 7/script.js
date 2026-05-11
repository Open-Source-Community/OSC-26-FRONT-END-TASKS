let container = document.getElementById("container");

let boxesDetails = [
  {
    id: 1,
    title: "learn JS basics",
    task: "complete variables and functions exercises",
    pendingStatus: "⌛ pending",
    completeStatus: "✅ complete",
  },
  {
    id: 2,
    title: "Create HTML project",
    task: "build simple DOM manipulation example",
    pendingStatus: "⌛ pending",
    completeStatus: "✅ complete",
  },
];

function render() {
  container.innerHTML = "";

  boxesDetails.forEach((e) => {
    let box = document.createElement("div");
    box.className = "box pending";
    box.innerHTML = `
      
        <h2>${e.title}</h2>
          <p>${e.task}</p>
          <p class="status">status: ${e.pendingStatus}</p>
          <p class="status hidden">status: ${e.completeStatus}</p>
          <div class="btns">
            <button id="toggle" class="toggle">toggle status</button>
            <button class="remove">Remove</button>
          </div>
      `;

    let removeBtn = box.querySelector(".remove");
    removeBtn.addEventListener("click", () => {
      removeBox(e.id);
    });
    let toggleBtn = box.querySelector(".toggle");
    let status = box.querySelectorAll(".status");
    toggleBtn.addEventListener("click", () => {
      box.classList.toggle("pending");
      box.classList.toggle("complete");
      status.forEach((e) => {
        e.classList.toggle("hidden");
      });
    });
    container.appendChild(box);
  });
}

function removeBox(id) {
  boxesDetails = boxesDetails.filter((item) => item.id !== id);
  render();
}

render();
