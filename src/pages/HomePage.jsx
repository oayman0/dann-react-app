import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'

import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NewArrival from '../components/home/NewArrival'

import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import AppBar from '../components/common/AppBar'
import AppBarTop from '../components/common/AppBarTop'
import FooterSocial from '../components/common/FooterSocial'

export class HomePage extends Component {
    

  //check

  componentDidMount(){
    window.scroll(0,0);
//     this.GetVisitorDetails();
}
// GetVisitorDetails =()=>{
//      axios.get(AppURL.VisitorDetails).then().catch()
// }

     render() { 
          if(!localStorage.getItem('token')){
               return <Redirect  to="/landing" />
          }
          return (   
               <Fragment> 

   <Container className="p-0 m-0 overflow-hidden" fluid={true}>
     <Row>
     <div className="Desktop">
               <NavMenuDesktop />
                    </div>
                    {/* <AppBarTop/> */}

                    <div className="Mobile">

                    <AppBar/>

                    <NavMenuMobile />  
                    </div>          
     </Row>
              <Row>
                    <Col lg={2} md={2} sm={2} xs={2}>      
                      <SidebarDesktop />
                    </Col>
                    <Col lg={10} md={10} sm={12}xs={12}>


{/* Insert Content Here */}
                    
               <HomeTop/>

                    <FeaturedProducts />
                    <NewArrival />
                    <Categories />
                    <Collection />                    
                
                    <FooterDesktop/>                    
              
                    <div className=" Desktop">
                    <FooterSocial/>
                    </div>
                    <div className=" Mobile pb-5">
                    <FooterSocial/>
                    </div>
{/* End Of Content Here */}


              
                    </Col> 
                </Row>

            </Container>
               </Fragment>
          )
     }
}

export default HomePage