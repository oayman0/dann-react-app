import React, { Component, Fragment } from 'react'

import Logo from '../../assets/landingAssets/images/logo.svg';
import Background from '../../assets/landingAssets/images/hero.jpg';


 class LandingHeader extends Component {
  render() {
    return (
 <Fragment>

     {/*====== HEADER PART START ======*/}
 <section id="home" className="header_area">
      
        <div className="header_hero">
          <div className="single_hero bg_cover d-flex align-items-center" style={{backgroundImage: `url(${Background})`}}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="hero_content text-center">
                    <h2 className="hero_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Simple Bootstrap 5<br /> Website Template</h2>
                    <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">A super simple website template based on Bootstrap 5 and HTML5, comes with all essential <br className="d-none d-xl-block" /> elements &amp; features to get started and ready to use for almost any type of business websites.</p>
                    <a href="#features" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Explore</a>
                  </div> {/* hero content */}
                </div>
              </div> {/* row */}
            </div> {/* container */}
          </div> {/* single hero */}
        </div> {/* header hero */}
      </section>
      {/*====== HEADER PART ENDS ======*/}


 </Fragment>
    )
  }
}

export default LandingHeader