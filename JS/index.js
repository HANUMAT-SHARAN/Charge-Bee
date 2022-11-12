//import navbar
 import {navbarhtml,producthtml,solutionshtml,resourceshtml} from "../Component/navbar.js";
 let nav = document.querySelector("#navbar");

 let htmlprod = document.querySelector("#product");
 htmlprod.innerHTML = producthtml();

 let solut = document.querySelector("#solutions");
 solut.innerHTML = solutionshtml();

 let reso = document.querySelector("#resources");
 reso.innerHTML = resourceshtml();

 nav.innerHTML = navbarhtml();

 import { navbarscript } from "../Scripts/navbarscript.js";

 navbarscript();


let customers = document.querySelector("#customers");
customers.onclick = () => {
  window.location.href = "../HTML/customers.html";
};
let partner = document.querySelector("#partner");
partner.onclick = () => {
  window.location.href = "../HTML/partner.html";
};



let log = document.querySelector("#logo");
log.onclick = () => {
  window.location.href ="../index.html"
  console.log(1);
};

let c = document.querySelector("#customers");
c.onclick = () => {
  window.location.href = "../HTML/customers.html";
};
let prices=document.querySelector("#prices")
prices.onclick=()=>{
  window.location.href="../HTML/pricing.html"
}

// import footer
import {footer,medeaicon} from "../Component/footer.js";
document.getElementById("footer").innerHTML=footer();
document.getElementById("mediaicons").innerHTML=medeaicon();


let login=document.querySelector("#log")
login.onclick=()=>{
  window.location.href="../HTML/signup.html"
}

//import customizeddemo part
import {customized} from "../Component/customized.js";
document.getElementById("customized").innerHTML=customized();

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
 



 //FOR CONVERSION PORTION
 const conversion=()=>{
      let elem=document.getElementById("conversionoficon");
      setTimeout(()=>{
          elem.style.display="block"
      },3000);
     
 }


 //CHATBOX;

 let flip=1;
 document.getElementById("conversionoficon").onclick=()=>{
  const audio=new Audio("../Audio/myaudio.mp3.wav");
  audio.play();
  if(flip==1){
    document.getElementById("conversion").style.display="block";
    flip=2;
  }else{
    document.getElementById("conversion").style.display=null;
    flip=1;
  }
 }
 conversion();


 //FOR SEND OUR DATA
 document.getElementById("writeyourchat").addEventListener("keypress",(event)=>{
          if(event.key=="Enter"  ){
            
            let data=document.getElementById("writeyourchat").value ;
            console.log(data);

            //for empty entry
            if(data==""){
              return;
            }

            let p=document.createElement("p");
            p.innerText=data;

            let div=document.createElement("div");
            div.setAttribute("class","sendchat");

            div.append(p);
            document.querySelector("#chatbox").append(div);

            document.getElementById("chatbox").scrollTo(0,document.body.scrollHeight);

            //send audio
            const audio=new Audio("../Audio/send.wav");
            audio.play();
           
            //make input box empty
            document.getElementById("writeyourchat").value=""
           
            setTimeout(recievans,2000);

          }
 })

//function for resend data;
let i=0;
 function recievans(){
  let ansarr=["Enter your organization name","Enter Total number of employee in your organization","Enter your organization net worth","Please tell your organization GST number","Please tell what you want from us"];
   
    
     //code for remove input box;
     let totaldiv=document.querySelectorAll("#chatbox >div");
    if(totaldiv.length>10){
      let p=document.createElement("p");
            p.innerText="Thanks, Our team reachout to you as soon as possible 🏃 🏃Have a nice day🕶️🥳🥳";

            let div=document.createElement("div");
            div.setAttribute("class","recievechat");

            div.append(p);
            document.querySelector("#chatbox").append(div);

            document.getElementById("chatbox").scrollTo(0,document.body.scrollHeight);

            document.getElementById("inputofchat").style.display="none";
            document.getElementById("inputofchat").style.backgroundColor="red"

             //recive audio play
             const audio=new Audio("../Audio/recive.wav");
             audio.play();
            return;
    }
    

    let p=document.createElement("p");
            p.innerText=ansarr[i];
            i++;

            let div=document.createElement("div");
            div.setAttribute("class","recievechat");

            div.append(p);
            document.querySelector("#chatbox").append(div);

            document.getElementById("chatbox").scrollTo(0,document.body.scrollHeight);

            //recive audio play
            const audio=new Audio("../Audio/recive.wav");
            audio.play();
 }

 let overview=document.querySelector("#overview")
overview.onclick=()=>{
  window.location.href="../HTML/product_overview.html"
}

// let log = document.querySelector("#logo");
// log.onclick = () => {
//   window.location.href = "../HTML/index.html";
//   console.log(1);
// };
// let customers = document.querySelector("#customers");
// customers.onclick = () => {
//   window.location.href = "../HTML/customers.html";
// };
// let partner = document.querySelector("#partner");
// partner.onclick = () => {
//   window.location.href = "../HTML/partner.html";
// };
// let prices=document.querySelector("#prices")
// prices.onclick=()=>{
//   window.location.href="../HTML/pricing.html"
// }
// let login=document.querySelector("#log")
// login.onclick=()=>{
//   window.location.href="signup.html"
// }