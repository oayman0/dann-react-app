import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";
import {Container, Row, Col,Button} from 'react-bootstrap';
import Profile1 from '../../assets/images/profile1.png'


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
     <Col md={3} lg={3}><img src={Profile1} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Omar Ayman</h4><br/>
     <h5>Software Engineer</h5></Col>
     <Col md={3} lg={3}>  <Button size="sm" className="rightbarbutton"as={Link} to="/people">Follow</Button></Col>
    </Row>
 </Link>


 
 <Link to="/people" className="btn">

<Row>
     <Col md={3} lg={3}><img src={Profile1} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Omar Ayman</h4><br/>
     <h5>Software Engineer</h5></Col>
     <Col md={3} lg={3}>  <Button size="sm"  className="rightbarbutton"as={Link} to="/people">Follow</Button></Col>
    </Row>
 </Link>
 </Container>


 </div> {/*End of RightbarTop  */}

<div className="rightbarDown">
    <h4 className="ms-4">Add to your feed</h4>

 <Link to="/people" className="btn">
<Container fluid={"true"}><Row>
     <Col md={3} lg={3}><img src={Profile1} alt="img" className="rounded-circle"/></Col>
     <Col md={6} lg={6}> <h4>Omar Ayman</h4><br/>
     <h5>Software Engineer</h5></Col>
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
 




 </div>

</div>
</Fragment>
    )
  }
}

export default RightBar