import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
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

export class ExplorePage extends Component {

  //check

  componentDidMount(){
    window.scroll(0,0)
}

     render() { 
          return (   
               <Fragment> 

   <Container className="p-0 m-0 overflow-hidden" fluid={true}>
     <Row>
     <div className="Desktop">
               <NavMenuDesktop />
                    </div>
                    <div className="Mobile">
                    <NavMenuMobile />  
                    </div>          
     </Row>
              <Row>
                    <Col lg={2} md={2} sm={2} xs={2}>      
                      <SidebarDesktop />
                    </Col>
                    <Col lg={10} md={10} sm={10}xs={10}>


{/* Insert Content Here */}
                    










                    
                    
                    <div className="Desktop">
                    <FooterDesktop/>
                    </div>

                    <div className="Mobile">
                    <FooterMobile/>
                    </div>
              
{/* End Of Content Here */}


              
                    </Col> 
                </Row>

            </Container>
               </Fragment>
          )
     }
}

export default ExplorePage