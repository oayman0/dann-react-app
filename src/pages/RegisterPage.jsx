import React, { Component, Fragment } from 'react'
import FooterSocial from '../components/common/FooterSocial'
import Register from '../components/common/Register'
import LandingNavbarLogin from '../components/landing/LandingNavbarLogin'



export class RegisterPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
     }

     render() {

          const setUser = this.props.setUser;
          const user = this.props.user;

          return (
               <Fragment> 

<LandingNavbarLogin/>
         

               <Register setUser={setUser} user ={user}  />  
               
               <div className="Desktop">
               <FooterSocial/>
               
               </div>

               
               
          </Fragment>
          )
     } 
}

export default RegisterPage
