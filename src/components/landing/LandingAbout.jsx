import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

import About from '../../assets/landingAssets/images/about.jpg';


class LandingAbout extends Component {
  render() {
    return (
      <Fragment>


           {/*====== ABOUT PART START ======*/}
      <section id="about" className="pt-130">
        <div className="about_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about_content pt-120 pb-130">
                  <div className="section_title pb">
                    <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">About Our
                      Creative Platform</h4>
                    <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Dann Business Park, Egypt's first social commerce platform, that combines all the pros of social media networks along with the power of online marketplaces, A powerful website and mobile app, specially designed for local small and micro businesses.</p>
                    <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.6s">We aim to make online local communities for trade and business in each city of Egypt, to boost our economy, and help people grow their businesses.  </p>
                  </div> {/* section title */}
                  <Link to="/signup" ><div  className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.7s">Sign Up</div> </Link>
                </div> {/* about content */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
          <div className="about_image bg_cover wow fadeInLeft" data-wow-duration="1.3s" data-wow-delay="0.2s" style={{backgroundImage: `url(${About})`}}>
            <div className="image_content">
              <h4 className="experience">Shop<br/><span> Local </span></h4>
            </div>
          </div> {/* about image */}
        </div>
      </section>
      {/*====== ABOUT PART ENDS ======*/}

      </Fragment>
    )
  }
}

export default LandingAbout