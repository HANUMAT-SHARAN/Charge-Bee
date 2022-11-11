let dali = document.querySelector(".dali");
let gill = document.querySelector(".gill");
let jus = document.querySelector(".jus");
let gillious = document.querySelector("#gillius");

let justindiv = document.querySelector("#justin");

let dal = document.querySelector("#dal");

let gillshow1time = document.querySelector("#gillshow1time");
gillshow1time.onmouseover = () => {
  gillious.style.display = "block";
  justindiv.style.display = "none";
  console.log("gill");
  dal.style.display = "none";
};
let gillshow2time = document.querySelector("#gillshow2time");
gillshow2time.onmouseover = () => {
  gillious.style.display = "block";
  justindiv.style.display = "none";
  console.log("gill");
  dal.style.display = "none";
};
let gillshow3time = document.querySelector("#gillshow3time");
gillshow3time.onmouseover = () => {
  gillious.style.display = "block";
  justindiv.style.display = "none";
  console.log("gill");
  dal.style.display = "none";
};

let dallshow1time = document.querySelector("#dallshow1time");
dallshow1time.onmouseover = () => {
  gillious.style.display = "none";

  justindiv.style.display = "none";

  console.log("dall");
  dal.style.display = "block";
};

let dallshow2time = document.querySelector("#dallshow2time");
dallshow2time.onmouseover = () => {
  gillious.style.display = "none";
  justindiv.style.display = "none";
  console.log("dall");
  dal.style.display = "block";
};
let dallshow3time = document.querySelector("#dallshow3time");
dallshow3time.onmouseover = () => {
  gillious.style.display = "none";

  dal.style.display = "block";
  justindiv.style.display = "none";

  console.log("dall");
  dal.style.display = "block";
};

let justinshow1 = document.querySelector("#justinshow1time");
justinshow1.onmouseover = () => {
  gillious.style.display = "none";

  console.log("justin");
  dal.style.display = "none";
  justindiv.style.display = "block";
};
let justinshow2 = document.querySelector("#justinshow2time");
justinshow2.onmouseover = () => {
  gillious.style.display = "none";

  console.log("justin");
  dal.style.display = "none";
  justindiv.style.display = "block";
};
let justinshow3 = document.querySelector("#justinshow3time");
justinshow3.onmouseover = () => {
  gillious.style.display = "none";

  console.log("justin");
  dal.style.display = "none";
  justindiv.style.display = "block";
};

let email = document.querySelector("#email").value;
let emailinput = document.querySelector("#email");
let password = document.querySelector("#password").value;
let passwordinput = document.querySelector("#password");


let signupbutton = document.querySelector("#signupbutton");

let pc;
let passalert=document.querySelector("#alertpassword")
let emailalert=document.querySelector("#alertmail")
let flagpass=false;
let flagemail=false;
let flagnosign=false;
const passcheck = (passwordinput.oninput = () => {
  let password = document.querySelector("#password").value;
  if ((password.length >= 8 && password.includes("@")|| password.length >= 8 && password.includes("$")||password.length >= 8 && password.includes("%")||password.length >= 8 && password.includes("#")||password.length >= 8 && password.includes("&"))
  ) {
   
    passalert.innerText="PASSWORD IS STRONG "
    passalert.style.color="green"
    flagpass=true;
    
  }else{
   
    passalert.innerText="PASSWORD MUST HAVE @,#,$,&,%"
    passalert.style.color="red"
  }
});

const emailcheck = (emailinput.oninput = () => {
  let email = document.querySelector("#email").value;

  if (email.includes("@")) {
    emailalert.innerText="EMAIL ADDRESS IS CORRECT"
    emailalert.style.color="green"
    flagemail=true
    
  }else{
    emailalert.innerText="EMAIL ADDRESS IS WRONG"
    emailalert.style.color="red"
  }
});


let userarr=JSON.parse(localStorage.getItem("userarr"))||[]


passwordinput.oninput=()=>{

if(flagpass&&flagemail){
  signupbutton.style.display="block"
 signupbutton.onclick=()=>{
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let userobj={
    email,
    password
  }
  console.log(userobj)
  userarr.push(userobj)
  localStorage.setItem("userarr",JSON.stringify(userarr))
  alert("SIGNUP SUCCESSFUL")

 }
 
 
}else{
  signupbutton.style.display="none"
  flagnosign=true;
  console.log("flagnosign: ", flagnosign);
}
if(flagemail&&flagpass){

  signupbutton.style.display="block"
  signupbutton.onclick=()=>{
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let userobj={
      email,
      password
    }
    console.log(userobj)
    userarr.push(userobj)
    localStorage.setItem("userarr",JSON.stringify(userarr))
    alert("SIGNUP SUCCESSFUL")
    
   }
 
}else{
  signupbutton.style.display="none"
  flagnosign=true;
  console.log("flagnosign: ", flagnosign);
}
passcheck()
emailcheck()
}

emailinput.oninput=()=>{
  if(flagpass&&flagemail){
    signupbutton.style.display="block"
    signupbutton.onclick=()=>{
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let userobj={
        email,
        password
      }
      console.log(userobj)
      userarr.push(userobj)
      localStorage.setItem("userarr",JSON.stringify(userarr))
      alert("SIGNUP SUCCESSFUL")
      
     }
   
  }else{
    signupbutton.style.display="none"
    flagnosign=true;
    console.log("flagnosign: ", flagnosign);
   
  }
  if(flagemail&&flagpass){
  
    signupbutton.style.display="block"
   
    signupbutton.onclick=()=>{
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let userobj={
        email,
        password
      }
      userarr.push(userobj)
     localStorage.setItem("userarr",JSON.stringify(userarr))
     alert("SIGNUP SUCCESSFUL")
      
     }
   
  }else{
    signupbutton.style.display="none"
    flagnosign=true;
    console.log("flagnosign: ", flagnosign);
   
  }
passcheck()
emailcheck()
}

if(flagnosign){
  alert("Signup Not Succesfull")
}






