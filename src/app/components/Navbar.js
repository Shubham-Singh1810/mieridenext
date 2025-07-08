"use client"
import React from "react";
import Link from "next/link";

function Navbar({ selectedItem }) {
  
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Our Services",
      path: "/our-services",
    },
    {
      name: "Why Us",
      path: "/why-us",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Advertise with Us",
      path: "/advertise-with-us",
    },
    {
      name: "Partner with Us",
      path: "/partner-with-us",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="navbarMain">
      <div className="d-flex w-100 container align-items-center justify-content-between">
        <div className="brandMain me-5 pe-5">
          <img src="/brandIcon.png" />
        </div>
        <div className="navRight d-flex w-100 justify-content-between">
          {navItems?.map((v, i) => {
            return <Link key={i} href={v.path} passHref style={{textDecoration:"none"}}>
              <p className={` ${selectedItem === v.name ? "bgLightGreen textDark" : ""}`}>
                {v.name}
              </p>
            </Link>
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
