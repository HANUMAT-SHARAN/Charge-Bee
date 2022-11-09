const navbarscript = () => {
  let prohover = document.querySelector("#prohover");
  let pro = document.querySelector("#product");
  let prices = document.querySelector("#prices");
  let solutions = document.querySelector("#solutions");
  let sol = document.querySelector("#sol");
  let customers = document.querySelector("#customers");
  let res = document.querySelector("#res");
  let partner = document.querySelector("#partner");
  let logo = document.querySelector("#logo");
  let banner = document.querySelector("#banner");

  let resources = document.querySelector("#resources");
  window.onmouseover = () => {
    // nav.style.position="fixed"
  };
window.onscrollup=()=>{
  
}
  prohover.onmouseover = () => {
    pro.style.display = "block";
    pro.style.transition = "0.10ms";
    pro.style.display = "grid";
    banner.style.display = "none";
  };
  prices.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
    banner.style.display = "block";
  };
  partner.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
    banner.style.display = "block";
  };
  customers.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
    banner.style.display = "block";
  };
  pro.onmouseover = () => {
    pro.style.display = "block";
    pro.style.transition = "0.10ms";
    pro.style.display = "grid";
    banner.style.display = "none";
  };
  pro.onmouseout = () => {
    pro.style.display = "none";
    banner.style.display = "block";
  };
  logo.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
    banner.style.display = "block";
  };

  sol.onmouseover = () => {
    console.log(1);
    solutions.style.display = "block";
    solutions.style.transition = "0.10ms";
    solutions.style.display = "grid";
    banner.style.display = "none";
  };
  solutions.onmouseover = () => {
    solutions.style.display = "block";
    solutions.style.transition = "0.10ms";
    solutions.style.display = "grid";
    banner.style.display = "none";
  };

  solutions.onmouseout = () => {
    solutions.style.display = "none";
    banner.style.display = "block";
  };

  res.onmouseover = () => {
    resources.style.display = "block";
    resources.style.transition = "0.10ms";
    resources.style.display = "grid";
    banner.style.display = "none";
  };
  resources.onmouseover = () => {
    resources.style.display = "block";
    resources.style.transition = "0.10ms";
    resources.style.display = "grid";
    banner.style.display = "none";
  };

  resources.onmouseout = () => {
    resources.style.display = "none";
    banner.style.display = "block";
  };
};

export { navbarscript };
