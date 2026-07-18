const bt1= document.getElementById("btn1") ;
const bt2= document.getElementById("btn2") ;
const bt3= document.getElementById("btn3") ;
const bt4= document.getElementById("btn4") ;
const di1=document.getElementById("div1") ;
const di2=document.getElementById("div2") ;
const span1=document.getElementById("spa1");
const span2=document.getElementById("spa2");

bt1.addEventListener("click",()=>{
    if (span1.textContent === "⏳pending") {
        span1.textContent = "✅Completed";
        di1.style.background="rgb(148, 243, 188)";
    } 
    else {
          span1.textContent = "⏳pending";
          di1.style.background="rgb(220, 231, 223)";
    }
}
)
bt3.addEventListener("click",()=>{
    if (span2.textContent === "⏳pending") {
        span2.textContent = "✅Completed";
        di2.style.background="rgb(148, 243, 188)";
    } 
    else {
          span2.textContent = "⏳pending";
          di2.style.background="rgb(220, 231, 223)";
    }
}
)
bt2.addEventListener("click",()=>{
    di1.remove();
})
bt4.addEventListener("click",()=>{
    di2.remove();
})