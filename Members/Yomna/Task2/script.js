
const add_btn=document.getElementById("add")
const toggle_btn=document.getElementsByClassName("toggle")
const remove_btn=document.getElementsByClassName("remove")
const input=document.getElementById("taskinput")
add_btn.addEventListener("click",()=>{
const new_task=input.value.trim()
if(new_task===""){ 
    alert("Add your task")
    return
}
const new_item=document.createElement("div")
new_item.innerHTML=`
            <div class="item">
             <h1>${new_task}</h1>
        <h3>Programming Basics</h3>
        <p>status:Not Complete</p>
        <button class="toggle">toggle status</button>
        <button class="remove">Remove</button>
        </div>
        `
        document.body.appendChild(new_item)   

 input.value= ""
     
    }
     
)
// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("remove"))
//         e.target.parentElement.remove()

//     if(e.target.classList.contains("toggle"))
//     {
//         const item=e.target.parentElement
//         const status=item.querySelector("status")
//         if(status.textContent==="status: Not Complete")
//         {
//             status.textContent="status:Complete"
//             item.classList.add("done")
//         }
//         else{
//             status.textContent="status: Not Complete"
//             item.classList.remove("done")
//            } 
        
//     }
// })


