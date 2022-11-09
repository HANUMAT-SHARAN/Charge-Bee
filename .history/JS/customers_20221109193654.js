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
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/6yKwwWw5YJV1utZd1s5Csi/64977da12343df28d31b6f4fd5844a28/Let-s_Talk_Interactive-logo.png",
    des:"How Let’s Talk Interactive Unleashed Scale with an Accelerated Quote-to-Cash Cycle"
  },
  
]


