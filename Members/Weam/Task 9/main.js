document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.padding = "50px";
const title = document.createElement("h2");
title.textContent = "My Tasks";
document.body.appendChild(title);
function createTask(taskTitle, description, completed) {
    const task = document.createElement("div");
    task.style.border = "1px solid rgb(183,181,181)";
    task.style.borderRadius = "10px";
    task.style.margin = "10px 0";
    task.style.padding = "15px";

    if (completed) {
        task.classList.add("completed");
        task.style.backgroundColor = "#dffaee";
    } else {
        task.classList.add("pending");
        task.style.backgroundColor = "#f8f9fa";
    }

    const h3 = document.createElement("h3");
    h3.textContent = taskTitle;
    const p1 = document.createElement("p");
    p1.textContent = description;
    const p2 = document.createElement("p");
    p2.textContent = "Status: ";
    const status = document.createElement("span");

    if (completed) {
        status.textContent = "✅ Completed";
    } else {
        status.textContent = "⏳ Pending";
    }

    p2.appendChild(status);
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Status";
    toggleBtn.style.backgroundColor = "rgb(78,148,253)";
    toggleBtn.style.color = "white";
    toggleBtn.style.border = "none";
    toggleBtn.style.padding = "5px 10px";
    toggleBtn.style.marginRight = "10px";
    toggleBtn.style.borderRadius = "5px";
    toggleBtn.style.cursor = "pointer";

    toggleBtn.onmouseover = function () {
        toggleBtn.style.backgroundColor = "#0056b3";
    };
    toggleBtn.onmouseout = function () {
        toggleBtn.style.backgroundColor = "rgb(78,148,253)";
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.backgroundColor = "rgb(175,42,42)";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.padding = "5px 10px";
    removeBtn.style.borderRadius = "5px";
    removeBtn.style.cursor = "pointer";

    toggleBtn.onclick = function () {

        if (task.classList.contains("pending")) {

            task.classList.remove("pending");
            task.classList.add("completed");
            task.style.backgroundColor = "#dffaee";
            status.textContent = "✅ Completed";

        } else {

            task.classList.remove("completed");
            task.classList.add("pending");
            task.style.backgroundColor = "#f8f9fa";
            status.textContent = "⏳ Pending";
        }
    };
    removeBtn.onclick = function () {
        task.remove();
    };
    task.appendChild(h3);
    task.appendChild(p1);
    task.appendChild(p2);
    task.appendChild(toggleBtn);
    task.appendChild(removeBtn);
    document.body.appendChild(task);
}

createTask(
    "Learn JavaScript Basics",
    "Complete variables and functions exercises",
    false
);

createTask(
    "Build a Simple Website",
    "Create HTML structure and basic CSS styling",
    true
);