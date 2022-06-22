import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";
import {Container, Row, Col,Button} from 'react-bootstrap';
import Profile1 from '../../assets/images/profile1.png'
import Townteam from '../../assets/images/townteam.jpg'
import Mensclub from '../../assets/images/mensclub.jpg'
import Naguib from '../../assets/images/naguib.jpg'
// import FooterDesktop from '../common/FooterDesktop';
// import FooterSocial from '../common/FooterSocial'


class RightBar extends Component {

  logout = () => {
    localStorage.clear();
}

  render() {
    return (
 
<Fragment >

<div className="rightbar shadow-sm Desktop">

<div className="rightbartop">
    <h4 className='ms-4'>Trending Now</h4>

    


    <Container fluid={"true"}> 
 <Link to="/people" className="btn">
<Row>
     <Col md={3} lg={3}><img src={Townteam} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Town Team</h4><br/>
     <h5>Apparel, Clothing</h5></Col>
     <Col md={3} lg={3}>  <Button size="sm" className="rightbarbutton"as={Link} to="/people">Follow</Button></Col>
    </Row>
 </Link>


 
 <Link to="/people" className="btn">

<Row>
     <Col md={3} lg={3}><img src={Mensclub} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Men's Club</h4><br/>
     <h5>Retail, Shopping, clothing</h5></Col>
     <Col md={3} lg={3}>  <Button size="sm"  className="rightbarbutton"as={Link} to="/people">Follow</Button></Col>
    </Row>
 </Link>
 </Container>


 </div> {/*End of RightbarTop  */}

<div className="rightbarDown">
    <h4 className="ms-4">Add to your feed</h4>

 <Link to="/people" className="btn">
<Container fluid={"true"}><Row>
     <Col md={3} lg={3}><img src={Naguib} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Naguib Sawiris</h4><br/>
     <h5>Egyptian Businessman</h5></Col>
     <Col md={3} lg={3}>  <Button size="sm"  className="rightbarbutton"as={Link} to="/people">Follow</Button></Col>
    </Row>
    </Container>

 </Link>

 <Link to="/people" className="btn">
<Container fluid={"true"}><Row>
     <Col md={3} lg={3}><img src={Profile1} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Omar Ayman</h4><br/>
     <h5>Software Engineer</h5></Col>
     <Col md={3} lg={3}>  <Button size="sm"  className="rightbarbutton"as={Link} to="/people">Follow</Button></Col>
    </Row>
    </Container>

 </Link>

 </div>{/*End of RightbarDown  */}

{/* <FooterDesktop/> */}
{/* <FooterSocial/> */}

<div className="footer_wrapper text-center d-lg-flex align-items-center justify-content-center">
    <div className="rightbar_social pt-3 ">
               <ul className='footer_socialD '>
                 <li><a target="_blank" href="https://www.facebook.com/Dann-Business-Park-111894944887894/"><i className="lni lni-facebook-original " /></a></li>
                 <li><a target="_blank" href="https://twitter.com/"><i className="lni lni-twitter-original" /></a></li>
                 <li><a target="_blank"  href="https://www.instagram.com/"><i className="lni lni-instagram-original" /></a></li>
                 <li><a target="_blank"  href="https://www.linkedin.com/"><i className="lni lni-linkedin-original" /></a></li>
                 <li><a target="_blank"  href="https://discord.com/"><i className="lni lni-discord"/></a></li>
                 <li><a target="_blank"  href="https://github.com/"><i className="lni lni-github-original" /></a></li>
               </ul>
               </div>
             </div> {/* footer social */}


<p className=" text-secondary p-3 d-flex justify-content-center">Copyright © Dann Business Park 2022</p>


</div>
</Fragment>
    )
  }
}

export default RightBar