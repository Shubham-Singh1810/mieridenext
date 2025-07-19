import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
 
  return (
    <div>
      <Navbar selectedItem="Blogs" />

      <div className="ourStoryMain bgDark blogBg">
        <div className="container">
          <div className="row mb-5 pb-5">
            <div className="col-6 my-auto">
              <h2 className="textLight">Your Journey, Your Way</h2>
          <p className="mt-3 textLight">
            Flat Fares, No Fluff: Why Smart Canadians Are Switching to Mie Ride
          </p>
          <p className="mt-3 textLight font200">
            Jul 05 2025
          </p>
          <div className="d-flex mt-4">
            <div className="d-flex align-items-center justify-content-center  bookRideBtn">
              <p>Read More</p>
              
            </div>
          </div>
          
            </div>
            <div className="col-6 blogHeroImg">
            <img className="img-fluid" src="https://api.mieride.ca/storage/Blog/7/blogImage.png"/>
          </div>
          </div>
           <div className="d-flex blogCategoryDiv">
            <p className="borderBottom">All</p>
            <p>MIE RIDE</p>
          </div>
         <div className="row">
           {[1, 2, 3, 4]?.map((v, i)=>{
            return(
              <div className="col-4 mb-4">
               <div className="blogCard">
                 <img className="img-fluid" src="https://api.mieride.ca/storage/Blog/7/blogImage.png"/>
                 <div className="p-3">
                  <p>Flat Fares, No Fluff: Why Smart Canadians Are Switching to Mie Ride</p>
                  <h6 className="mt-2">Jul 05 2025</h6>
                 </div>
               </div>
              </div>
            )
          })}
         </div>
        </div>
      </div>
     
     
      
      <Footer />
    </div>
  );
}

export default page;
