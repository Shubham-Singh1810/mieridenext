"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
export default function Home() {
  const faqList = [
    {
      question: "What is Mie Pay, and how does it enhance my ride experience?",
      answer:
        "Mie Pay is our secure in-app wallet, enabling quick, hassle-free payments and seamless transactions for all your ride needs.​",
    },
    {
      question: "Can I schedule rides in advance on Mie Ride?",
      answer:
        "Yes, you can pre-book rides to ensure timely pickups, especially for important appointments or airport transfers.​​",
    },
    {
      question: "How does Mie Ride ensure my safety during trips?",
      answer:
        "We offer in-app communication, live ride tracking, and driver details, ensuring transparency and safety throughout your journey.​​",
    },
    {
      question: "What should I do if I leave an item in the vehicle?",
      answer:
        "Report the lost item through the app; we'll assist in connecting you with the driver to retrieve your belongings.​​",
    },
    {
      question:
        "Are there any loyalty rewards or referral benefits for Mie Ride?",
      answer:
        "Yes, refer friends to Mie Ride and earn rewards through our referral program. Details are available within the app.​​",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <Navbar selectedItem="Home" />
      <div className="heroSection paddingVertical0">
        <div className="heroSectionBg">
          <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="homeLeftContent">
                <h2 className="">WELCOME TO</h2>
                <div className="d-flex justify-content-center d-md-block">

                <img src="/brandName.png" className=" homeBrandName" />
                </div>
                <div className="d-none d-md-block my-5 py-3">
                  <p className=" ">
                    Welcome to Mie Ride – your friendly neighborhood ride
                    sharing solution without the surge price surprises. We get
                    it – life’s expensive enough without wondering what your
                    rideshare will cost. That’s why we keep it simple with{" "}
                    <span className="textLightGreen">
                      fixed prices you can count on.
                    </span>{" "}
                    Need a ride-sharing service to campus? Running late for
                    work? Airport dash? We've got you covered.{" "}
                  </p>
                  <p>
                    We’re real people connecting drivers and passengers heading
                    the same way, helping everyone save money while making
                    Ontario’s roads less crowded. Our drivers are your
                    neighbors, earning extra on routes they already take. No
                    corporate feel. No robots setting prices. Just{" "}
                    <span className="textLightGreen">
                      real cab services for real people.
                    </span>{" "}
                  </p>
                  <p>
                    {" "}
                    Whether you're in Caledon, Brampton, Kitchener, Mississauga,
                    Barrie, Vaughan, Mie Ride keeps your fare fair – every time.
                    And we’re not stopping there.{" "}
                    <span className="textLightGreen">
                      We’re expanding soon,
                    </span>{" "}
                    bringing fixed-price rideshare to even more communities
                    across Ontario.{" "}
                  </p>
                  <p className="">
                    {" "}
                    So when you're searching cab services near me and tired of
                    price spikes during rush hour, rainy days, or busy weekends,
                    remember: Mie Ride offers consistent pricing that respects
                    your budget – no matter where you're headed.
                  </p>
                </div>

                <div className="downloadBtnGroup d-none d-md-block">
                  <button className="downloadNowBtn w-100">Download Now</button>
                  <div className="d-flex justify-content-between mt-md-5 mt-0">
                    <img src="/androidDownload.png" />
                    <img src="/iosDownload.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="d-flex justify-content-center">
                 <img src="/heroImageNew.png" className="img-fluid" />
              </div>
             
              <div className="d-block d-md-none my-5">
                <p className=" ">
                  Welcome to Mie Ride – your friendly neighborhood ride sharing
                  solution without the surge price surprises. We get it – life’s
                  expensive enough without wondering what your rideshare will
                  cost. That’s why we keep it simple with{" "}
                  <span className="textLightGreen">
                    fixed prices you can count on.
                  </span>{" "}
                  Need a ride-sharing service to campus? Running late for work?
                  Airport dash? We've got you covered.{" "}
                </p>
                <p>
                  We’re real people connecting drivers and passengers heading
                  the same way, helping everyone save money while making
                  Ontario’s roads less crowded. Our drivers are your neighbors,
                  earning extra on routes they already take. No corporate feel.
                  No robots setting prices. Just{" "}
                  <span className="textLightGreen">
                    real cab services for real people.
                  </span>{" "}
                </p>
                <p>
                  {" "}
                  Whether you're in Caledon, Brampton, Kitchener, Mississauga,
                  Barrie, Vaughan, Mie Ride keeps your fare fair – every time.
                  And we’re not stopping there.{" "}
                  <span className="textLightGreen">
                    We’re expanding soon,
                  </span>{" "}
                  bringing fixed-price rideshare to even more communities across
                  Ontario.{" "}
                </p>
                <p className="">
                  {" "}
                  So when you're searching cab services near me and tired of
                  price spikes during rush hour, rainy days, or busy weekends,
                  remember: Mie Ride offers consistent pricing that respects
                  your budget – no matter where you're headed.
                </p>
              </div>

              <div className="downloadBtnGroup d-block d-md-none">
                <button className="downloadNowBtn w-100">Download Now</button>
                <div className="d-flex justify-content-between mt-3 mt-md-5">
                  <img src="/androidDownload.png" />
                  <img src="/iosDownload.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        
      </div>

      <div className="ourStoryMain  bgDark serviceSectionMarginTop">
       
          <div className="container">
          <h2 className="textLight">Services</h2>
          <div className="row mt-lg-5">
            <div className="col-lg-4 mb-4 mb-md-0">
              <div className="aboutCard homeCard">
                <div className="">
                  <h5 className="my-lg-4">Sharing Ride</h5>
                </div>
                <p>
                  Book your own private journey with fixed pricing and
                  personalized comfort – whether you're searching for a <span className="textLightGreen">cab
                  company near me</span> or a solo ride experience.
                </p>
                <button className="mt-md-5 mt-4">Read More &#8594;</button>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-md-0">
              <div className="aboutCard homeCard">
                <div className="">
                  <h5 className="my-lg-4">Personal Ride</h5>
                </div>
                <p>
                  Travel together, split costs, reduce emissions—smart commuting
                  for budget-conscious travelers who enjoy <span className="textLightGreen">sharing cabs</span> and
                 <span className="textLightGreen"> using car sharing services.</span> 
                </p>
                <button className="mt-md-5 mt-4">Read More &#8594;</button>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-md-0">
              <div className="aboutCard homeCard">
                <div className="">
                  <h5 className="my-lg-4">Driver Onboard</h5>
                </div>
                <p>
                  Join our team, set your schedule, earn consistently while
                  helping others commute – your chance to drive for a growing
                 <span className="textLightGreen"> fixed price rideshare</span>  platform.
                </p>
                <button className="mt-md-5 mt-4">Read More &#8594;</button>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">Roadmap</h2>
          <div className="roadMapDiv d-flex justify-content-center align-items-center ">
            <span>ROADMAP</span>
          </div>
          <div className="roadMapDiv contentRoadMan d-flex justify-content-center align-items-center  w-100">
            <div className="w-100">
              <div className="row mx-0">
                <div className="col-2 text-light text-center">
                  <p className="text-light">Shared Ride</p>
                  <h6>(Live)</h6>
                </div>
                <div className="col-2 text-light text-center visibilityNone">
                  <p className="text-light">Personal Ride</p>
                  <h6>(Live)</h6>
                </div>
                <div className="col-2 text-light text-center">
                  <p className="text-light">Family Ride</p>
                  <h6>(Aug 2025)</h6>
                </div>
                <div className="col-2 text-light text-center visibilityNone">
                  <p className="text-light">Family Ride</p>
                  <h6>(Oct 2025)</h6>
                </div>
                <div className="col-2 text-light text-center">
                  <p className="text-light">Airport Ride</p>
                  <h6>(Sep 2025)</h6>
                </div>
                <div className="col-2 text-light text-center visibilityNone">
                  <p className="text-light">Intercity Ride</p>
                  <h6>(Dec 2025)</h6>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="verticalLine"></div>
                <div className="verticalLine visibilityNone"></div>
                <div className="verticalLine"></div>
                <div className="verticalLine visibilityNone"></div>
                <div className="verticalLine"></div>
                <div className="verticalLine visibilityNone"></div>
              </div>

              <div className="horizontalLine"></div>
              <div className="d-flex justify-content-around">
                <div className="verticalLine visibilityNone"></div>
                <div className="verticalLine"></div>
                <div className="verticalLine visibilityNone"></div>
                <div className="verticalLine"></div>
                <div className="verticalLine visibilityNone"></div>
                <div className="verticalLine"></div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="yellowCircle "></div>
                <div className="yellowCircle"></div>
                <div className="yellowCircle visibilityNone"></div>
                <div className="yellowCircle visibilityNone"></div>
                <div className="yellowCircle visibilityNone"></div>
                <div className="yellowCircle visibilityNone"></div>
              </div>
              <div className="row mx-0">
                <div className="col-2 text-light text-center visibilityNone">
                  <p className="text-light">Shared Ride</p>
                  <h6>(Live)</h6>
                </div>
                <div className="col-2 text-light text-center">
                  <p className="text-light">Personal Ride</p>
                  <h6>(Live)</h6>
                </div>
                <div className="col-2 text-light text-center visibilityNone">
                  <p className="text-light">Family Ride</p>
                  <h6>(Aug 2025)</h6>
                </div>
                <div className="col-2 text-light text-center">
                  <p className="text-light">Family Ride</p>
                  <h6>(Oct 2025)</h6>
                </div>
                <div className="col-2 text-light text-center visibilityNone">
                  <p className="text-light">Airport Ride</p>
                  <h6>(Sep 2025)</h6>
                </div>
                <div className="col-2 text-light text-center">
                  <p className="text-light">Intercity Ride</p>
                  <h6>(Dec 2025)</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">Faq</h2>
          <p className="textLight">
            Get quick answers to common questions about booking, pricing,
            cancellations, and using our cab services near me.
          </p>
          <div className="faqTableMain">
            {faqList?.map((v, i) => {
              return (
                <div
                  className={"faqCard p-md-5 p-3 " + (i != 0 && "mt-md-5 mt-3")}
                  onClick={() => setSelectedIndex(selectedIndex==i ? null: i)}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="textLightGreen ">{v?.question}</p>
                      {selectedIndex == i && (
                        <p className="textLight pt-3">{v?.answer}</p>
                      )}
                    </div>
                    <div className="ms-5">
                      <img
                        src={
                          selectedIndex != i
                            ? "/greenPlusIcon.png"
                            : "/greenMinusIcon.png"
                        }
                      />
                    </div>
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
