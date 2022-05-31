import React, { Component, Fragment } from 'react'

export class LandingFeatures extends Component {
  render() {
    return (
    <Fragment>
        {/*====== FEATURES PART START ======*/}
        <section id="features" className="features_area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Welcome to your business community</h4>
                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s"> Egypt's first social commerce platform, designed specially for you!</p>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                {/* <i className="lni lni-layers" /> */}
                <i className="lni lni-infinite" />
                <h4 className="features_title">Connect with people in your city</h4>
                <p>Connect with people nearby, build your business community, find new opportunities and much more! </p>
              </div> {/* single features */}
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                <i className="lni lni-map" />
                <h4 className="features_title">Find best products &#38; deals</h4>
                <p>Explore thousands of products from local sellers near you, get your order in only few minutes</p>
              </div> {/* single features */}
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.6s">
                <i className="lni lni-bolt" />
                <h4 className="features_title">Always be up-to-date</h4>
                <p>Get instant news and updates from your community, never miss deals and promotions again! </p>
              </div> {/* single features */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
      {/*====== FEATURES PART ENDS ======*/}
    </Fragment>
    )
  }
}

export default LandingFeatures