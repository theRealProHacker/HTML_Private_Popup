let buttonPop = document.getElementById("buttonPop")
let fullPop  = document.getElementById("fullPop")
let smallPop = document.getElementById("smallPop")
let children = Array.from(smallPop.childNodes)
let closeButton=document.getElementById("closeButton")
buttonPop.addEventListener("click",async()=>{
    fullPop.style.display="block"
    smallPop.style.display="block"
},false)

fullPop.addEventListener("click",async(event)=>{
    if (event.target!==smallPop && !children.includes(event.target) || event.target===closeButton){
        fullPop.style.display="none"
    }
    
},false)