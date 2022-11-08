let prohover=document.querySelector("#prohover")
let pro=document.querySelector("#product")
let prices=document.querySelector("#prices")
prohover.onmouseover=()=>{
    pro.style.display="block"
    pro.style.transition="0.10ms"
    pro.style.display="grid"
    pro.style.display="absolute"
   
   
}
prices.onmouseover=()=>{
    pro.style.display="none"
    
}
pro.onmouseover=()=>{
    pro.style.display="block"
    pro.style.transition="0.10ms"
    pro.style.display="grid"
}
pro.onmouseout=()=>{
    pro.style.display="none"
}
// prohover.onmouseout=()=>{
    
//     pro.style.display="none"
    
// }