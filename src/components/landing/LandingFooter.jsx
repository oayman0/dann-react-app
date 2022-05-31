import React, { Component, Fragment } from 'react'

 class LandingFooter extends Component {
  render() {
    return (
      <Fragment>

          {/*====== FOOTER PART START ======*/}
        <footer id="footer" className="footer_area">
          <div className="container p-4">
            <div className="footer_wrapper text-center d-lg-flex align-items-center justify-content-between">
              
              <div className="footer_social pt-15">
                <ul>
                  <li><a target="_blank" href="https://www.facebook.com/"><i className="lni lni-facebook-original" /></a></li>
                  <li><a target="_blank" href="https://twitter.com/"><i className="lni lni-twitter-original" /></a></li>
                  <li><a target="_blank"  href="https://www.instagram.com/"><i className="lni lni-instagram-original" /></a></li>
                  <li><a target="_blank"  href="https://www.linkedin.com/"><i className="lni lni-linkedin-original" /></a></li>
              
                  <li><a target="_blank"  href="https://discord.com/"><i className="lni lni-discord"/></a></li>
                  <li><a target="_blank"  href="https://github.com/"><i className="lni lni-github-original" /></a></li>
                </ul>
              </div> {/* footer social */}
              <p className="credit">Copyright © Dann Business Park 2022</p>
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