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
    </div>
  );
}
