import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
     render() {
          return (
               <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         
        <HomeSlider />
                         {/* <Row>
                              <Col lg={3} md={3} sm={12}>
                              <MegaMenu />
                              </Col>

                              <Col lg={9} md={9} sm={12}>
                              <HomeSlider />
                              </Col>
                         </Row> */}
                    </Container>
               </Fragment>
          )
     }
}

export default HomeTop