import React, { Component, Fragment } from 'react';

import WOW from 'wowjs';

import LandingHeader from '../components/landing/LandingHeader'
import LandingFeatures from '../components/landing/LandingFeatures'
import LandingAbout from '../components/landing/LandingAbout'
import LandingServices from '../components/landing/LandingServices'
import LandingPortfolio from '../components/landing/LandingPortfolio'
import LandingPricing from '../components/landing/LandingPricing'
import LandingTeam from '../components/landing/LandingTeam'
import LandingTestimonial from '../components/landing/LandingTestimonial.jsx'
import LandingBlog from '../components/landing/LandingBlog.jsx'
import LandingContact from '../components/landing/LandingContact.jsx'
import LandingFooter from '../components/landing/LandingFooter.jsx'
import LandingDownload from '../components/landing/LandingDownload';
import FloatingActionButtons from '../components/landing/LandingFloating';

import {Container,Row,Col,Card} from 'react-bootstrap'
import LandingNavbar from '../components/landing/LandingNavbar';


export class LandingPage extends Component {

  //check
  componentDidMount(){
    window.scroll(0,0);

    //check
    new WOW.WOW({
     live: false
     // ,
     // mobile: false
 }).init();

}
     render() {
          return (
               <Fragment>
               
                    
                    
                    <LandingNavbar/> 
               <LandingHeader/>
               <LandingFeatures/>
               <LandingAbout/>
               <LandingServices/>
               {/* <LandingPortfolio/>
               <LandingPricing/>
               <LandingTeam/>
               <LandingTestimonial/>
               <LandingBlog/> */}
               <LandingDownload/>
               <LandingContact/>
               <LandingFooter/>
               <FloatingActionButtons/>
      
               </Fragment>
          )
     }
}

export default LandingPage