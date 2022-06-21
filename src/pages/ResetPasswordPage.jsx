import React, { Component, Fragment } from 'react'
import FooterSocial from '../components/common/FooterSocial'
import ResetPassword from '../components/common/ResetPassword'
import LandingNavbarLogin from '../components/landing/LandingNavbarLogin'


class ResetPasswordPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
     }

     render() {
          return (
              <Fragment> 
                   <LandingNavbarLogin/>
               <ResetPassword />  
               
               <div className="Desktop">
               <FooterSocial/>
               </div>

               
               
          </Fragment>
          )
     }
}

export default ResetPasswordPage
