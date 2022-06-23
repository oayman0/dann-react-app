import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
// import MegaMenuMobile from '../home/MegaMenuMobile';
import MegaMenuAll from '../home/MegaMenuAll';
import axios from 'axios';
import AppURL from '../../api/AppURL';


 class NavMenuMobile extends Component {

     constructor(){
          super();
          this.state={
               SideNavState: "sideNavClose",
               ContentOverState: "ContentOverlayClose",
               cartCount:0

          }
     }

     componentDidMount(){
          let product_code = this.props.product_code;
          axios.get(AppURL.CartCount(product_code)).then((response)=>{
               this.setState({cartCount:response.data})

          })
     }



     MenuBarClickHandler=()=>{
          this.SideNavOpenClose();
     }

     ContentOverlayClickHandler=()=>{
          this.SideNavOpenClose();
     }


     SideNavOpenClose=()=>{
          let SideNavState = this.state.SideNavState;
          let ContentOverState = this.state.ContentOverState;
          if(SideNavState==="sideNavOpen"){
               this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})

          }
          else{
               this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
          }
     }


     render() {
          return (
               <Fragment>
                    <div className="TopSectionDown  ">
 

    <Container fluid={"true"} className="fixed-top shadow-sm p-0 mb-0 bg-light">
         <Row>
              <Col lg={4} md={4} sm={12} xs={12}>

   <Button onClick={this.MenuBarClickHandler} className="btn navMenuMobileButton mt-2"><i className="fa h3 fa-bars"></i>  </Button> 

              <Link to="/"> <img className="nav-logo nav-logoMobile ms-3 " src={Logo} /> </Link>
              <div  className="float-end d-inline p-2 pb-0 mt-1 " >
              {/* <Link to="/favourite" className="btn ms-2"><i className="far h3 fa-heart "></i> </Link>  */}
              <Link to="/notification" className="btn ms-2"><i className="far h3 fa-bell navbaricons"></i>     </Link>
              <Link to="/messages" className="btn ms-3"><i class="far h3 fa-comment navbaricons"></i></Link>
              <Link to="/cart" className="btn ms-2 navbaricons"><i class="fab h3 fa-opencart navbaricons"></i> {this.state.cartCount} </Link>
              </div>

              </Col> 
           
         </Row>
   
    </Container>

          <div className={this.state.SideNavState}>
                {/* <MegaMenuMobile /> */}
                <MegaMenuAll />
          </div>

               <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

               </div>



  
  </div>
               </Fragment>
          )
     } 
}

export default NavMenuMobile
