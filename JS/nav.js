let prohover = document.querySelector("#prohover");
let pro = document.querySelector("#product");
let prices = document.querySelector("#prices");
let solutions = document.querySelector("#solutions");
let sol = document.querySelector("#sol");
let customers = document.querySelector("#customers");
prohover.onmouseover = () => {
  pro.style.display = "block";
  pro.style.transition = "0.10ms";
  pro.style.display = "grid";
};
prices.onmouseover = () => {
  pro.style.display = "none";
  solutions.style.display = "none";
};
customers.onmouseover = () => {
    pro.style.display = "none";
    solutions.style.display = "none";
  };
pro.onmouseover = () => {
  pro.style.display = "block";
  pro.style.transition = "0.10ms";
  pro.style.display = "grid";
};
pro.onmouseout = () => {
  pro.style.display = "none";
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
