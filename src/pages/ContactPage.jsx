import React, { Component, Fragment } from 'react'
// import Contact from '../components/common/Contact'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import LandingContact from '../components/landing/LandingContact'


class ContactPage extends Component {
     
     //check
     componentDidMount(){
          window.scroll(0,0)
     }     
     render() {
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>
               <div className="Mobile">
               <NavMenuMobile />  
               </div>       
               <LandingContact/>                
               

               <div className="Desktop">
               <FooterDesktop/>
               </div>
               <div className="Mobile">
               <FooterMobile/>
               </div>
          </Fragment>
          )
     }
}

export default ContactPage