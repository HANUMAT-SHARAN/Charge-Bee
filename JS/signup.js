let dali = document.querySelector(".dali");
let gill = document.querySelector(".gill");
let jus = document.querySelector(".jus");
let gillious = document.querySelector("#gillius");

let justindiv = document.querySelector("#justin");

let dal = document.querySelector("#dal");

let gillshow1time = document.querySelector("#gillshow1time");
gillshow1time.onclick = () => {
  gillious.style.display = "block";
 justindiv.style.display = "none";
  console.log("gill");
  dal.style.display = "none";
};
let gillshow2time = document.querySelector("#gillshow2time");
gillshow2time.onclick = () => {
 
  gillious.style.display = "block";
  justindiv.style.display = "none";
  console.log("gill");
  dal.style.display = "none";
};
let gillshow3time = document.querySelector("#gillshow3time");
gillshow3time.onclick = () => {
  
  gillious.style.display = "block";
  justindiv.style.display = "none";
  console.log("gill");
  dal.style.display = "none";
};

let dallshow1time = document.querySelector("#dallshow1time");
dallshow1time.onclick = () => {
  
  gillious.style.display = "none";

  justindiv.style.display = "none";

  console.log("dall")
  dal.style.display = "block";
  dallshow1time.style.backgroundColor="red"
  justinshow1.style.backgroundColor="none"
};

let dallshow2time = document.querySelector("#dallshow2time");
dallshow2time.onclick = () => {

  gillious.style.display = "none";
  justindiv.style.display = "none";
  console.log("dall")
  dal.style.display = "block";
  dallshow2time.style.backgroundColor="red"
  justinshow2.style.backgroundColor="none"
};
let dallshow3time = document.querySelector("#dallshow3time");
dallshow3time.onclick = () => {
  gillious.style.display = "none";
 
  dal.style.display = "block";
  justindiv.style.display = "none";

  console.log("dall")
  dal.style.display = "block";
  dallshow3time.style.backgroundColor="red"
  justinshow3.style.backgroundColor="none"
};

let justinshow1 = document.querySelector("#justinshow1time");
justinshow1.onclick = () => {
  gillious.style.display = "none";
 

  console.log("justin");
  dal.style.display = "none";
  justindiv.style.display = "block";

  justinshow3.style.backgroundColor="red"
  dallshow3time.style.backgroundColor="none"
};
let justinshow2 = document.querySelector("#justinshow2time");
justinshow2.onclick = () => {
  gillious.style.display = "none";
 

  console.log("justin");
  dal.style.display = "none";
  justindiv.style.display = "block";

  justinshow3.style.backgroundColor="red"
};
let justinshow3 = document.querySelector("#justinshow3time");
justinshow3.onclick = () => {
  gillious.style.display = "none";


  console.log("justin");
  dal.style.display = "none";
  justindiv.style.display = "block";

  justinshow3.style.backgroundColor="red"
};




let userdatarr=JSON.parse(localStorage.getItem("user"))||[]
let signupbutton=document.querySelector("#signupbutton")
signupbutton.onclick=()=>{

let email=document.querySelector("#email").value
let password=document.querySelector("#password").value


if(password.length>=8&&email.includes("@")){
  
  let userdata={
    email:email,
    password:password
  }

  userdatarr.push(userdata)
  localStorage.setItem("user",JSON.stringify(userdatarr))

  alert("Signup Is Succesful")
}else{
  alert("Password is Too Small Or Please Check Your Email")
}
  
}