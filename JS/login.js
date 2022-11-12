let signup=document.querySelector("#signupnow")
signup.onclick=()=>{
    window.location.href="../HTML/signup.html"
}
let logo=document.querySelector("#lhs")
logo.onclick=()=>{
    window.location.href="../index.html"
}

let arr = JSON.parse(localStorage.getItem("userarr"));

let signin = document.getElementById("signin");

signin.onclick = ()=>{

    let user = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    
    

    if(!arr || arr.length <= 0){
        //console.log("hello");
        alert("Please sign up");
        window.location.replace("..//HTML/signup.html");
        return true;
    }

    if( user=='' || pass==''){
        alert("please enter your username and password");
        return false;
    }

    let userFound = arr.find((el, index) => {
        if(el.email == user)
            return true;
    });

    //console.log('userFound',userFound);

    if(userFound){
        if(pass === userFound.password){
            alert("login successful");
            localStorage.setItem("isUserLoggedIN", true);
            window.location.replace("..///index.html")
        }else{
            alert("INCORRECT PASSWORD");
        }
    }else{
        alert("INVALID USER");
        window.location.replace("..//HTML/signup.html");
    }
};