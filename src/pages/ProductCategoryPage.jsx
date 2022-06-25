import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import AppBar from '../components/common/AppBar'
import FooterSocial from '../components/common/FooterSocial'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'

import {Redirect} from 'react-router-dom'

 class ProductCategoryPage extends Component {

     constructor({match}){
          super(); 
          this.state={
               Category:match.params.category,
               ProductData:[] 
          }
     }

     componentDidMount(){
          window.scroll(0,0)
          // alert(this.state.Category);
          axios.get(AppURL.ProductListByCategory(this.state.Category)).then(response =>{
               
               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });

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
{/* Insert Content Here */}


<Category Category={this.state.Category} ProductData={this.state.ProductData} /> 
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

export default ProductCategoryPage
