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

  let resources = document.querySelector("#resources");
  window.onmouseover = () => {
    // nav.style.position="fixed"
  };

  prohover.onmouseover = () => {
    pro.style.display = "block";
    pro.style.transition = "0.10ms";
    pro.style.display = "grid";
  };
  prices.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
  };
  partner.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
  };
  customers.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
  };
  pro.onmouseover = () => {
    pro.style.display = "block";
    pro.style.transition = "0.10ms";
    pro.style.display = "grid";
  };
  pro.onmouseout = () => {
    pro.style.display = "none";
  };
  logo.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
    resources.style.display = "none";
  };

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

  res.onmouseover = () => {
    resources.style.display = "block";
    resources.style.transition = "0.10ms";
    resources.style.display = "grid";
  };
  resources.onmouseover = () => {
    resources.style.display = "block";
    resources.style.transition = "0.10ms";
    resources.style.display = "grid";
  };

  resources.onmouseout = () => {
    resources.style.display = "none";
  };
};

export { navbarscript };
