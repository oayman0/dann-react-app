import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'

import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Purchase from '../components/others/Purchase'

class PurchasePage extends Component {
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

               <Purchase /> 
               
               <div className="Desktop">
               <FooterDesktop/>
               </div>

               
               
          </Fragment>
          )
     }
}

export default PurchasePage
