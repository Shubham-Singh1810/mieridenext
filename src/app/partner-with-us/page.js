import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  const infoArr = [
    {
      title: "Businesses and Corporations",
      listArr: [
        "Dependable, punctual transportation for your employees at all hours.",
        "Streamlined corporate accounts with detailed monthly billing and expense tracking.",
        "Executive transportation for VIP clients and important meetings.",
        "Hassle-free airport pickup and drop-off service for your business.",
        "Cost-effective alternative to maintaining and insuring a company vehicle fleet.",
        "Late-night safe rides home for employees working overtime.",
        "Special event transportation coordination for company functions.",
        "Custom branded booking experience for your team members.",
      ],
    },
    {
      title: "Retail and Shopping Centers",
      listArr: [
        "Convenient customer pickup and delivery options to enhance shopping experience.",

        "Staff transportation solutions for early morning and late evening shifts.",
        "Package delivery partnerships for same-day local deliveries.",
        "Transportation options for customers without vehicles.",
        "Special shopping event transportation coordination.",
        "Mall employee ride programs to reduce parking congestion.",
        "Store-to-store transfer services for merchandise and staff.",
      ],
    },
    {
      title: "Warehouses & Distribution Centers",
      listArr: [
        "Reliable staff transportation for early morning, evening and overnight shifts.",
        "Transportation solutions for seasonal and temporary workers.",
        "Reduced parking congestion at your facility during shift changes.",
        "Emergency transportation for critical staff during weather events.",
        "Backup transportation for mechanical breakdowns and vehicle issues.",
        "Ride coordination for multiple employees from similar locations.",
        "Cross-facility staff transportation for multi-location operations.",
      ],
    },
    {
      title: "Healthcare Facilities",
      listArr: [
        "Patient transportation to and from appointments with reminder notifications.",
        "Reliable staff rides during early morning and late-night shift changes.",
        "On-call transportation for medical professionals during emergencies.",
        "Comfortable transportation for families visiting patients.",
        "Scheduled transportation for regular treatment appointments.",
        "Medical courier services for urgent sample delivery.",
        "Transportation for discharged patients returning home.",
        "Staff ride programs to reduce parking issues at medical facilities.",
      ],
    },
    {
      title: "Educational Institutions",
      listArr: [
        "Safe, monitored transportation for students between housing and campus.",
        "Faculty and staff transportation programs with dedicated service.",
        "Flexible campus shuttle alternatives with expanded reach.",
        "Reliable transportation for visiting lecturers, speakers and guests.",
        "Special event and sports game transportation services.",
        "Field trip and off-campus study transportation options.",
        "International student airport pickup and orientation services.",
        "Late-night safe ride programs for students studying after hours.",
      ],
    },
    {
      title: "Hotels and Hospitality Business",
      listArr: [
        "Guest transportation to local attractions for enjoyable exploration without navigation worries.",
        "Airport pickup and drop-off services adjusting to flight changes and delays.",
        "Staff transportation for all shifts ensuring reliable attendance around the clock.",
        "Special event shuttle services coordinating seamless movement for weddings and conferences.",
        "Reliable transportation for restaurant and bar patrons promoting safety and satisfaction.",
      ],
    },
    {
      title: "Sports Arenas and Entertainment Facilities",
      listArr: [
        "Event staff transportation for game days ensuring punctual arrival despite traffic.",
        "Fan transportation options reducing venue congestion and simplifying attendee experience.",
        "VIP guest pickup and drop-off services enhancing premium customer experiences.",
        "Post-event transportation when public transit is unavailable during late hours.",
        "Multi-venue transportation for tournaments coordinating complex movement between locations.",
      ],
    },
    {
      title: "Religious Organizations",
      listArr: [
        "Senior member transportation to services maintaining important community connections.",
        "Youth group event transportation supporting activities without burdening parents.",
        "Volunteer coordination for community outreach projects throughout your service area",
        "Special holiday service. transportation managing increased attendance during busy seasons.",
        "Weekly program transportation assistance ensuring consistent participation for all members using rideshare services.",
      ],
    },
    {
      title: "Technology campuses",
      listArr: [
        "Employee shuttle service between buildings maximizing productive time during workdays.",
        "Late-night transportation for extended work hours supporting dedicated team members.",
        "Visitor transportation between campus locations creating positive impressions for guests.",
        "Recruitment candidate pickup and tours enhancing the hiring and interview process.",
        "Lunch run and errand services keeping productive employees focused on important work.",
      ],
    },
  ];
  return (
    <div>
      <Navbar selectedItem="Partner with Us" />
      <div className="heroSection">
        <div className="container">
          <div className="text-center">
            <h2>PARTNER WITH</h2>
            <img src="/brandName.png" className="img-fluid" />
          </div>
          <div className="homeLeftContent pt-5 mt-5">
            <h4 className="mb-4 textLightGreen">
              Let's grow together and transform transportation for your
              organization
            </h4>
            <p className="">
              Looking for a transportation solution that truly understands what
              your business or institution needs? We've built our partnership
              program from the ground up based on what real organizations told
              us they wanted. No cookie-cutter approaches here - just practical,
              reliable transportation that solves problems and creates
              opportunities with the flexibility of a trusted ride sharing
              company.
            </p>
          </div>
        </div>
      </div>
      <div className="heroSection">
        <div className="container">
          <div className="homeLeftContent ">
            <h4 className="mb-4">Who we work with</h4>

            <div className="row g-5 m-0">
              {infoArr?.map((v, i) => {
                return (
                  <div className="col-4">
                    <div className="partnerCard ">
                      <div className="outerBorder ">
                        <div className="innerBorder px-3">
                          <div className="d-flex justify-content-center">
                            <img src={`/partnerIcon${i + 1}.png`} />
                          </div>

                          <h6>{v?.title}</h6>
                          <ul>
                            {v?.listArr?.map((listVal, i) => {
                              return <li>{listVal}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="heroSection">
        <div className="container">
          <div className="ourStoryMain bgDark ">
            <div className="container">
              <h4 className="textLight">What Sets Mie Ride Apart</h4>
              <div className="row g-5 mt-3 d-flex justify-content-center">
                <div className="col-lg-4">
                  <div className="aboutCard whyChooseCard">
                    <div className="d-lg-block d-flex align-items-center justify-content-between text-center">
                      <img src="/whyChoose1.png" />
                      <h5 className="my-lg-4">
                        Rock Solid Reliability When it Matters Most
                      </h5>
                    </div>
                    <p>
                      When your business depends on people getting where they
                      need to be, you can't afford disappointments. Our drivers
                      show up when promised - every single time - with our
                      industry-leading on-time performance record. We build in
                      buffer time to account for traffic, weather, and
                      unexpected situations, so your transportation needs are
                      always covered. That’s why MIE Ride is a go-to ridesharing
                      company.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="aboutCard whyChooseCard">
                    <div className="d-lg-block d-flex align-items-center justify-content-between text-center">
                      <img src="/whyChoose2.png" />
                      <h5 className="my-lg-4">
                        Solutions Built Around Your Specific Needs
                      </h5>
                    </div>
                    <p>
                      We start by listening. Tell us about your transportation
                      challenges, budget constraints, scheduling needs, and
                      goals. Then we'll design a custom program that addresses
                      your exact situation rather than forcing you into a
                      predetermined package. Whether it’s a taxi cab service for
                      executives or intercity carpool support for staff, your
                      solution is custom-built.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="aboutCard whyChooseCard">
                    <div className="d-lg-block d-flex align-items-center justify-content-between text-center">
                      <img src="/whyChoose3.png" />
                      <h5 className="my-lg-4 mb-lg-2">
                        Personal Support From People Who Know Your Business
                      </h5>
                    </div>
                    <p>
                      As a partner, you'll work with a dedicated account manager
                      who takes the time to understand your organization. Need
                      to adjust your transportation schedule? Have a billing
                      question? Want to add a new service location? Your account
                      manager is just a call or message away, giving you direct
                      access without endless hold times or explaining your
                      situation repeatedly.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="aboutCard whyChooseCard">
                    <div className="d-lg-block d-flex align-items-center justify-content-between text-center">
                      <img src="/whyChoose4.png" />
                      <h5 className="my-lg-4 mb-lg-2">
                        Crystal-Clear Billing With No Surprises
                      </h5>
                    </div>
                    <p>
                      Our partnership billing is straightforward and
                      transparent. Receive consolidated monthly statements with
                      detailed breakdowns by department, cost center, or
                      whatever categories make sense for your accounting. Track
                      usage patterns, anticipate expenses, and easily reconcile
                      transportation costs with our comprehensive reporting
                      tools — whether for local taxi service or scheduled
                      shuttle programs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="aboutCard whyChooseCard">
                    <div className="d-lg-block d-flex align-items-center justify-content-between text-center">
                      <img src="/whyChoose5.png" />
                      <h5 className="my-lg-4 mb-lg-2">
                        Value That Makes Financial Sense
                      </h5>
                    </div>
                    <p>
                      Our partnership rates deliver significant savings compared
                      to standard ride prices - especially for regular users.
                      The more you use our service, the more you save. Plus,
                      you'll eliminate hidden costs associated with alternatives
                      like maintaining a company fleet, paying for parking, or
                      managing travel reimbursements. Our car sharing services
                      model ensures financial flexibility for your operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="heroSection ">
        <div className="container">
          <div className="homeLeftContent ">
            <h4 className="mb-4 ">What our partners say</h4>
            <div className="partnerSayDiv">
              <p>
                The reliable service has made a huge difference for our
                late-shift hospital staff. Everyone arrives safely and on time,
                which has significantly improved our shift change process and
                staff satisfaction. The dedicated drivers who regularly serve
                our facility understand our unique needs. - Regional Medical
                Center Administrator{" "}
              </p>
              <p>
                {" "}
                Our students now have safe, reliable transportation between
                campus and internship locations across the city. The custom
                booking portal integrated with our student ID system makes it
                incredibly easy to use, and the monthly reporting helps us
                manage our transportation budget effectively. - University
                Transportation Coordinator{" "}
              </p>
              <p>
                {" "}
                Setting up corporate accounts was refreshingly simple, and the
                monthly billing has streamlined our expense management
                completely. Our employees appreciate the convenience, and our
                finance department loves the detailed reporting. It's been a
                win-win for everyone involved. - Corporate Office Manager{" "}
              </p>
              <p>
                {" "}
                As a retail manager with staff working various shifts, I've been
                impressed with the reliability and flexibility. Our employees no
                longer worry about late-night transportation, and we've seen
                improved punctuality across all shifts since implementing the
                program. -  Retail Store Operation Director
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="heroSection ">
        <div className="container">
          <div className="homeLeftContent">
            <h4 className="mb-5 textLightGreen">
              Ready to discuss a custom partnership?
            </h4>
            <div className="partnerSayDiv mb-5">
              <p>
                Want to see our service in action first? Ask about our
                partnership trial program, where your organization can
                experience our service before making a long-term commitment.
              </p>
            </div>
            <h5>Contact our dedicated partnerships team directly:</h5>
            <div className="row mt-5 mb-4 ">
              <div className="col-4">
                <div className="contactCard">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src="/locationIcon.png" />
                    </div>
                    <div className="ms-2">
                      <p>Office hours</p>
                      <h5>Mon-Fri, 8am-6pm</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="contactCard">
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
              <div className="col-4">
                <div className="contactCard">
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
            <div className="partnerSayDiv mt-5">

            <p className="font700">Let's talk about your transportation needs and how we can create the perfect solution for your organization.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="heroSection">
        <div className="container">
          <div className="homeLeftContent">
            <div className="text-center">
              <h4>Schedule a No-Obligation Consultation</h4>
              <button className="letsConnectBtn mt-4">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
