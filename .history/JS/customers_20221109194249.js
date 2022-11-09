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
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/1uAlrh0KGiORBrlK8DEgi8/709bd192fd1e622d87696b0825f29a94/Refocus-logo.png",
    des:"How Refocus Closed Deals 2X Faster by Connecting HubSpot with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/5rQOlwAzI5yq3EMDem7ONr/d3e02a4918490b0956e2f6a0a0a2e407/Sendinblue-logo.png",
    des:"Serving 300K Active Users across 180 countries: The 'Sendinblue' Phenomenon"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/6Pnnx8CmE2qE8gYjwrZKLP/983716251828f2eadd01c852f4e764c3/Jeune_Afrique-logo.png",
    des:"How Jeune Afrique Rapidly Expanded to New Geographies With 10X Faster Time-To-Market"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/PqRaNiIAeF1HVRap2kQLr/fedb83c0091fc7a6c7a14d570e6a34ff/Powtoon-logo.png",
    des:"How Chargebee Powered a 63% Save Rate Lift for Powtoon"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/2a3Afd7k1PCGjJZO3w7KS0/81b2958e306d1ec1d05b29148ad34086/TouchNote-logo.png",
    des:"How TouchNote Defended Against Cancellations & Increased Save Rate by 56%"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/7tmqeS4YprL5vB2Dl7au09/9b3c6530fe5a638b9c1feeb1ebdc8647/Drake_Software-logo.png",
    des:"Switching to GAAP and reimagining the revenue recognition process: The Drake Software story"
  },
  {
    
  }
]


