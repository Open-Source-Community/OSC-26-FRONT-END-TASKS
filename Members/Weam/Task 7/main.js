const tasks = document.querySelectorAll(".task");
tasks.forEach(task => {
    const toggleBtn = task.querySelector(".toggle-btn");
    const removeBtn = task.querySelector(".remove-btn");
    const status = task.querySelector(".status");

    toggleBtn.addEventListener("click", () => {
        if (task.classList.contains("pending")) {
            task.classList.remove("pending");
            task.classList.add("completed");
            status.textContent = "✅ Completed";
        } else {
            task.classList.remove("completed");
            task.classList.add("pending");
            status.textContent = "⏳ Pending";
        }
    });

    removeBtn.addEventListener("click", () => {
        task.remove();
    });
});