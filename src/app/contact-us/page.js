import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  return (
    <div>
      <Navbar selectedItem="Contact Us" />

      <div className="heroSection ">
        <div className="conatctBg" >
<div className="container">
          <div className="">
            <h2>Contact Us</h2>
            <h5 className="contactSubHeading">Get in Touch</h5>
          </div>
          <div className="row my-5 pb-4">
            <div className="col-4">
              <div className="contactCard bgDarkContactCard">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="/locationIcon.png" />
                  </div>
                  <div className="ms-2">
                    <p>Our Address</p>
                    <h5>Toronto, On</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="contactCard bgDarkContactCard">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="/messageIcon.png" />
                  </div>
                  <div className="ms-2">
                    <p>Email</p>
                    <h5>Info@mieride.ca</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="contactCard bgDarkContactCard">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="/phoneIcon.png" />
                  </div>
                  <div className="ms-2">
                    <p>Phone</p>
                    <h5>+1 (416) 827-0039</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-7">
              <div className="contactForm">
                <div className="inputDiv">
                  <input className="" placeholder="Your Name" />
                </div>
                <div className="inputDiv">
                  <input className="" placeholder="Your Email" />
                </div>
                <div className="inputDiv">
                  <input className="" placeholder="Subject" />
                </div>
                <div className="inputDiv">
                  <input className="" placeholder="Message" />
                </div>
                <button className="mt-4">Send</button>
              </div>
            </div>
            <div className="col-5 my-auto contactContent ps-5">
              <h6>Have any Query</h6>
              <h4 className="mb-5 mt-4">CONTACT US</h4>
              <p className="font700">Need help?</p>
              <p>
                Our friendly team is available 24/7 to assist with bookings,
                inquiries, or feedback
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
