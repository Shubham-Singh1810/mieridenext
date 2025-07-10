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
                src="/brandName.png"
                className="img-fluid border bg-danger"
              />
              <div className="row">
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
            </div>
            <div className="col-lg-6 col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
