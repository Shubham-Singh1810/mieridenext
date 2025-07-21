"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  const navItems = [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Carrer",
      path: "/carrer",
    },
    {
      name: "Our Services",
      path: "/our-services",
    },
    {
      name: "Partner with Us",
      path: "/partner-with-us",
    },
    {
      name: "Why Us",
      path: "/why-us",
    },
    {
      name: "Terms & Condition",
      path: "/terms-condition",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Advertise with Us",
      path: "/advertise-with-us",
    },

    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div>
      <div className="footerUpper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img
                src="/footerLogo.png"
                className="img-fluid "
              />
              <div className="row footerNavMain my-4">
                {navItems?.map((v, i) => {
                  return (
                    <div className="col-6">
                      <Link
                      key={i}
                      href={v.path}
                      passHref
                      style={{ textDecoration: "none" }}
                    >
                      <p>{v.name}</p>
                    </Link>
                    </div>
                  );
                })}
              </div>
              <div className="d-md-flex d-none socialIcons">
                <img src="/youtubeIcon.png"/>
                <img src="/tiktokIcon.png"/>
                <img src="/facebookIcon.png"/>
                <img src="/instagramIcon.png"/>
                <img src="/linkedin.png"/>
                <img src="/xIcon.png"/>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="scannerCard mb-4">
                <div className="row m-0 d-flex justify-content-between align-items-center">
                  <div className="col-md-6 col-8 px-0 my-auto ">
                    <p className="mb-0">Set your hours, earn your way. Join Mie Ride Drivers and be part of a growing rideshare community.</p>
                  </div>
                  <div className="col-md-6 col-4 row m-0 p-0">
                    <div className="col-md-6 col-12 d-flex justify-content-end">
                    <div className="scannerImage">
                      <img src="/scanImage.png" className="img-fluid"/>
                    </div>
                    
                  </div>
                  <div className="col-md-6 col-12 px-0 footerBtnGroup d-none d-md-block">
                    <img src="/androidDownload.png" className="mb-2 "/>
                    <img src="/iosDownload.png" className=""/>
                  </div>
                  </div>
                  <div className="col-md-6 col-12 px-0 footerBtnGroup d-flex d-md-none justify-content-between mt-3">
                    <img src="/androidDownload.png" className="mb-2 "/>
                    <img src="/iosDownload.png" className=""/>
                  </div>
                </div>
              </div>
              <div className="scannerCard mb-0">
                <div className="row m-0 d-flex justify-content-between align-items-center">
                  <div className="col-md-6 col-8 px-0 my-auto ">
                    <p className="mb-0">Skip the wait-book reliable, fixed-price rides in seconds with Mie Ride. Your journey, your way, just a tap away.</p>
                  </div>
                  <div className="col-md-6 col-4 row m-0 p-0">
                    <div className="col-md-6 col-12 d-flex justify-content-end">
                    <div className="scannerImage">
                      <img src="/scanImage.png" className="img-fluid"/>
                    </div>
                    
                  </div>
                  <div className="col-md-6 col-12 px-0 footerBtnGroup d-none d-md-block">
                    <img src="/androidDownload.png" className="mb-2 "/>
                    <img src="/iosDownload.png" className=""/>
                  </div>
                  </div>
                  <div className="col-md-6 col-12 px-0 footerBtnGroup d-flex d-md-none justify-content-between mt-3">
                    <img src="/androidDownload.png" className="mb-2 "/>
                    <img src="/iosDownload.png" className=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none mt-4 justify-content-center d-flex socialIcons">
                <img src="/youtubeIcon.png"/>
                <img src="/tiktokIcon.png"/>
                <img src="/facebookIcon.png"/>
                <img src="/instagramIcon.png"/>
                <img src="/linkedin.png"/>
                <img src="/xIcon.png"/>
              </div>
        </div>
      </div>
      <div className="footerBottom d-flex justify-content-center">
        <p>© 2025 Mie Ride Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
