import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar selectedItem="Home" />
      <div className="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="homeLeftContent">
                <h2>WELCOME TO</h2>
                <img src="/brandName.png" className="img-fluid" />
                <p className="mt-5 pt-3">
                  Welcome to Mie Ride – your friendly neighborhood ride sharing
                  solution without the surge price surprises. We get it – life’s
                  expensive enough without wondering what your rideshare will
                  cost. That’s why we keep it simple with fixed prices you can
                  count on. Need a ride-sharing service to campus? Running late
                  for work? Airport dash? We've got you covered.{" "}
                </p>
                <p>
                  We’re real people connecting drivers and passengers heading
                  the same way, helping everyone save money while making
                  Ontario’s roads less crowded. Our drivers are your neighbors,
                  earning extra on routes they already take. No corporate feel.
                  No robots setting prices. Just real cab services for real
                  people.{" "}
                </p>
                <p>
                  {" "}
                  Whether you're in Caledon, Brampton, Kitchener, Mississauga,
                  Barrie, Vaughan, Mie Ride keeps your fare fair – every time.
                  And we’re not stopping there. We’re expanding soon, bringing
                  fixed-price rideshare to even more communities across Ontario.{" "}
                </p>
                <p className="mb-5 pb-3">
                  {" "}
                  So when you're searching cab services near me and tired of
                  price spikes during rush hour, rainy days, or busy weekends,
                  remember: Mie Ride offers consistent pricing that respects
                  your budget – no matter where you're headed.
                </p>
                <div className="downloadBtnGroup">
                  <button className="downloadNowBtn w-100">Download Now</button>
                  <div className="d-flex justify-content-between mt-5">
                    <img src="/androidDownload.png" />
                    <img src="/iosDownload.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              {/* <img src="/heroSectionImg.jpeg" className="img-fluid"/> */}
            </div>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">Services</h2>
          <div className="row mt-lg-5">
            <div className="col-lg-4">
              <div className="aboutCard homeCard">
                <div className="">
                  <h5 className="my-lg-4">Sharing Ride</h5>
                </div>
                <p>
                  Book your own private journey with fixed pricing and
                  personalized comfort – whether you're searching for a cab
                  company near me or a solo ride experience.
                </p>
                <button className="mt-5 ">Read More &#8594;</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutCard homeCard">
                <div className="">
                  <h5 className="my-lg-4">Personal Ride</h5>
                </div>
                <p>
                  Travel together, split costs, reduce emissions—smart commuting
                  for budget-conscious travelers who enjoy sharing cabs and
                  using car sharing services.
                </p>
                <button className="mt-5 ">Read More &#8594;</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutCard homeCard">
                <div className="">
                  <h5 className="my-lg-4">Driver Onboard</h5>
                </div>
                <p>
                  Join our team, set your schedule, earn consistently while
                  helping others commute – your chance to drive for a growing
                  fixed price rideshare platform.
                </p>
                <button className="mt-5 ">Read More &#8594;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">Roadmap</h2>
          <div className="border mt-5 py-5 text-center text-light">
            Work in progress
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
            {[1, 2, 3, 4, 5]?.map((v, i) => {
              return (
                <div className={"faqCard p-5  " + (i!=0 && "mt-5")}>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="textLightGreen pb-3">
                        What is Mie Pay, and how does it enhance my ride
                        experience?
                      </p>
                      <p className="textLight">
                        Mie Pay is our secure in-app wallet, enabling quick,
                        hassle-free payments and seamless transactions for all
                        your ride needs.​
                      </p>
                    </div>
                    <div className="ms-5">
                      <img src="/greenPlusIcon.png"/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
