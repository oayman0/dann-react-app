import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import LandingFooter from '../landing/LandingFooter'
// import Apple from '../../assets/images/apple.png'
// import Google from '../../assets/images/google.png'

export class FooterDesktop extends Component {
     render() {
          return (
               <Fragment>
  
                    <Container className="footerback m-0 mt-5 pt-3 shadow-sm" >
                    
     <Row className="p-3 my-0">
          <Col className="p-2" lg={4} md={4} sm={6} xs={6}>
          <h5 className="footer-menu-title mb-3">The Platform</h5>
          <Link to="/about" className="footer-link"> About Dann</Link><br></br>
          <Link to="/" className="footer-link"> Sell on Dann</Link><br></br>
          <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
          </Col>

          <Col className="p-2"   lg={4} md={4} sm={6} xs={6}>
          <h5 className="footer-menu-title mb-3">More Info</h5>
          <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
          <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
          <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
          </Col>

          <Col className="p-2"  lg={4} md={4} sm={6} xs={12}>

          <div className="download_app_content">
          <h5 className="footer-menu-title">Download App</h5>
          <ul className="pt-1">
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
                </div>


           </Col>

     </Row>
     
                    </Container>

     

               

               </Fragment>
          )
     }
}

export default FooterDesktop