import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Faqs() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container py-3">
        <h1 className="border-bottom py-3 my-3 text-center">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-12 col-md-4 mb-3">
            <div
              id="list-example"
              className="list-group shadow-sm sticky-top"
              style={{ top: "20px", zIndex: "1" }}
            >
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                How does Steadofoods work?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                What areas do you serve?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                How can I track my order?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Can I customize my order?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-5"
              >
                What payment methods do you accept?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-6"
              >
                How do I create an account?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-7"
              >
                What should I do if there's an issue with my order?
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-8"
              >
                How can I become a partner restaurant with Steadofoods?
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example shadow-lg p-4 rounded bg-light"
              tabIndex="0"
            >
              <h4 id="list-item-1">How does Steadofoods work?</h4>
              <p>
                Steadofoods is a user-friendly online platform that connects you
                with a wide variety of restaurants and eateries. Simply browse
                our website or mobile app, choose your favorite dishes, add them
                to your cart, and proceed to checkout. Our seamless ordering
                process ensures a hassle-free experience, allowing you to enjoy
                your favorite meals in no time.
              </p>
              <h4 id="list-item-2">What areas do you serve?</h4>
              <p>
                We currently serve [list of cities/areas]. If you're unsure
                whether we deliver to your location, enter your address on our
                homepage or app, and we'll let you know if Steadofoods is
                available in your area.
              </p>
              <h4 id="list-item-3">How can I track my order?</h4>
              <p>
                Once you've placed an order, you can track its status in
                real-time through our website or mobile app. We provide regular
                updates on the preparation, dispatch, and estimated delivery
                time of your order. Additionally, you'll receive notifications
                to keep you informed every step of the way.
              </p>
              <h4 id="list-item-4">Can I customize my order?</h4>
              <p>
                Absolutely! Many of our partner restaurants offer customization
                options for their dishes. You can specify any special requests
                or modifications when placing your order. Please note that
                certain changes may be subject to availability and additional
                charges.
              </p>
              <h4 id="list-item-5">What payment methods do you accept?</h4>
              <p>
                We accept various payment methods, including credit/debit cards
                and mobile wallets. Our secure payment gateway ensures that your
                transactions are safe and convenient.
              </p>
              <h4 id="list-item-6">How do I create an account?</h4>
              <p>
                To create an account on Steadofoods, click on the "Sign Up" or
                "Register" button on our homepage. Fill in the required
                information, including your name, email address, and password.
                Once registered, you can save your favorite restaurants, track
                orders, and enjoy a personalized experience.
              </p>
              <h4 id="list-item-7">
                What should I do if there's an issue with my order?
              </h4>
              <p>
                If you encounter any issues with your order, such as missing
                items or delays, please contact our customer support team
                immediately. You can reach us through the "Contact Us" page on
                our website or app. We are dedicated to resolving any concerns
                and ensuring your satisfaction.
              </p>
              <h4 id="list-item-8">
                How can I become a partner restaurant with Steadofoods?
              </h4>
              <p>
                If you own or manage a restaurant and are interested in
                partnering with Steadofoods, please visit our "Partner with Us"
                page for more information. We welcome collaborations with
                establishments that share our commitment to quality and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
        <h3 className="border-top py-3 my-3 text-center">
          Tailor this content to reflect the details and policies of your food
          ordering platform.
        </h3>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
