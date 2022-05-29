import React, { Component, Fragment } from 'react'

 class LandingPricing extends Component {
  render() {
    return (
   <Fragment>

       {/*====== PRICING PART START ======*/}
<section id="pricing" className="pricing_area pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Pricing Plans</h4>
                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single_pricing text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                <h4 className="pricing_title">Startup</h4>
                <span className="price">$240</span>
                <ul className="pricing_list">
                  <li>Startup Business</li>
                  <li>Business Consulting</li>
                  <li>Business Analysis</li>
                  <li>Corporate Business</li>
                  <li>Business Investment</li>
                </ul>
                <a href="#0" className="mian-btn">Order Now</a>
              </div> {/* single pricing */}
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single_pricing text-center mt-30 active wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s">
                <h4 className="pricing_title">Agency</h4>
                <span className="price">$340</span>
                <ul className="pricing_list">
                  <li>Startup Business</li>
                  <li>Business Consulting</li>
                  <li>Business Analysis</li>
                  <li>Corporate Business</li>
                  <li>Business Investment</li>
                </ul>
                <a href="#0" className="mian-btn">Order Now</a>
              </div> {/* single pricing */}
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single_pricing text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                <h4 className="pricing_title">Enterprise</h4>
                <span className="price">$440</span>
                <ul className="pricing_list">
                  <li>Startup Business</li>
                  <li>Business Consulting</li>
                  <li>Business Analysis</li>
                  <li>Corporate Business</li>
                  <li>Business Investment</li>
                </ul>
                <a href="#0" className="mian-btn">Order Now</a>
              </div> {/* single pricing */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
      {/*====== PRICING PART ENDS ======*/}
   </Fragment>
    )
  }
}

export default LandingPricing