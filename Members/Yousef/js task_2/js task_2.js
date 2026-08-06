function toggleStatus(taskId,statusId){

    let card = document.getElementById(taskId)
    let status = document.getElementById(statusId)

    if(status.innerHTML.includes("Pending")){
        status.innerHTML = "✅ Completed"
        card.classList.add("completed")
    }else{
        status.innerHTML = "⏳ Pending"
        card.classList.remove("completed")
    }

}
function deleteTask(taskId){
    let card = document.getElementById(taskId)
    card.remove()
}