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
import Post from '../components/home/Post'
import PostInput from '../components/others/PostInput'
import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.jpg';
import postimage from '../assets/images/product/product1.png';

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
                         <div  style={{ margin: 20 }}>
                              <PostInput />
                         </div>
                         <Post displayName="Omar Ayman" username="omar_96" text="New sales in Apprel House store" avatar = {profile1}/> 
                         <Post displayName="Ahmed Gamal" username="jimmy" text="I just bought this" avatar = {profile2} image={postimage}/> 
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