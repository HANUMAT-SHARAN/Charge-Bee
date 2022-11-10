import {
  navbarhtml,
  producthtml,
  solutionshtml,
  resourceshtml,
} from "/Component/navbar.js";

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
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/4Vw9YapaAkmNgTpHKNUr6V/73f874eab4e7b508b6e96a6cf63a19ad/download.jpeg",
    des: "Leadinfo scaled globally 3x faster with Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/115KJfTy7cOqoxv52EvpeF/1f78746b783fa2e600eb4c8a806a9e35/Study-dot-com-logo.png",
    des: "Study.com scaled painlessly to millions of users and 5 products with Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/7mbC3ZQRzMvAPPl9Jip162/ecc92de16ecf387b21831665aa5d2879/Slidebean-logo.png",
    des: "How Chargebee fueled Slidebean’s global expansion to 30+ countries",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/1dgwHDYQBk6goEDt3dc5L6/accafa616f1a246920bb0ce9d167d025/Deliverr_svg.svg",
    des: "I spend less than two hours a week managing accounts receivables",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/6iyYfrd6SI7vbzdXJZLxdp/6cc8b77fee49f8f4ca3e60bf0a43e795/RangeMe-logo.jpeg",
    des: "How RangeMe Reduced Churn and Scaled to 2,000+ Customers",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/2jRCXcODogqymlRLS20jy9/282bcbebc623cd2d54e393858d49a13d/Zenchef-logo.png",
    des: "How Chargebee Untangled Zenchef from Spaghetti Billing and Set Them up for Flexibility at Scale.",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/69VgNoqWVJCPX4Moj5zYHF/cfc6938ecf0bd88cbf271d4983b7bfcc/Livestorm-logo.png",
    des: "How Chargebee Cut Down Livestorm’s Support Time by Half",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/4of1bxaJrX68ipTZapjq2X/299cf0922731602286cc8ee87cfde96d/Freedom-logo.png",
    des: "How Freedom improved conversions by 33% with a stellar billing experience, using Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/1CuJbolhOOZQYSI7CyItlK/6592796c15f7b15a575a2acdbd6e69b7/codacy.svg",
    des: "How Codacy Automated Nearly 90% of Their Revenue Recognition Tasks with Chargebee RevRec",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/2Fi8riH5IgVX4alX01PxSx/01133d776df40d330b7765f632b30e4e/Whiteboard_CRM-logo.png",
    des: "How Whiteboard reduced Churn by 100% using Chargebee",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/mWTkQj5XaaL1IVb5ENzDT/b28859b1e219b6d501218a2c1ceaac3d/fishburners.png",
    des: "How Fishburners saves 105 hours/month of manual accounting with Chargebee & Xero",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/0RVVAtHwZmF6BsY2y8Dhm/7e326ea058824bbe910878ce44cebfb3/Proxyclick-logo.jpeg",
    des: "How Proxyclick Scaled to Newer Territories with Optimized Subscription and Revenue Operations",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/7LF6W9atss01PwHWml0pZQ/948428b5fd063a72022dad73a6001ebb/GetAccept-logo.png",
    des: "How GetAccept grew their revenue 4x in 12 months",
  },
  {
    imgurl:
      "https://images.ctfassets.net/a7hvy8sclsq6/nIhhI2E9kNzLY7wCyJNkp/eca813b5d5f9698beab8db5bad434799/Jiobit-logo.png",
    des: "How Jiobit scaled and monetized its IoT Subscriptions using Chargebee",
  },
  {
    imgurl: "https://images.ctfassets.net/a7hvy8sclsq6/4a5UJTIKQqN2gFGwZQLLX0/4e99443bd92a2e889f72eb8673ff420d/AX_Semantics-logo.png",
    des:"How AX Semantics improved cross-functional performance by tracking Customer LTV on RevenueStory"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/5xBuFa17XBobR62DEX3QdV/2e4a2b71fd36d57dc8066d6203c63906/Voxloud-logo.png",
    des:"How Italy-based Voxloud Conquered Compliance with Mandatory B2B e-invoicing, using Chargebee"

  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/7esCDhih3oO653VejGUGW8/362400efb20f9a733a2ceb51b2867f81/BitGym-logo.png",
    des:"How BitGym Grew, with an 80% Boost in Productivity, using Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/2EJFWsboqeonvu4f7tuj5n/8851da2c848df47ecf9583133ed8405e/ScreenCloud-logo.png",
    des:"How ScreenCloud course-corrected their churn with critical SaaS Quick Ratio, using RevenueStory"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/SF5OtvI5F7PeWYUhYwot8/9537c6ba98149ba642806e47fbec5a7a/HelloHQ-logo.svg",
    des:"How HQLabs built a Zapier Automation for Efficient Affiliate Management, using Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/47dIZZC3IwHPIPY2MdQ82F/dd2f19e6ff999fabe3df19db15ca4d9c/Screencastify-logo_1.png",
    des:"How Screencastify scaled to support millions of users and augmented their revenue on autopilot, using Chargebee"

  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/3OucyY8d2ngAW8Q7sdvYHI/b58e60613c56ecf632d49f51438df745/animalz.svg",
    des:"How Animalz streamlined their Account Receivables at a cost of less than 1% of their annual recurring revenue, using Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/1rgMg5hO4J2jzXF1jeynIB/9ba804a7152ae01d0a74aad08f23d00d/Harvestr-logo.png",
    des:"How Harvestr witnessed a growth of 15% on their MRR, with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/4wUzcJjtMtWynzGvIGgZFx/e6cb2af2b7dc3177b380f82253a250b5/Drawboard-logo.png",
    des:"How Australia-based Drawboard expanded globally to new markets using Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/2eQrZVwX3w7n0Pyv6mSdCQ/cab8a96255b56bdb31bc574a803c904c/Doctify-logo.png",
    des:"How Doctify streamlined their Revenue Operations to increase efficiency, with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/VdpN4i6f8CMw9aydKycL0/a572d1045b3dfbd1f549eddbf6c90e6d/Circleloop-logo.png",
    des:"How CircleLoop Aligned their Sales and Operations Seamlessly To Automate Revenue Operations, with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/1zRCZ2TPHZkHSbFD7xIycf/6452a3f4a8f340ca4130cc663e2121e3/LiveSession-logo.png",
    des:"How LiveSession grew 7x over 6 months, using Chargebee's Freemium offering"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/2icsjRJPg6DAb56wMkPkKU/c8f85e73bf8f619e29aecdbf1a689228/RiseVision-logo.png",
    des:"How Rise Vision saved 50% time reconciling numbers with their monthly financials, with RevenueStory"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/7iQ41V7b3lbbS1LsoLWspH/d04d9d8e5f404ac642440acfbd42af27/Userlane-logo.png",
    des:"How Userlane closed their month-end financials in 80% less time, with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/3vVpZapF6KUhSZpVrTFOi8/9a01d86121df6285a0a76b49f9343102/Upcodes-logo.png",
    des:"How YC-backed UpCodes simplified their subscription billing operations to scale exponentially, with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/4jOTww6xNnx4WbdsGWzcdg/b7829bb943a59dc2be073ed78b109d65/Sisu-logo.png",
    des:"How Sisu Built An Efficient Sales Engine, with Chargebee and Salesforce"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/3Gt3FWIAaRSyQobBcarhue/aee7f657d5abc9e64cc03762188edc74/A_Cloud_Guru-logo.png",
    des:"How Australia-based A Cloud Guru Scaled their Subscription Model, with Chargebee"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/34QUCzBOmZmc6kgYjbagQZ/3c012991858c0da5b65130efdc7abc6d/Coorpacademy-logo.png",
    des:"How the Sales Team at Coorpacademy Spent 50% Less Time on Non-selling Tasks after Using Chargebee + Salesforce"
  },
  {
    imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/4RNod1mBFaCBnmoZuPXbAL/ad72010ca0353082abee2812b0209cc6/Instaply-logo.svg",
    des:"How Process Automation Enabled Instaply to Scale and Set Foot in Europe"
  },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/63O2SU6yAjw7kXSCv9PLAh/7e588031699fe2169eb3bdaeb3bd21a6/MakeSpace-logo.jpeg",
  des:"Scaling from 4 to 31 Different Markets in a Year: The MakeSpace Story"
 },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/y56f61jyTUxq1L5AHpZmm/0e1c954ccf5581279c4b10aa1b04f2bf/Yousign-logo.png",
  des:"How Europe-based Yousign Handled Hyper-growth During COVID, with Chargebee"
 },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/6IdFgQXsO6mVffxYLktUMN/8bdaa88a1e496b139e8a3f6629a2ac06/Superfoods_comapny-logo.png",
  des:"4x Growth in Revenue in 12 Months - the Incredible Growth Story of Superfoods Company"
 },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/3hnLtoJqh6gaWdRj4sEswe/7a295ddcd9852378fba68a96effde985/Trusted_Tech_Team-logo.png",
  des:"Doubling Revenue Projections, Maintaining a Churn Rate of less than 1% Trusted Tech Team's Winning Strategy"
 },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/3NVHKieAYSSjbTvtbcV634/82ae79af6441122be590bfa0faa76bbc/Rented-logo.png",
  des:"How Rented Uses Chargebee to Reduce Churn, Forecast Better, and Drive Customer Loyalty"
 },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/7cChmki9WK9OUcCVcHaS5w/6b5cd66b61f6245a49b838a1997ac5a2/Web_Shop_Manager-logo.png",
  des:"Challenging the Status Quo: Web Shop Manager Improved Their Productivity by 50% Using Chargebee, Compared to Zuora"
 },
 {
  imgurl:"https://images.ctfassets.net/a7hvy8sclsq6/3Nx4ppTupWqsAo5iIFNuIE/5684253de8ce1704cd1e54df2c325b1d/Trade_Ideas-logo.png",
  des:"How Trade Ideas Generated 4X Revenue for Every Dollar Spent on Chargebee"
 },
 {
  imgurl:"data:image/png;base64,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",
  des:"How Doodle scaled globally after moving from a monolithic architecture to subscriptions model, with Chargebee"
 },
 {
  imgurl:"https://webstatic.chargebee.com/assets/web/535/images/case-study/hoxtonmix-logo.png",
  des:"How Hoxton Mix saves 60 developer hours per month with Chargebee"
 },
 {
  imgurl:"https://webstatic.chargebee.com/assets/web/535/images/customers/logos/sharetribe.svg",
  des:"How Sharetribe helps more businesses iterate faster, with Chargebee"
 },
 {
  imgurl:"https://webstatic.chargebee.com/assets/web/535/images/customers/logos/vinylmeplease-new.png",
  des:"How Vinyl Me, Please is making music purists happy, with Chargebee."
 },
 {
  imgurl:"https://webstatic.chargebee.com/assets/web/535/images/customers/logos/guava-pass.png",
  des:"How GuavaPass helps more people get fitter, with Chargebee"
 },
 {
  imgurl:"https://webstatic.chargebee.com/assets/web/535/images/customers/logos/freshdesk.png",
  des:"From 500 to 80,000 Customers: How Freshdesk Unlocked Massive Scale"
 }


];
console.log(reviewsdata.length)

let rev=document.querySelector("#reviews")

const append=()=>{

  reviewsdata.forEach(({imgurl,des},index,arr)=>{
    let div=document.createElement("div")

    let img=document.createElement("img")
    img.src=imgurl

    let h2des=document.createElement("h2")
    h2des.innerText=des

    div.append(img,h2des)

    rev.append(div)
    console.log(1)


  })

}

append()