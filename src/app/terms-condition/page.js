import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  return (
    <div>
      <Navbar selectedItem="" />
      <div className="heroSection">
        <div className="container">
          <div className="text-center">
            <h2>Terms & Condition</h2>
            <div className="d-flex justify-content-center d-md-block">
              <img src="/brandName.png" className=" homeBrandName" />
            </div>
            <div className="p-5 my-5 d-flex justify-content-center align-items-center">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11689/11689210.png"
                  className="my-4"
                />
                <h2>Coming Soon</h2>
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
