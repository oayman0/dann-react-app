import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'

import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import axios from 'axios'
import SliderLoading from '../components/PlaceHolder/SliderLoading'
import AppBar from '../components/common/AppBar'
import FooterSocial from '../components/common/FooterSocial'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'


class ProductDetailsPage extends Component {

     constructor({match}){
          super(); 
          this.state={
               code:match.params.code,
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none" 
          }
     }

     componentDidMount(){
          window.scroll(0,0)

          axios.get(AppURL.ProductDetails(this.state.code)).then(response =>{
               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:""});         

          }).catch(error=>{

          });
     }

     render() {

          const User = this.props.user;

          if(this.state.mainDiv == "d-none"){

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


<SliderLoading isLoading={this.state.isLoading} />

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


          }else{


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

<ProductDetails data={this.state.ProductData} user={User} /> 


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
}

export default ProductDetailsPage
