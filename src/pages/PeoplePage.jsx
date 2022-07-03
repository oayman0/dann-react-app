import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col} from 'react-bootstrap'
import AppBar from '../components/common/AppBar'
import FooterSocial from '../components/common/FooterSocial'
import {Redirect} from 'react-router-dom'
import Card from '../components/others/Card'
import book from '../assets/images/book_store.png';
import ad from '../assets/images/ad.png';
import mob from '../assets/images/mob.png';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';



export class PeoplePage extends Component {

  //check

  componentDidMount(){
    window.scroll(0,0)
}

     render() { 
          
 if(!localStorage.getItem('token')){
     return <Redirect  to="/landing" />}
   
   
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
                    <div style={{textAlign: 'left', fontSize: '3em', margin: '10px 0 0 20px'}}>Stores Nearby</div>
                              <div style = {{ display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   padding: "25px",
                                   flexWrap: "wrap" }}>

                                   

                                   <Card title='El-Khan' subtitle='New book store' img = {book} followers = "15" style={{margin: "20px"}}/>
                                   <Card title='Alexandra Davis' subtitle='Clothes store' img = {ad} followers = "33" style={{margin: "20px"}}/>
                                   <Card title='Google' subtitle='Mobile store' img = {mob} followers = "21" style={{margin: "20px"}}/>
                              </div>
                              <div style={{textAlign: 'left', fontSize: '3em', margin: '10px 0 0 20px'}}>People To Follow</div>
                              <div style = {{ display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   padding: "25px",
                                   flexWrap: "wrap"}}>

                                   

                                   <Card title='Eng. Mahmoud Khalil' subtitle='Tech' img = {image5} followers = "42" style={{margin: "20px"}}/>
                                   <Card title='Mai El-Zoheiry' subtitle='Makeup Artist' img = {image6} followers = "52" style={{margin: "20px"}}/>
                                   <Card title='Ramez Gamal' subtitle='Handmade Accessories' img = {image7} followers = "17" style={{margin: "20px"}}/>
                              </div>
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

export default PeoplePage