import React, { Component, Fragment } from 'react'
import { Routes ,Route } from 'react-router-dom';
 import HomePage from '../pages/HomePage';
 import UserLoginPage from '../pages/UserLoginPage';
 import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
 import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import ExplorePage from '../pages/ExplorePage';
import MarketPlacePage from '../pages/MarketPlacePage';
import PeoplePage from '../pages/PeoplePage';
import MessagesPage from '../pages/MessagesPage';
import ProfilePage from '../pages/ProfilePage';

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';

// import SidebarTest from '../components/common/SidebarTest';


 class AppRoute extends Component {
  render() {
    return (
      <Fragment>

          <Routes>
                 {/*v5: <Route exact to='/' component ={HomePage}/>
                 V6: as follows */}
                 <Route path='/' element={<LandingPage/>} />
                
                
                 
                 
                 <Route path="/userlogin" element={<UserLoginPage/>} />
                 <Route  path="/contact" element={<ContactPage/>} />
                 <Route  path="/purchase" element={<PurchasePage/>} />
               <Route  path="/privacy" element={<PrivacyPage/>} />
               <Route  path="/refund" element={<RefundPage/>} />
               <Route  path="/productdetails" element={<ProductDetailsPage/>} />
               <Route  path="/notification" element={<NotificationPage/>} />
               <Route  path="/favourite" element={<FavouritePage/>} />
               <Route  path="/cart" element={<CartPage/>} />
               <Route  path="/explore" element={<ExplorePage/>} />
               <Route  path="/marketplace" element={<MarketPlacePage/>} />
               <Route  path="/people" element={<PeoplePage/>} />
               <Route  path="/messages" element={<MessagesPage/>} />
               <Route  path="/profile" element={<ProfilePage/>} /> 
               
               <Route  path="/home" element={<HomePage/>} />   
               <Route  path="/about" element={<AboutPage/>} />
               
               
               
               <Route  path="/login" element={<LoginPage/>} />
               <Route  path="/signup" element={<SignUpPage/>} />

               <Route  path="/productcategory/:category" element={<ProductCategoryPage/>} />
               <Route  path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage/>} />




               {/* <Route  path="/SidebarTest" element={<SidebarTest/>} /> */}


          </Routes>
          
      </Fragment>
    )
  }
}

export default AppRoute
