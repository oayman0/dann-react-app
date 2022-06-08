import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import LandingContact from '../landing/LandingContact'

export class Contact extends Component {
     render() {
          return (
               <Fragment>
               <Container>
               <Row className="p-2">
               <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <Row className="text-center">
                         <Row className="d-flex justify-content-center">
                 <LandingContact/>
               {/*  
               <Form className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US </h4>
                    <h6 className="section-sub-title">Please Contact With Us </h6>
                    <input className="form-control m-2" type="text" placeholder="Enter Mobile Number" />
                    <input className="form-control m-2" type="email" placeholder="Enter Email" />
                    <input className="form-control m-2" type="text" placeholder="Enter Your Message" />
                    <Button className="btn btn-block m-2 site-btn-login"> Send </Button>
               </Form>
               */}
                                   </Row>
                    <Row className="p-5  m-0">
                         <br/><br/><br/><br/>
                    <p className="section-title-contact pb-5">
                    <b>Dann Business Park </b><br/>
                      Faculty of Computers and Information Sciences,
                      Mansoura University<br/>Email: DannBusinessPark@gmail.com
                    </p>
                   <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D9%A1%D8%B4%D8%A7%D8%B1%D8%B9%D8%8C%20El%20Gomhouria%20St,%20Dakahlia%20Governorate%2035516+(Dann%20Business%20Park)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                   
                                   </Row>
                              </Row>
               </Col>
          </Row>
          </Container>
          </Fragment>
          )
     }
}

export default Contact