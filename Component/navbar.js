const navbarhtml = () => {
  return `<div>
    <img id="logo" src="https://i.ibb.co/z8Z7WjF/POWER-B.png" alt="logo" />
    <div id="prohover"><h3>Product</h3></div>
    <div id="prices"><h3>Pricing</h3></div>
    <div id="sol"><h3>Solutions</h3></div>
    <div id="customers"><h3>Customers</h3></div>
    <div id="res"> <h3>Resources</h3></div>
    <div id="partner"><h3>Partners</h3></div>
  </div>

  <div>
    <h3>
      <img
        id="globe"
        src="https://cdn1.iconfinder.com/data/icons/approval-red/64/INTERNET-check_sign-approved-globe-done-64.png"
        alt=""
      />
      English
    </h3>
    <h3>
      <img
        id="lock"
        src="https://cdn0.iconfinder.com/data/icons/security-double-color-red-and-black-vol-3/53/security__lock__private__protect-64.png"
        alt=""
      />
      Login
    </h3>
    <h3><button id="getdemo">Get a Demo></button></h3>
  </div>`;
};

const producthtml = () => {
  return `<div>
    <h3>Subscription Management</h3>
    <h4>Overview</h4>
    <h4>Create & Manage Plans</h4>
    <h4>Entiltements</h4>
    <h4>Pricing Management</h4>
    <h4>Handle Trial Subscriptions</h4>
    <h4>Customer Self-service Portal</h4>
    <h4>Mobile Solutions</h4>
  </div>
  <div>
    <h3>Billing Automation</h3>
    <h4>Overview</h4>
    <h4>Usage Based Billing</h4>
    <h4>Invoicing Automation</h4>
    <h4>Quotes</h4>
    <h4>Proration</h4>
  </div>
  <div>
    <h3>Recurring Payments</h3>
    <h4>Overview</h4>
    <h4>Multiple Payment Methods</h4>
    <h4>Multiple Payment Gateways</h4>
    <h4>Smart Dunning</h4>
    <h4>Chargeback Management</h4>
    <h4>Checkout Experience</h4>
    <h4>Receivables</h4>
  </div>
  <div>
    <h3>Accounting & Taxes</h3>

    <h4>Overview</h4>
    <h4>Revenue Recognition</h4>
    <h4>Manage Sales Tax</h4>
    <h4>One-Click Reconciliation</h4>
    <h3>Reporting & Analytics</h3>
    <h4>Overview</h4>
    <h4>Deferred Revenue Reporting</h4>
  </div>
  <div>
    <h3>Customer Retention</h3>
    <h4>Tackle churn</h4>
    <h4>Retention Toolbox</h4>
    <h4>Billing + Retention</h4>
  </div>
  <div id="second">
    <h4>Supports:</h4>
    <h4>Preferred Partners</h4>
    <h4>
      Stripe, Paypal, Braintree, Checkout.com, GoCardless, and 27 other
      payment gateways.
    </h4>
    <h4>
      Seamless integration with Xero, QuickBooks, Zendesk, Salesforce + 18
      more.
    </h4>
    <h4>Explore all features</h4>
  </div>`;
};
const solutionshtml = () => {
  return `<div>
    <h3>By Role</h3>
    <h4>Finance</h4>
    <h4>Sales</h4>
    <h4>RevOps</h4>
  </div>
  <div>
    <h3>By Industry</h3>
    <h4>B2B SaaS</h4>
    <h4>eCommerce</h4>
    <h4>E-learning</h4>
    <h4>Publishing</h4>
    <h4>Video & OTT</h4>
  </div>
  <div>
    <h3>By Strategy</h3>
    <h4>Roll Out New Pricing</h4>
    <h4>Expand Globally</h4>
    <h4>Move Upmarket</h4>
    <h4>Shift to Subscriptions</h4>
  </div>
  <div>
    <h3>By Business Size</h3>
    <h4>Startup</h4>
    <h4>ScaleUp</h4>
    <h4>Enterprise</h4>
  </div>
  <div>
    <h3>By Business Model</h3>
    <h4>Self-serve</h4>
    <h4>Sales-driven</h4>
  </div>
  <div>
    <h3>By Geography</h3>
    <h4>Europe</h4>
    <h4>Australia</h4>
    <h4>India</h4>
  </div>
  <div></div>`;
};

const resourceshtml = () => {
  return ` <div>


    <h4> Learn everything that falls under the umbrella of subscriptions.</h4>
    <h3> Learning Hub</h3>


   </div>
   <div>
    <h4> Chargebee's in-house team of implementation experts is here to make sure you go live with your Chargebee site at lightning-fast speed.</h4>
<h3>Professional Services & Implementation</h3>
   </div>
   <div>
    <h4> Explore the best practices of all things SaaS and Subscription Billing.</h4>
<h3>Webinars</h3>
   </div>
   <div>
     <h4>Read our ever-growing stories on SaaS, and get all the growth insights you need.</h4>
<h3>Chargebee Blog</h3>
   </div>
   <div>
     <h4>        Learn to unlock all revenue secrets to secure hyper-growth for your business. Access free certifications, courses, and expert masterclasses.
     </h4>
<h3>Subscription Academy</h3>
   </div>
   <div>
    <h4> Learn about the possibilities that change brings about and how Chargebee recognizes & celebrates change-makers by being an enabler of change.</h4>
<h3>Champions of Change</h3>
   </div>
   <div>
    <h4> A quick overview of Chargebee to help you understand and implement it.
     </h4>
     <h3>Chargebee Docs</h3>
   </div>
   <div>
     <h4>Learn what top industry analyst firms are saying about Chargebee.</h4>
<h3>Industry Reports</h3>
   </div>
   <div>
    <h4> Gartner Peer Insights helps enterprise end-users make better software decisions. See what enterprises are saying about Chargebee.</h4>
<h3>Gartner Peer Reviews</h3>
   </div>`;
};

export { navbarhtml, producthtml, solutionshtml, resourceshtml };
