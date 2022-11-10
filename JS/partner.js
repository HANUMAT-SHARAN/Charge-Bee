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
  let customers = document.querySelector("#customers");
  customers.onclick = () => {
    window.location.href = "../HTML/customers.html";
  };
  let partner = document.querySelector("#partner");
  partner.onclick = () => {
    window.location.href = "../HTML/partner.html";
  };
  let prices=document.querySelector("#prices")
prices.onclick=()=>{
  window.location.href="../HTML/pricing.html"
}
  
// // // / / / / / / / / / / 


let form = document.getElementById("form");

let testbtns= document.getElementById('testbtn');
testbtns.onclick = () => {
  let name=form.f_name.value;
  console.log(name);
};


form.onsubmit = () =>{
  let name=documet.form.f_name.value;

console.log(name);

}


  