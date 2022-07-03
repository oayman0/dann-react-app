import React, { Component, Fragment } from 'react'
// import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'
import AppBar from '../components/common/AppBar'
// import FooterSocial from '../components/common/FooterSocial'
import RightBar from '../components/explore/RightBar'
import {Redirect} from 'react-router-dom'
import Post from '../components/home/Post'
import Skincare from '../assets/images/post/skincare.jpg';
import Bags from '../assets/images/post/bagsjpg.jpg';
import Velo from '../assets/images/post/Velo.jpg';
import Shazly from '../assets/images/post/Shazly.jpg';
import Bambino from '../assets/images/post/Bambino.jpg';
import Qwareer from '../assets/images/post/Qwareer.jpg';
import Mekkawy from '../assets/images/post/Mekkawy.jpg';
import Hamada from '../assets/images/post/Hamada.jpg';
import School from '../assets/images/post/School.jpg';

export class ExplorePage extends Component {

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

                    <Col lg={6} md={6} sm={12}xs={12} className="min-vh-100" style={{ padding: 15 }}>
                         <div style={{ padding: 15 , marginBottom: 15 , textAlign: "center", backgroundColor: "rgb(222, 238, 252)", color: "#495158", fontSize: "18px"}}>
                              Trending
                         </div>
                    
                         <Post displayName="El Mekkawy" username="Mekkawy" text="Thinking about renewing your house now is the best time with multiple offers and sales in our different branches " avatar = {Mekkawy}/> 
                         <Post displayName="Elshazly" username="Elshazly" text="Back to school needs some shopping and we got you in this " avatar = {Shazly} image={School}/> 
                         <Post displayName="Qwareer" username="Qwareer" text="It's time to shine with our new collection of makeup and skin care products, don't forget to ask about our unique offer " avatar = {Qwareer} image={Skincare}/> 
                         <Post displayName="Velo" username="Velo" text="Discover the new collection for women and men, featuring lightweight knits, pastel sweats, super soft T-shirts, classic jeans, dresses and more" avatar = {Velo}/> 
                         <Post displayName="Bambino" username="Bambino" text="Make your baby happy with our new collection, all what you need for your children is now in one place" avatar = {Bambino}/> 
                         <Post displayName="Hamada" username="Hamada" text="New bags and accessories collection has arrived, make your outfit stunning " avatar = {Hamada} image={Bags}/> 
                         <Post displayName="Elshazly" username="Shazly" text="Do you like reading books? 50%off discount when buying more than 2 books" avatar = {Shazly}/> 

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

export default ExplorePage