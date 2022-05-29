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
                <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Why Choose Us</h4>
                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                <i className="lni lni-layers" />
                <h4 className="features_title">Bootstrap 5 Based</h4>
                <p>Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore magna .</p>
              </div> {/* single features */}
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                <i className="lni lni-layout" />
                <h4 className="features_title">Clean Design</h4>
                <p>Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore magna .</p>
              </div> {/* single features */}
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.6s">
                <i className="lni lni-bolt" />
                <h4 className="features_title">Cutting-edge Features</h4>
                <p>Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore magna .</p>
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