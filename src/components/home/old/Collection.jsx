import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import CollectionLoading from '../PlaceHolder/CollectionLoading';

class Collection extends Component {

     constructor(){
          super();
          this.state={
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none"               
          }
     }


     componentDidMount(){
          axios.get(AppURL.ProductListByRemark("COLLECTION")).then(response =>{
               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:" "});         

          }).catch(error=>{

          });
     } 


     render() {

          const CollectionList = this.state.ProductData;
          const MyView = CollectionList.map((CollectionList,i)=>{

          if(CollectionList.special_price=="na"){
               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="image-box card w-100">
               <img className="center w-75" src={CollectionList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{CollectionList.title}</p>
               <p className="product-price-on-card">  EGP {CollectionList.price}</p>
                    
               </Card.Body>
               </Card>          
               </Col>

          }
          else{

               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="image-box card w-100">
               <img className="center w-75" src={CollectionList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{CollectionList.title}</p>
               <p className="product-price-on-card"> <strike className="text-secondary"> EGP {CollectionList.price}</strike>  EGP {CollectionList.special_price}</p>
                    
               </Card.Body>
               </Card>          
               </Col>

          } 
 
          });




          return (
              <Fragment>
                   <CollectionLoading  isLoading={this.state.isLoading} />

                   <div className={this.state.mainDiv}>

                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> Product Collection</h2>
          <p>Some of our exclusive collection, you may like</p>
          </div>

     <Row> 
               {MyView}
     </Row>
                   </Container>
                   </div>
              </Fragment>
          )
     }
}

export default Collection