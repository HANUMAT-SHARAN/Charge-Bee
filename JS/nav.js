import {
  navbarhtml,
  producthtml,
  solutionshtml,
  resourceshtml,
} from "/Component/navbar.js";

let nav = document.querySelector("#navbar");

let htmlprod = document.querySelector("#product");
htmlprod.innerHTML = producthtml();

let solut = document.querySelector("#solutions");

solut.innerHTML = solutionshtml();

let reso = document.querySelector("#resources");

reso.innerHTML = resourceshtml();

nav.innerHTML = navbarhtml();

import { navbarscript } from "/Scripts/navbarscript.js";

navbarscript();

let log = document.querySelector("#logo");
log.onclick = () => {
  window.location.href = "../HTML/index.html";
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
let login=document.querySelector("#log")
login.onclick=()=>{
  window.location.href="signup.html"
}
// import { navbarhtml,producthtml } from "/Component/navbar.html.js"
// let nav=document.querySelector("#navbar")
// nav.innerHTML=navbarhtml()
// let produc=document.querySelector("#product")
// produc.innerHTML=producthtml()

/* let prohover = document.querySelector("#prohover");
let pro = document.querySelector("#product");
let prices = document.querySelector("#prices");
let solutions = document.querySelector("#solutions");
let sol = document.querySelector("#sol");
let customers = document.querySelector("#customers");
let res=document.querySelector("#res")
let partner=document.querySelector("#partner")
let logo=document.querySelector("#logo")

let resources=document.querySelector("#resources")


prohover.onmouseover = () => {

  pro.style.display = "block";
  pro.style.transition = "0.10ms";
  pro.style.display = "grid";
  
};
prices.onmouseover = () => {
  pro.style.display = "none";
  solutions.style.display = "none";
  resources.style.display="none"
};
partner.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display="none"
  };
customers.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display="none"
  };
pro.onmouseover = () => {
  pro.style.display = "block";
  pro.style.transition = "0.10ms";
  pro.style.display = "grid";
};
pro.onmouseout = () => {
  pro.style.display = "none";
};
logo.onmouseover=()=>{
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display="none"
}

sol.onmouseover = () => {
  console.log(1);
  solutions.style.display = "block";
  solutions.style.transition = "0.10ms";
  solutions.style.display = "grid";
};
solutions.onmouseover = () => {
  solutions.style.display = "block";
  solutions.style.transition = "0.10ms";
  solutions.style.display = "grid";
};

solutions.onmouseout = () => {
  solutions.style.display = "none";
};

res.onmouseover=()=>{
    resources.style.display = "block"
  resources.style.transition = "0.10ms"
  resources.style.display = "grid"
}
resources.onmouseover = () => {
    resources.style.display = "block";
    resources.style.transition = "0.10ms";
    resources.style.display = "grid";
  };

  resources.onmouseout = () => {
    resources.style.display = "none";
  };
 */
