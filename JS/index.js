//import navbar
import {navbarhtml,producthtml,solutionshtml,resourceshtml} from "../Component/navbar.html.js";
document.getElementById("navbar").innerHTML=navbarhtml()

let imagesarr=[`<div class="picture">
<img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/jose-bolanos.webp" alt="">
<div class="pappu">
    <p class="jose">José Bolaños,</p>
    <p>CTO - Slidebean</p> 
 </div>
</div>`,`<div class="picture">
<img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/paul-kapsner.webp" alt="">
<div class="pappu">
<p class="jose">Paul Kapsner,</p>   
<p> Director, Finances &</p>
<p>Operations - Superfood</p>
 </div>
</div>`,`<div class="picture">
<img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/rahul-gandhi.webp" alt="">
<div class="pappu">
<p class="jose">Rahul Gandhi,</p>
<p>CEO - MakeSpac</p> 
 </div>
</div>`,`<div class="picture">
<img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/antoine-louiset.webp" alt="">
<div class="pappu">
<p class="jose">Antoine Louiset,</p>
<p>CTO - Yousign</p> 
 </div>
</div>`,`<div class="picture">
<img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/debbie-barrafato.webp" alt="">
<div class="pappu">
<p class="jose">José Debbie Barrafato,</p>
<p>CFO - Rise Vision</p> 
 </div>
</div>`]

let textarr=["The subscription management platform that enabled Slidebean to slide into 30+ countries.","The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.","The revenue engine that powered MakeSpace to launch a B2B model overnight.","The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.",'The infrastructure that allows Rise Vision to ask "What Does This Make Possible?"']
let show=document.getElementById("slidinfg-content");
let headingtext=document.getElementById("headingtext");

 function slideshow() {
      show.innerHTML=imagesarr[0];
      headingtext.innerText=textarr[0];
      let i=1;
      document.getElementById(0).style.backgroundColor="#5c07d1"
      setInterval(function(){
        if(i==5){
            i=0;
        }
        show.innerHTML=imagesarr[i];
        headingtext.innerText=textarr[i];
        let btn=document.querySelectorAll("#change_image button");
        btn.forEach((el)=>{
              el.style.backgroundColor=null
             // console.log("amit")
        })
        document.getElementById(i).style.backgroundColor="#5c07d1";
        i++;
      },3000)      
}
slideshow();

//SCROLLING PART
window.addEventListener("scroll",()=>{
      let elem=document.getElementById("stckybar");
     const sizex=window.scrollY;
     const sizey=window.innerWidth;
     console.log(sizex)
   
    if(sizex >=1804  && sizey>500 &&sizex <=4500){
      elem.style.position="fixed";
      elem.style.top="0px";
      elem.style.left="5%";
      elem.style.backgroundColor="white";
      elem.style.transition="0.5s ease-out"
    }else{
      elem.style.transition="0.5s ease-in"
      elem.style.position="relative";
      elem.style.left="0%";
    }
})

 document.getElementById("experience").addEventListener("click",()=>{
  let elem=document.getElementById("scrool55")
         elem.scrollIntoView();
        
 })
 
