import {
  navbarhtml,
  producthtml,
  solutionshtml,
  resourceshtml,
} from "/Component/navbar.html.js";

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


let reviewsdata=[]


