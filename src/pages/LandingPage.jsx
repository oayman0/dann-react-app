import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import WOW from 'wowjs';

import LandingHeader from '../components/landing/LandingHeader'
import LandingFeatures from '../components/landing/LandingFeatures'
import LandingAbout from '../components/landing/LandingAbout'
import LandingServices from '../components/landing/LandingServices'





import LandingContact from '../components/landing/LandingContact.jsx'
import LandingFooter from '../components/landing/LandingFooter.jsx'
import LandingDownload from '../components/landing/LandingDownload';
import FloatingActionButtons from '../components/landing/LandingFloating';


import LandingNavbar from '../components/landing/LandingNavbar';
import AppURL from '../api/AppURL';
import axios from 'axios';


export class LandingPage extends Component {
     

  //check
  componentDidMount(){
          window.scroll(0,0);

          //consume visitor api
          this.GetVisitorDetails();

          //check
          new WOW.WOW({
               live: false
               // ,
               // mobile: false
          }).init();
         
  }
     GetVisitorDetails =()=>{
          axios.get(AppURL.VisitorDetails).then().catch()
     }

     render() {
          console.log("err");
          if(localStorage.getItem('token')){
               return <Redirect  to="/" />
          }
          return (
               <Fragment>
                    <LandingNavbar/> 
               <LandingHeader/>
               <LandingFeatures/>
               <LandingAbout/>
               <LandingServices/>
             
               <LandingDownload/>
               <LandingContact/>
               <LandingFooter/>
               <FloatingActionButtons/>
               </Fragment>
          )
     }
}

export default LandingPage