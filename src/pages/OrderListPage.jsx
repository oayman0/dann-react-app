import React, { Component, Fragment } from 'react'
import OrderList from '../components/Cart/OrderList'
import FooterDesktop from '../components/common/FooterDesktop'

import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import AppBar from '../components/common/AppBar'
import FooterSocial from '../components/common/FooterSocial'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'
 
import {Redirect} from 'react-router-dom'


export class OrderListPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
     } 

     render() {
          
 if(!localStorage.getItem('token')){
     return <Redirect  to="/landing" />}
   
   
   

          const User = this.props.user;

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
                    <Col lg={10} md={10} sm={12}xs={12}>
{/* Insert Content Here */}

<OrderList user={User} /> 


{/* End Of Content Here */}
                    <FooterDesktop/>                    
                    <div className=" Desktop">
                    <FooterSocial/></div>
                    <div className=" Mobile pb-5">
                    <FooterSocial/></div>              
                    </Col> 
                </Row>
            </Container>

          
               
          </Fragment>
          )
     }
}

export default OrderListPage
