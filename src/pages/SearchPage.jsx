import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import axios from 'axios'
import SearchList from '../components/ProductDetails/SearchList'
import AppBar from '../components/common/AppBar'
import FooterSocial from '../components/common/FooterSocial'
import SidebarDesktop from '../components/common/SidebarDesktop'
import {Container,Row,Col,Card} from 'react-bootstrap'

class SearchPage extends Component {

     constructor({match}){
          super(); 
          this.state={
               SearchKey:match.params.searchkey,
               ProductData:[] 
          }
     }

     componentDidMount(){
          window.scroll(0,0)
          // alert(this.state.Category);
          axios.get(AppURL.ProductBySearch(this.state.SearchKey)).then(response =>{
               
               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });

     } 

     render() {
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

<SearchList SearchKey={this.state.SearchKey} ProductData={this.state.ProductData} /> 

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

export default SearchPage
