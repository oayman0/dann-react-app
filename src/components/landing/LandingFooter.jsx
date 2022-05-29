import React, { Component, Fragment } from 'react'

 class LandingFooter extends Component {
  render() {
    return (
      <Fragment>

          {/*====== FOOTER PART START ======*/}
        <footer id="footer" className="footer_area">
          <div className="container">
            <div className="footer_wrapper text-center d-lg-flex align-items-center justify-content-between">
              <p className="credit">Designed and Developed by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
              <div className="footer_social pt-15">
                <ul>
                  <li><a href="#0"><i className="lni lni-facebook-original" /></a></li>
                  <li><a href="#0"><i className="lni lni-twitter-original" /></a></li>
                  <li><a href="#0"><i className="lni lni-instagram-original" /></a></li>
                  <li><a href="#0"><i className="lni lni-linkedin-original" /></a></li>
                </ul>
              </div> {/* footer social */}
            </div> {/* footer wrapper */}
          </div> {/* container */}
        </footer>
        {/*====== FOOTER PART ENDS ======*/}

        {/*====== BACK TOP TOP PART START ======

        <a href="#" className="back-to-top"><i className="lni lni-chevron-up" /></a>
        {/*====== BACK TOP TOP PART ENDS ======*/}
        
      </Fragment>
    )
  }
}

export default LandingFooter