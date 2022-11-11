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

  let login=document.querySelector("#log")
login.onclick=()=>{
  window.location.href="signup.html"
}

  

let data =JSON.parse(localStorage.getItem("ChrgeBee_form_data")) || [];

let form = document.getElementById("form");

form.onsubmit = (event) =>{
  event.preventDefault();

  let obj={
    f_name: form.f_name.value,
    l_name: form.l_name.value,
    business_email: form.business_email.value,
    job_title: form.job_title.value,
    company_name: form.company_name.value,
    Country: form.Country.value,
    Country_code: form.Country_code.value,
    phone_num: form.phone_num.value,
    number_of_employees: form.number_of_employees.value,
    past_work: form.past_work.value,
    envision: form.envision.value,
    organizations: form.organizations.value,
    clients: form.clients.value,
    tech: form.tech.value,
    mutual: form.mutual.value,
    partnership: form.partnership.value,
    become_a_p: form.become_a_p.value
  };

  data.push(obj)

  localStorage.setItem("ChrgeBee_form_data",JSON.stringify(data));
  //console.log(data);
  
  popup();  
};

const popup = () => {
  let popups = document.getElementById("popup");
      popups.style.visibility="visible";

  let img = document.createElement("img");
      img.src ="https://cdn-icons-png.flaticon.com/512/4315/4315445.png";
  let h2 = document.createElement("h2");
      h2.innerText= "Thank You";
  let disc = document.createElement("p");
      disc.innerText="Your details has been successfully submitted.";
  let btn = document.createElement("button");
      btn.innerText="OK";
      btn.onclick = () => {
        
        popups.style.visibility="hidden";
        window.location.reload();
      }
      popups.append(img,h2,disc,btn);
     
};


let overview=document.querySelector("#overview")
overview.onclick=()=>{
  
}