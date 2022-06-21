import React, { Component, Fragment } from 'react'

import Shape1 from '../../assets/landingAssets/images/shape-5.svg';
import Shape2 from '../../assets/landingAssets/images/shape-6.png';
import Download from '../../assets/landingAssets/images/download.png';


 class LandingDownload extends Component {
  render() {
    return (

     <Fragment>


{/*====== DOWNLOAD APP PART START ======*/}
<section id="download" className="download_app_area pt-80 mb-80">
          <div className="container">
            <div className="download_app">
              <div className="download_shape">
                <img src={Shape1} alt="shape" />
              </div>
              <div className="download_shape_2">
                <img src={Shape2} alt="shape" />
              </div>
              <div className="download_app_content">
                <h3 className="download_title">Download The App</h3>
                <p>Download our mobile app, and shop on the go</p>
                <ul>
                  <li>
                    <a target="_blank" className="d-flex align-items-center" href="https://play.google.com/">
                      <span className="icon">
                        <i className="lni lni-play-store" />
                      </span>
                      <span className="content media-body">
                        <h6 className="title">Play Store</h6>
                        <p>Download Now</p>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" className="d-flex align-items-center" href="https://www.apple.com/eg/app-store/">
                      <span className="icon">
                        <i className="lni lni-apple" />
                      </span>
                      <span className="content">
                        <h6 className="title">App Store</h6>
                        <p>Download Now</p>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>  {/* download app content */}
            </div> {/* download app */}
          </div> {/* container */}
          <div className="download_app_image d-none d-lg-flex align-items-end">
            <div className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
              <img src={Download} alt="download" />
            </div> {/* image */}
          </div> {/* download app image */}
        </section>
        {/*====== DOWNLOAD APP PART ENDS ======*/}


     </Fragment>
    )
  }
}

export default LandingDownload