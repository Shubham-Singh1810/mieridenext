import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  const commingSoonData = [
    {
      title: "Driving Test Transport",
      para: "Taking your driving test? Let us handle the transportation stress. Book a reliable car for your test day by providing your home address, selecting your test center location, and indicating how many people will be accompanying you. Arrive calm and confident with Mie Ride's punctual test day service.",
    },
    {
      title: "Intercity Shared Route",
      para: "Planning a longer journey? Enter your starting point and destination, select your date and time preferences, and specify whether your schedule is flexible. Indicate how many seats you're offering to share, and Mie Ride will match you with passengers heading your way. Download our app to manage your intercity routes with ease.",
    },
    {
      title: "Airport Transportation",
      para: "Seamless airport travel awaits. Select whether you're heading to or from the airport using our simple dropdown menu. Enter your address details, travel date, time, and choose between our 4-seater or 6-seater vehicles depending on your luggage and group size. Download the Mie Ride app for flight tracking features and worry-free airport transfers.",
    },
    {
      title: "Family Ride",
      para: "Designed specifically for family outings and friend gatherings, our Family Ride service ensures everyone travels together comfortably. Our spacious vehicles accommodate car seats, extra luggage, and all the essentials for your family adventures. With fixed pricing regardless of traffic conditions, you can budget your trip with confidence. Download the Mie Ride app to be notified when Family Ride launches.",
    },
  ];
  const howItWorksData = [
    {
      title: "For Passengers :",
      pointsArr: [
        ["1. Download & Register -", "Create your account with basic details"],
        ["2. Set Your Destination -", "Enter pickup and drop-off locations"],
        ["3. Choose Your Service -", "Select personal or shared ride"],
        ["4. Book & Go -", "Confirm your booking and meet your driver"],
      ],
    },
    {
      title: "For Driver :",
      pointsArr: [
        [" 1. Join Our Network -", "Complete our simple verification process"],
        [
          "2. Share Your Availability -",
          "Let us know when and where you can drive",
        ],
        [
          "3. Accept Ride Requests -",
          "Choose the rides that fit your schedule",
        ],
        ["4. Earn & Grow -", "Get paid reliably for every completed journey"],
      ],
    },
  ];
  return (
    <div>
      <Navbar selectedItem="Our Services" />

      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">Your Journey, Your Way</h2>
          <p className="mt-3 textLight">
            Sandeep Singh and Jashan Preet have started this joint venture when
            Travel smarter with Mie Ride's versatile transportation solutions.
            Whether you're commuting to work, planning a night out, or looking
            to earn as a driver, we've got you covered!
          </p>
          <div className="d-flex mt-4">
            <div className="d-flex align-items-center justify-content-between  bookRideBtn">
              <p>Book a Ride Now</p>
              <div className="rigtArrowDiv d-flex justify-content-center align-items-center">
                <img src="/rightArrow.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark serviceCloudBg">
        <div className="container">
          <h2 className="textLight">Our Core Services </h2>
          <div className="row pb-5 mb-5">
            <div className="col-4 mt-auto">
              <div className="coreServiceCard">
                <h5>Personal Ride</h5>
                <p>
                  Travel in comfort and privacy by reserving an entire vehicle
                  for yourself and your companions. Choose between our spacious
                  4-seater or 6-seater options based on your group size (maximum
                  6 passengers). Perfect for business trips or when you simply
                  prefer your own space. Download the Mie Ride app now to access
                  exclusive personal transport discounts.
                </p>
              </div>
            </div>
            <div className="col-4">
              <img src="/ourServiceMobile.png" />
            </div>
            <div className="col-4">
              <div className="coreServiceCard">
                <h5>Shared Ride</h5>
                <p>
                  Save on travel costs while reducing your carbon footprint.
                  Share your journey with others heading in the same direction
                  and split the fare for significant savings. Simply indicate
                  how many seats you need, and we'll match you with compatible
                  riders. Enjoy the social aspect of carpooling while keeping
                  more money in your pocket. Download the Mie Ride app to start
                  sharing and saving today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark">
        <div className="container">
          <div className="serviceOntarioDiv">
            <h2 className="text-center">Serving Across Ontario</h2>
            <p className="mt-3 ">
              Mie Mie Ride isn’t just another ride share service — it’s your
              go-to transportation partner across Ontario. From personal rides
              in busy cities like Brampton and Barrie to everyday cab services
              in towns like Caledon,  Kitchener, Mississauga, and Vaughan we
              make getting around easier, smarter, and more affordable. Whether
              you're commuting to work in Kitchener, catching a flight from the
              airport, or carpooling across town, our expanding network means
              there’s always a Mie Ride nearby. We are currently in Ontario, and
              we’re growing fast. So no matter where you are in Ontario, chances
              are we’re already there — or will be soon. Your ride, your way,
              with a service designed for real people and real destinations.
            </p>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark">
        <div className="container">
          <h2 className="textLightGreen mb-5">The What's Coming Soon</h2>
          {commingSoonData?.map((v, i) => {
            return (
              <div className="comingSoonCard mb-4">
                <h5>{v?.title}</h5>
                <p>{v?.para}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ourStoryMain bgDark">
        <div className="container">
          <h2 className="textLightGreen mb-5">How It Works</h2>
          <div className="row">
            {howItWorksData?.map((v, i) => {
              return (
                <div className="col-6">
                  <div className="comingSoonCard mb-4 h-100 howWorksCard">
                    <h5>{v?.title}</h5>
                    {v?.pointsArr?.map((para, i) => {
                      return <p>{para[0]} <span>{para[1]}</span></p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
