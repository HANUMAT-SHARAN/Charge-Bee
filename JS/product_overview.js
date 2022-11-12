import {navbarhtml,producthtml,solutionshtml,resourceshtml} from '../Component/navbar.js'
let nav = document.querySelector("#navbar");

import {footer,medeaicon} from "../Component/footer.js";
document.getElementById("footer").innerHTML=footer();
document.getElementById("mediaicons").innerHTML=medeaicon();

let htmlprod = document.querySelector("#product");
htmlprod.innerHTML = producthtml();

let solut = document.querySelector("#solutions");

solut.innerHTML = solutionshtml();

let reso = document.querySelector("#resources");

reso.innerHTML = resourceshtml();

nav.innerHTML = navbarhtml();
// /Scripts/navbarscript.js
import { navbarscript } from "../Scripts/navbarscript.js";

navbarscript();


// let carousel_div= document.getElementById("carosals_container");
let i=0;
function carousel(){
    
    let images = [`https://www.solidbackgrounds.com/images/950x350/950x350-beige-solid-color-background.jpg`,`https://media.istockphoto.com/photos/light-blue-background-picture-id1060470478?b=1&k=20&m=1060470478&s=612x612&w=0&h=5BreGlnhne_cc02Sl00fHr-1JqK47X0pdtt6hhwxSZ4=`,`https://wallpaperaccess.com/full/250763.jpg`,`https://www.solidbackgrounds.com/images/3508x2480/3508x2480-old-rose-solid-color-background.jpg`,`https://www.solidbackgrounds.com/images/3508x2480/3508x2480-blue-bell-solid-color-background.jpg`];


    let h1s = [`Subscription Management Software That Helps You Scale Seamlessly`,`Untangle Recurring Billing Operations
    from Custom Codes and Messy Patchwork`,`Collect, Manage, and Maximize Recurring Payments`,`Simplify SaaS Accounting
    and Finance Operations`, `Take Decisive Actions with
    Comprehensive Subscription Analytics`];

    let ps = [`Get the flexibility to manage subscription problems you have today. And the ones that will creep up a year from now.`,`Setup your recurring billing workflow and automate invoicing logic. Focus on building your SaaS business, while Chargebee handles your billing heavy-lifting.`,`Don't just accept recurring payments. Boost subscription revenue and cash flow at scale, across 100+ currencies and payment methods.`,`Bid goodbye to monthly spreadsheets and manual errors. Set up better finance processes to accelerate your subscription business growth.`,`Get 360° business visibility with subscription analytics and insight-driven, interactive dashboards. Make data-backed decisions based on key metrics, so you can keep your business aligned with growth.`]






    // let divColor = ['#e1e9fb','#feeecc','#c5f9e1', '#f7d7f8', '#f9d8d4'];
    

    let div =document.getElementById("carosals_container");
    // div.style.backgroundSize = "1200";
    let imgElement = document.createElement("img");
    let h1Element = document.createElement("h1");
    let pElement = document.createElement("p");
    let leftH1 = document.createElement("button");
    let rightH1 =  document.createElement("button");
    leftH1.innerText = "←";
    
    rightH1.innerText = "→";
 
    imgElement.src = images[0];
    h1Element.innerText = h1s[0];
    pElement.innerText = ps[0];
    imgElement.className = "bgimg"
    h1Element.className = "centered_h1";
    pElement.className = "centered_p";
    leftH1.className = "leftArrow";
    leftH1.onclick = () =>{
        previousbtn();
    }
    rightH1.className = "rightArrow";
    rightH1.onclick = () =>{
        nextbtn();
    }
    div.append(leftH1, imgElement, h1Element, pElement, rightH1);
    i = i + 1;

    setInterval(function (){
        if(i === images.length){
            i=0;
        }
        imgElement.src = images[i];
        imgElement.className = "bgimg"
        h1Element.innerText = h1s[i];
        h1Element.className = "centered_h1";
        pElement.innerText = ps[i];
        pElement.className = "centered_p";
        leftH1.className = "leftArrow";
        leftH1.onclick = () =>{
            previousbtn();
        }
        rightH1.className = "rightArrow";
        rightH1.onclick = () =>{
            nextbtn();
        }
        i = i + 1;

        // div.append(divElement);
        div.append(leftH1,imgElement, h1Element, pElement, rightH1);
        // i++;
    },3000);

}

carousel();