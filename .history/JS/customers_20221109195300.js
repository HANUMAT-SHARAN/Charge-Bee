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

let reviewsdata = [
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/4KQMyH8cjSCpej40xWnVtP/24a9b5586ff08545c627722f44b4a925/ss_logo_blue.svg",
    des: "How SyncSpider made offline and online payments possible for their customers with Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/6yKwwWw5YJV1utZd1s5Csi/64977da12343df28d31b6f4fd5844a28/Let-s_Talk_Interactive-logo.png",
    des: "How Let’s Talk Interactive Unleashed Scale with an Accelerated Quote-to-Cash Cycle",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/1uAlrh0KGiORBrlK8DEgi8/709bd192fd1e622d87696b0825f29a94/Refocus-logo.png",
    des: "How Refocus Closed Deals 2X Faster by Connecting HubSpot with Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/5rQOlwAzI5yq3EMDem7ONr/d3e02a4918490b0956e2f6a0a0a2e407/Sendinblue-logo.png",
    des: "Serving 300K Active Users across 180 countries: The 'Sendinblue' Phenomenon",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/6Pnnx8CmE2qE8gYjwrZKLP/983716251828f2eadd01c852f4e764c3/Jeune_Afrique-logo.png",
    des: "How Jeune Afrique Rapidly Expanded to New Geographies With 10X Faster Time-To-Market",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/PqRaNiIAeF1HVRap2kQLr/fedb83c0091fc7a6c7a14d570e6a34ff/Powtoon-logo.png",
    des: "How Chargebee Powered a 63% Save Rate Lift for Powtoon",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/2a3Afd7k1PCGjJZO3w7KS0/81b2958e306d1ec1d05b29148ad34086/TouchNote-logo.png",
    des: "How TouchNote Defended Against Cancellations & Increased Save Rate by 56%",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/7tmqeS4YprL5vB2Dl7au09/9b3c6530fe5a638b9c1feeb1ebdc8647/Drake_Software-logo.png",
    des: "Switching to GAAP and reimagining the revenue recognition process: The Drake Software story",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/6QGdqstkUp9ay2gi4BKYu7/8f2dec71597399c32dc53c892b891fa4/Unbounce-logo.png",
    des: "A better cancel experience to engage and delight customers at Unbounce",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/3cTmYSA4SnkP8eX6v4wwQv/cc884339d4b83da83338a240a2d77f20/ClickFunnels-logo.png",
    des: "ClickFunnels retains 230% more customers with Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/URPmg8IREgRROn2XGP1e7/2f03fadc22c285a4000fe190724e291c/Vital_Proteins-logo.png",
    des: "How Vital Proteins increased its Save Rate by 2x using Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/2En2xankaFJOuY1AOMFgQb/05216dffdbd6bf534ba1fcb7d6735d1d/Freshly-logo.png",
    des: "How Chargebee’s retention workflow helped Freshly boost revenue projections",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/1guqVnCk6AF398SeSxLHzY/1b7a35e59ec0214c8ca4d1307858f4a2/Kabo-logo.png",
    des: "How Kabo Increased AOV by 25% to Take Their Business Up, Pup, and Away!",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/6EjDOSaydLMcfye4mbYJkE/090d82db5a4055c9bea8f5deb339db26/Konica_Minolta-logo.png",
    des: "How Konica Minolta India increased credit controllers’ coverage by 33% using Chargebee Receivables",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/6SBy6AbEJTiRCFU8azB8zR/d204504a7702c152ff1de9e39b1433b0/TokyoTreat-logo.png",
    des: "How TokyoTreat Built a Snackable, Scalable D2C Subscription Business with Chargebee",
  },
  {
    imgrul:
      "https://images.ctfassets.net/a7hvy8sclsq6/4Vw9YapaAkmNgTpHKNUr6V/73f874eab4e7b508b6e96a6cf63a19ad/download.jpeg",
    des: "Leadinfo scaled globally 3x faster with Chargebee",
  },
  {
    imgrul:"https://images.ctfassets.net/a7hvy8sclsq6/115KJfTy7cOqoxv52EvpeF/1f78746b783fa2e600eb4c8a806a9e35/Study-dot-com-logo.png",
    des:"Study.com scaled painlessly to millions of users and 5 products with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/7mbC3ZQRzMvAPPl9Jip162/ecc92de16ecf387b21831665aa5d2879/Slidebean-logo.png",
    des:"How Chargebee fueled Slidebean’s global expansion to 30+ countries"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/1dgwHDYQBk6goEDt3dc5L6/accafa616f1a246920bb0ce9d167d025/Deliverr_svg.svg",
    des:"I spend less than two hours a week managing accounts receivables"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/6iyYfrd6SI7vbzdXJZLxdp/6cc8b77fee49f8f4ca3e60bf0a43e795/RangeMe-logo.jpeg",
    des:"How RangeMe Reduced Churn and Scaled to 2,000+ Customers"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/2jRCXcODogqymlRLS20jy9/282bcbebc623cd2d54e393858d49a13d/Zenchef-logo.png",
    des:"How Chargebee Untangled Zenchef from Spaghetti Billing and Set Them up for Flexibility at Scale."
  },{}
];
