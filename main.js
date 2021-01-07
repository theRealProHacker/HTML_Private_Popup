let buttonPop = document.getElementById("buttonPop")
let fullPop  = document.getElementById("fullPop")
let smallPop = document.getElementById("smallPop")
let children = Array.from(smallPop.childNodes)
let grandchildren=Array.from(children[1].childNodes)
console.log(smallPop,children,grandchildren)

let closeButton=document.getElementById("closeButton")
buttonPop.addEventListener("click",async()=>{
    fullPop.style.display="block"
    smallPop.style.display="block"
},false)

fullPop.addEventListener("click",async(event)=>{
    if ((event.target!==smallPop && !children.includes(event.target)) && !grandchildren.includes(event.target) || event.target===closeButton){
        fullPop.style.display="none"
    }
},false)


function getGrandchildren(childArray){
    if (childArray.isArray){
        let grandchildren={}
        childArray.forEach(child => {
            grandchildren=grandchildren.concat(Array.from(child.childNodes))
        });
        return grandchildren
    }
    else{
        return childArray
    }
}