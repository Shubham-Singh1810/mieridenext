import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  return (
    <div>
      <Navbar selectedItem="About Us" />
      <div className="ourStoryMain">
        <div className="container">
          <h2>Our Story</h2>
          <p className="mt-3">
            Mie Ride was born in Ontario from a simple belief: travel should
            connect people, not just destinations. This Ontario-based ride
            sharing service emerged when two friends confronted the same
            transportation frustrations you likely face every day.
          </p>
          <p>
            The idea sparked in 2023, after yet another overpriced airport trip
            and the familiar struggle of downtown parking. What if ride prices
            could remain consistent regardless of demand? What if drivers and
            passengers heading the same way could connect, sharing both the
            journey and the cost?{" "}
          </p>
          <p>
            {" "}
            Today, that vision has grown into Ontario's most transparent
            transportation networks – where prices stay fixed, communities grow
            stronger, and every shared journey helps reduce our environmental
            footprint.
          </p>
        </div>
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">The Founders</h2>
          <p className="mt-3 textLight">
            Sandeep Singh and Jashan Preet have started this joint venture when
            they watched rideshare Toronto prices spike during peak hours once
            too often. After calculating the true cost of unpredictable
            transportation on both personal budgets and business planning, they
            sketched the initial concept for Mie Ride. Their vision was
            straightforward: connect travelers going the same direction,
            eliminate surge pricing, and solve urban parking headaches
            throughout Ontario.
          </p>
          <p className="textLight">
            They approached transportation challenges from a user experience
            perspective. Having navigated the frustrations of rising fares and
            complex parking situations firsthand, they focused on building a
            service that prioritizes reliability and simplicity. Their
            contribution ensures that Mie Ride remains intuitive and accessible
            for everyone, regardless of technical background.
          </p>
          <p className="textLight">
            Together, they've created more than just another ride-sharing
            company – they've built Ontario's first truly transparent
            transportation network.
          </p>
        </div>
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">What Sets Mie Ride Apart</h2>
          <div className="row mt-lg-5">
            <div className="col-lg-4 mb-3">
              <div className="aboutCard">
                <div className="d-lg-block d-flex align-items-center  text-center">
                  <img src="/greenLockIcon.png" />
                  <h5 className="my-lg-4">True Fixed Pricing</h5>
                </div>
                <p>
                  When you search for cab services near me, chances are you'll
                  see prices spike during rush hour, bad weather, or local
                  events. Not with Mie Ride. We offer  fixed pricing ride share
                  service, fare you see is exactly what you pay—no hidden fees,
                  no surge pricing, no surprises. Your budget matters, and Mie
                  Ride keeps it intact.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="aboutCard">
                <div className="d-lg-block d-flex align-items-center  text-center">
                  <img src="/greenLocationIcon.png" />
                  <h5 className="my-lg-4">Community-Focused Ride Sharing</h5>
                </div>
                <p>
                  Every Mie Ride journey connects people traveling similar
                  routes, creating networks of riders and drivers throughout
                  Ontario. These connections reduce individual transportation
                  costs while fostering community relationships that extend
                  beyond single rides. It's a car sharing service built around
                  people and purpose.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="aboutCard">
                <div className="d-lg-block d-flex align-items-center  text-center">
                  <img src="/greenLockIcon.png" />
                  <h5 className="my-lg-4 mb-lg-2">Ontario-Rooted Approach</h5>
                </div>
                <p>
                  Mie Ride understands local transportation needs because our
                  team lives and works right here in Ontario. From downtown
                  Toronto’s parking headaches to underserved suburban areas, our
                  fixed price ride solutions are built for real Ontario
                  communities—not copied from distant corporate offices. That’s
                  why we're a top choice for users searching cabs in Ontario
                  cities. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourStoryMain bgDark ">
        <div className="container">
          <h2 className="textLight">Our Mission and Values</h2>
          <p className="mt-0 mt-md-3 textLightGreen">
            Mie Ride believes transportation should enhance lives rather than
            complicate them. Every decision reflects three core commitments:
          </p>
          <h2 className="textLight mt-5 pt-md-3">Price Transparency</h2>
          <p className="mt-0 mt-md-3 textLightGreen">
            What you see is what you pay—every single time. Mie Ride eliminates
            the unpredictability of surge pricing, ensuring you can confidently
            plan your transportation. Whether you're searching for ride share
            service or  want to book a cab advance, our consistent pricing
            ensures there is nothing to worry about.
          </p>
          <h2 className="textLight mt-5 pt-md-3">Community Connection</h2>
          <p className="mt-0 mt-md-3  textLightGreen">
            Beyond just providing rides, Mie Ride builds meaningful connections
            between people with shared routes and destinations. Every journey
            strengthens local networks throughout Ontario communities. It's not
            just sharing cabs – it’s building community through connection.
          </p>
          <h2 className="textLight mt-5 pt-md-3">Environmental Responsibility</h2>
          <p className="mt-0 mt-md-3 textLightGreen">
            By connecting travelers heading in similar directions, Mie Ride
            reduces the number of half-empty vehicles on Ontario roads. This
            approach decreases emissions and traffic congestion with every
            shared ride, making it more than just car sharing services – it's
            smart, sustainable travel.
          </p>
          <h2 className="textLight mt-5 pt-md-3">Join The Journey</h2>
          <p className="mt-0 mt-md-3 textLightGreen">
            Mie Ride isn't just transforming how people move throughout Ontario
            – it's changing the entire relationship between transportation,
            community, and environment. Experience a ride hauling company that
            offers consistency when others are unpredictable, builds connections
            when others create isolation, and considers environmental impact
            when others
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default page;
