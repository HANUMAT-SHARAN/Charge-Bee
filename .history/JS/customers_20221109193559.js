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


let reviewsdata=[
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/4KQMyH8cjSCpej40xWnVtP/24a9b5586ff08545c627722f44b4a925/ss_logo_blue.svg",
    des:"How SyncSpider made offline and online payments possible for their customers with Chargebee"
  }
]


