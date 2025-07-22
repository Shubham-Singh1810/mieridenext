"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitContactQuery } from "../services/contact.services";
import { toast, ToastContainer } from "react-toastify";
function page() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await submitContactQuery(values);
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <div>
      <Navbar selectedItem="Contact Us" />

      <div className="heroSection ">
        <div className="conatctBg">
          <div className="container">
            <div className="">
              <h2 className="">Contact Us</h2>
              <h5 className="contactSubHeading ">Get in Touch</h5>
            </div>
            <div className="row my-md-5 my-4 pb-md-4 ">
              <div className="col-md-4 col-12">
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
              <div className="col-md-4 col-12">
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
              <div className="col-md-4 col-12">
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
              <div className="col-md-7 col-12 order-md-1 order-2">
                <div className="contactForm">
                  <form onSubmit={formik.handleSubmit} >
<div className="inputDiv">
                    <input
                      className=""
                      placeholder="Your Name"
                      name="first_name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <small className="text-danger">
                        {formik.errors.first_name}
                      </small>
                    )}
                  </div>
                  <div className="inputDiv">
                    <input
                      className=""
                      placeholder="Your Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    )}
                  </div>
                  <div className="inputDiv">
                    <input
                      className=""
                      placeholder="Subject"
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.subject && formik.errors.subject && (
                      <small className="text-danger">
                        {formik.errors.subject}
                      </small>
                    )}
                  </div>
                  <div className="inputDiv">
                    <input
                      className=""
                      placeholder="Message"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <small className="text-danger">
                        {formik.errors.message}
                      </small>
                    )}
                  </div>
                  <button className="mt-4" type="submit">Send</button>
                  </form>
                  
                </div>
              </div>
              <div className="col-md-5 col-12 order-md-2 order-1 my-auto contactFormResponsive contactContent ps-md-5">
                <h6>Have any Query</h6>
                <h4 className="mb-md-5 mb-4 mt-md-4 mt-3">CONTACT US</h4>
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
<ToastContainer />
      <Footer />
    </div>
  );
}

export default page;
