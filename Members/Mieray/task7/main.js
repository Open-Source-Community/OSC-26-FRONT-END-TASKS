const wholeTask = document.querySelectorAll('.wholetask');

wholeTask.forEach(wholeTask => {
    const toggleButton = wholeTask.querySelector('.toggle-button');
    const removeButton = wholeTask.querySelector('.remove-button');
    
    const taskStat = wholeTask.querySelector('.task-stat');
    
    toggleButton.addEventListener("click", () =>{
        if (wholeTask.classList.contains("pending")) {
            wholeTask.classList.remove("pending");
            wholeTask.classList.add("completed");
            taskStat.textContent = "✅ Completed";
        }
        else{
            wholeTask.classList.remove("completed");
            wholeTask.classList.add("pending");
            taskStat.textContent = "⌛ Pending";
        }
    });
    
    removeButton.addEventListener("click", () => {
        wholeTask.remove();
    });
    
});