import React, { Component, Fragment } from 'react'
// import FooterDesktop from '../components/common/FooterDesktop'

import FooterSocial from '../components/common/FooterSocial'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'
import LandingNavbarLogin from '../components/landing/LandingNavbarLogin'


class UserLoginPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
     }
     
     render() {

          const setUser = this.props.setUser;
          const user = this.props.user;
          
          return (
               <Fragment> 
               {/* <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                        */}
               <LandingNavbarLogin/>
               <UserLogin setUser={setUser} user ={user} /> 
               
               <div className="Desktop">
               {/* <FooterDesktop/> */}
               <FooterSocial/>
               </div>

               
               
          </Fragment>
          )
     }
}

export default UserLoginPage
