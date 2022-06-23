import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


 class FooterSocial extends Component {
  render() {
    return (
     <Fragment>
    <Container fluid={true} className="text-center m-0 p-4 footer_end" >
                   
                   <Row>
                   <div className="footer_wrapper text-center d-lg-flex align-items-center justify-content-between">
    <div className="footer_social ">
               <ul className='footer_socialD'>
                 <li><a target="_blank" href="https://www.facebook.com/Dann-Business-Park-111894944887894/"><i className="lni lni-facebook-original" /></a></li>
                 <li><a target="_blank" href="https://twitter.com/dann_business"><i className="lni lni-twitter-original" /></a></li>
                 <li><a target="_blank"  href="https://www.instagram.com/dann.business.park/"><i className="lni lni-instagram-original" /></a></li>
                 <li><a target="_blank"  href="https://www.linkedin.com/"><i className="lni lni-linkedin-original" /></a></li>
                 <li><a target="_blank"  href="https://discord.com/"><i className="lni lni-discord"/></a></li>
                 <li><a target="_blank"  href="https://github.com/DannBusinesspark1"><i className="lni lni-github-original" /></a></li>
               </ul>
               </div>
               <p className="credit">Copyright © Dann Business Park 2022</p>
             </div> {/* footer social */}
    </Row>
         
                   
              </Container> 
     </Fragment>
    )
  }
}

export default FooterSocial