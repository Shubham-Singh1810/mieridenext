"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar({ selectedItem }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Services", path: "/our-services" },
    { name: "Why Us", path: "/why-us" },
    { name: "Blogs", path: "/blogs" },
    { name: "Advertise with Us", path: "/advertise-with-us" },
    { name: "Partner with Us", path: "/partner-with-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const handleNavClick = (path) => {
    setShowMobileNav(false);
    window.location.href = path;
  };
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNav]);

  return (
    <div className="navbarMain">
      <div className="d-flex w-100 container align-items-center justify-content-between">
        <div className="brandMain me-5 pe-5">
          <img src="/brandIcon.png" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="navRight d-md-flex d-none w-100 justify-content-between">
          {navItems.map((v, i) => (
            <Link
              key={i}
              href={v.path}
              passHref
              style={{ textDecoration: "none" }}
            >
              <p
                className={`${
                  selectedItem === v.name ? "bgLightGreen textDark" : ""
                }`}
              >
                {v.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="bar d-md-none d-block">
          <img
            src="/barIcon.png"
            alt="Menu"
            onClick={() => setShowMobileNav(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobileNav ${showMobileNav ? "d-block show" : "d-none"}`}>
        <div className="d-flex justify-content-between align-items-center p-3">
          <div className="brandMain">
            <img src="/brandIcon.png" alt="Logo" />
          </div>
          <div
            onClick={() => setShowMobileNav(false)}
            style={{ cursor: "pointer" }}
          >
            ❌
          </div>
        </div>

        <div className="mobileNavItems px-3">
          {navItems.map((v, i) => (
            <div
              key={i}
              className="mobileNavItem py-2 border-bottom"
              onClick={() => handleNavClick(v.path)}
              style={{ cursor: "pointer" }}
            >
              <p
                className="mb-0"
                style={{ color: selectedItem === v.name ? "#CFFF13" : "white" }}
              >
                {v.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Overlay */}
      {showMobileNav && (
        <div className="overlay" onClick={() => setShowMobileNav(false)} />
      )}
    </div>
  );
}

export default Navbar;
