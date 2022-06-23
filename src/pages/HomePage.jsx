import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'
import AppBar from '../components/common/AppBar'
import FooterSocial from '../components/common/FooterSocial'
import RightBar from '../components/explore/RightBar'
import {Redirect} from 'react-router-dom'


export class HomePage extends Component {

  //check

  componentDidMount(){
    window.scroll(0,0)
}

     render() { 
          if(!localStorage.getItem('token')){
               return <Redirect  to="/landing" />
          }
          return (   
               <Fragment> 

<Container className="p-0 m-0 overflow-hidden" fluid={true}>
     <Row>
     <div className="Desktop">
               <NavMenuDesktop /></div>
                    <div className="Mobile">
                    <AppBar/>
                    <NavMenuMobile />  
                    </div>          
     </Row>
              <Row>
                    <Col lg={2} md={2} sm={2} xs={2}>      
                         <SidebarDesktop />  </Col>

                    <Col lg={6} md={6} sm={12}xs={12} className="min-vh-100">
{/* Insert Content Here */}


{/* End Of Content Here */}      
                    </Col> 

                    <Col lg={4} md={4} sm={4} xs={4}>      
                        
                         <RightBar/>
                           </Col>
                </Row>
            </Container>




               </Fragment>
          )
     }
}

export default HomePage