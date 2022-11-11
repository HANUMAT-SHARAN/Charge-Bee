
import {
  navbarhtml,
  producthtml,
  solutionshtml,
  resourceshtml,
} from "/Component/navbar.js";

// import {
//   navbarhtml,
//   producthtml,
//   solutionshtml,
//   resourceshtml,
// } from "/Component/navbar.js";


let nav = document.querySelector("#navbar");

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

let usd_btn = document.getElementById("usd_btn");
usd_btn.onclick = () => {
  usdconversion();
};


let eur_btn = document.getElementById("eur_btn");
eur_btn.onclick = () => {
  eurconversion();
};

let gbp_btn = document.getElementById("gbp_btn");
gbp_btn.onclick = () => {
  gbpconversion();
};

let aud_btn = document.getElementById("aud_btn");
aud_btn.onclick = () => {
  audconversion();
};

let cad_btn = document.getElementById("cad_btn");
cad_btn.onclick = () => {
  cadconversion();
};

let inr_btn = document.getElementById("inr_btn");
inr_btn.onclick = () => {
  inrconversion();
};

const usdconversion = () => {
  //Launch
  let currency_launch = document.getElementById("currency_launch");
  currency_launch.innerHTML = null;

  let currency_id_launch = document.createElement("h4");
  currency_id_launch.innerText = "USD";

  let month_amount_launch = document.createElement("h2");
  month_amount_launch.innerText = "0/mo";

  let para_launch = document.createElement("p");
  para_launch.innerText =
    "for your first USD 100k in revenue What happens when I hit USD 100k?";

  //Rise
  let currency_rise = document.getElementById("currency_rise");
  currency_rise.innerHTML = null;

  let currency_id_rise = document.createElement("h4");
  currency_id_rise.innerText = "USD";

  let month_amount_rise = document.createElement("h2");
  month_amount_rise.innerText = "249/mo";

  let para_rise = document.createElement("p");
  para_rise.innerText = "includes USD 600K/yr revenue 0.6% of overage revenue";

  //Scale
  let currency_scale = document.getElementById("currency_scale");
  currency_scale.innerHTML = null;

  let currency_id_scale = document.createElement("h4");
  currency_id_scale.innerText = "USD";

  let month_amount_scale = document.createElement("h2");
  month_amount_scale.innerText = "549/mo";

  let para_scale = document.createElement("p");
  para_scale.innerText =
    "includes USD 1.2M/yr revenue 0.75% of overage revenue";

  currency_launch.append(currency_id_launch, month_amount_launch, para_launch);
  currency_rise.append(currency_id_rise, month_amount_rise, para_rise);
  currency_scale.append(currency_id_scale, month_amount_scale, para_scale);
};

const eurconversion = () => {
  //Launch
  let currency_launch = document.getElementById("currency_launch");
  currency_launch.innerHTML = null;

  let currency_id_launch = document.createElement("h4");
  currency_id_launch.innerText = "EUR";

  let month_amount_launch = document.createElement("h2");
  month_amount_launch.innerText = "0/mo";

  let para_launch = document.createElement("p");
  para_launch.innerText =
    "for your first EUR 90k in revenue What happens when I hit EUR 90k?";

  //Rise
  let currency_rise = document.getElementById("currency_rise");
  currency_rise.innerHTML = null;

  let currency_id_rise = document.createElement("h4");
  currency_id_rise.innerText = "EUR";

  let month_amount_rise = document.createElement("h2");
  month_amount_rise.innerText = "249/mo";

  let para_rise = document.createElement("p");
  para_rise.innerText = "includes EUR 600K/yr revenue 0.6% of overage revenue";

  //Scale
  let currency_scale = document.getElementById("currency_scale");
  currency_scale.innerHTML = null;

  let currency_id_scale = document.createElement("h4");
  currency_id_scale.innerText = "EUR";

  let month_amount_scale = document.createElement("h2");
  month_amount_scale.innerText = "549/mo";

  let para_scale = document.createElement("p");
  para_scale.innerText =
    "includes EUR 1.2M/yr revenue 0.75% of overage revenue";

  currency_launch.append(currency_id_launch, month_amount_launch, para_launch);
  currency_rise.append(currency_id_rise, month_amount_rise, para_rise);
  currency_scale.append(currency_id_scale, month_amount_scale, para_scale);
};

const gbpconversion = () => {
  //Launch
  let currency_launch = document.getElementById("currency_launch");
  currency_launch.innerHTML = null;

  let currency_id_launch = document.createElement("h4");
  currency_id_launch.innerText = "GBP";

  let month_amount_launch = document.createElement("h2");
  month_amount_launch.innerText = "0/mo";

  let para_launch = document.createElement("p");
  para_launch.innerText =
    "for your first GBP 80k in revenue What happens when I hit GBP 80k?";

  //Rise
  let currency_rise = document.getElementById("currency_rise");
  currency_rise.innerHTML = null;

  let currency_id_rise = document.createElement("h4");
  currency_id_rise.innerText = "GBP";

  let month_amount_rise = document.createElement("h2");
  month_amount_rise.innerText = "199/mo";

  let para_rise = document.createElement("p");
  para_rise.innerText = "includes GBP 480K/yr revenue 0.6% of overage revenue";

  //Scale
  let currency_scale = document.getElementById("currency_scale");
  currency_scale.innerHTML = null;

  let currency_id_scale = document.createElement("h4");
  currency_id_scale.innerText = "GBP";

  let month_amount_scale = document.createElement("h2");
  month_amount_scale.innerText = "379/mo";

  let para_scale = document.createElement("p");
  para_scale.innerText =
    "includes GBP 960K/yr revenue 0.75% of overage revenue";

  currency_launch.append(currency_id_launch, month_amount_launch, para_launch);
  currency_rise.append(currency_id_rise, month_amount_rise, para_rise);
  currency_scale.append(currency_id_scale, month_amount_scale, para_scale);
};

