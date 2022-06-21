import React, { Component, Fragment } from 'react'
import FooterSocial from '../components/common/FooterSocial'
import ForgetPassword from '../components/common/ForgetPassword'
import LandingNavbarLogin from '../components/landing/LandingNavbarLogin'

class ForgetPasswordPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
     }
     render() {
          return (
               <Fragment>         
                   <LandingNavbarLogin/>
               <ForgetPassword />  
               <div className="Desktop">
               <FooterSocial/>
               </div>
          </Fragment>
          )
     }
}
export default ForgetPasswordPage