const audconversion = () => {
  //Launch
  let currency_launch = document.getElementById("currency_launch");
  currency_launch.innerHTML = null;

  let currency_id_launch = document.createElement("h4");
  currency_id_launch.innerText = "AUD";

  let month_amount_launch = document.createElement("h2");
  month_amount_launch.innerText = "0/mo";

  let para_launch = document.createElement("p");
  para_launch.innerText =
    "for your first AUD 140k in revenue What happens when I hit AUD 140k?";

  //Rise
  let currency_rise = document.getElementById("currency_rise");
  currency_rise.innerHTML = null;

  let currency_id_rise = document.createElement("h4");
  currency_id_rise.innerText = "AUD";

  let month_amount_rise = document.createElement("h2");
  month_amount_rise.innerText = "359/mo";

  let para_rise = document.createElement("p");
  para_rise.innerText = "includes AUD 840K/yr revenue 0.6% of overage revenue";

  //Scale
  let currency_scale = document.getElementById("currency_scale");
  currency_scale.innerHTML = null;

  let currency_id_scale = document.createElement("h4");
  currency_id_scale.innerText = "AUD";

  let month_amount_scale = document.createElement("h2");
  month_amount_scale.innerText = "729/mo";

  let para_scale = document.createElement("p");
  para_scale.innerText =
    "includes AUD 1.56M/yr revenue 0.75% of overage revenue";

  currency_launch.append(currency_id_launch, month_amount_launch, para_launch);
  currency_rise.append(currency_id_rise, month_amount_rise, para_rise);
  currency_scale.append(currency_id_scale, month_amount_scale, para_scale);
};

const cadconversion = () => {
  //Launch
  let currency_launch = document.getElementById("currency_launch");
  currency_launch.innerHTML = null;

  let currency_id_launch = document.createElement("h4");
  currency_id_launch.innerText = "CAD";

  let month_amount_launch = document.createElement("h2");
  month_amount_launch.innerText = "0/mo";

  let para_launch = document.createElement("p");
  para_launch.innerText =
    "for your first CAD 130k in revenue What happens when I hit CAD 130k?";

  //Rise
  let currency_rise = document.getElementById("currency_rise");
  currency_rise.innerHTML = null;

  let currency_id_rise = document.createElement("h4");
  currency_id_rise.innerText = "CAD";

  let month_amount_rise = document.createElement("h2");
  month_amount_rise.innerText = "329/mo";

  let para_rise = document.createElement("p");
  para_rise.innerText = "includes CAD 720K/yr revenue 0.6% of overage revenue";

  //Scale
  let currency_scale = document.getElementById("currency_scale");
  currency_scale.innerHTML = null;

  let currency_id_scale = document.createElement("h4");
  currency_id_scale.innerText = "AUD";

  let month_amount_scale = document.createElement("h2");
  month_amount_scale.innerText = "599/mo";

  let para_scale = document.createElement("p");
  para_scale.innerText =
    "includes CAD 1.56M/yr revenue 0.75% of overage revenue";

  currency_launch.append(currency_id_launch, month_amount_launch, para_launch);
  currency_rise.append(currency_id_rise, month_amount_rise, para_rise);
  currency_scale.append(currency_id_scale, month_amount_scale, para_scale);
};

const inrconversion = () => {
  //Launch
  let currency_launch = document.getElementById("currency_launch");
  currency_launch.innerHTML = null;

  let currency_id_launch = document.createElement("h4");
  currency_id_launch.innerText = "INR";

  let month_amount_launch = document.createElement("h2");
  month_amount_launch.innerText = "0/mo";

  let para_launch = document.createElement("p");
  para_launch.innerText =
    "for your first INR 80L in revenue What happens when I hit INR 80L?";

  //Rise
  let currency_rise = document.getElementById("currency_rise");
  currency_rise.innerHTML = null;

  let currency_id_rise = document.createElement("h4");
  currency_id_rise.innerText = "INR";

  let month_amount_rise = document.createElement("h2");
  month_amount_rise.innerText = "19915/mo";

  let para_rise = document.createElement("p");
  para_rise.innerText =
    "includes INR 4.8 Crores/yr revenue 0.6% of overage revenue";

  //Scale
  let currency_scale = document.getElementById("currency_scale");
  currency_scale.innerHTML = null;

  let currency_id_scale = document.createElement("h4");
  currency_id_scale.innerText = "INR";

  let month_amount_scale = document.createElement("h2");
  month_amount_scale.innerText = "43915/mo";

  let para_scale = document.createElement("p");
  para_scale.innerText =
    "includes INR 9.6 Crores/yr revenue 0.75% of overage revenue";

  currency_launch.append(currency_id_launch, month_amount_launch, para_launch);
  currency_rise.append(currency_id_rise, month_amount_rise, para_rise);
  currency_scale.append(currency_id_scale, month_amount_scale, para_scale);
};
