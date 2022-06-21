import React, { Component, Fragment } from 'react'
import { Router ,Route, Switch } from 'react-router';
import AppURL from '../api/AppURL';

import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import RegisterPage from '../pages/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import SearchPage from '../pages/SearchPage';
import axios from 'axios' 
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import OrderListPage from '../pages/OrderListPage';





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
import PaymentsPage from '../pages/PaymentsPage';



 class AppRoute extends Component {
  constructor(){
    super();
    this.state={
         user:{}
    }
}

componentDidMount(){
    axios.get(AppURL.UserData).then((response) => { 
         this.setUser(response.data)
    }).catch(error=>{

    });
}


setUser = (user) => {
    this.setState({user:user})
}





  render() {
    return (
      <Fragment>
        {/* <NavMenuDesktop user={this.state.user} setUser={this.setUser} />  */}

          <Switch>

            {/* 
                 {/*v5: <Route exact Path='/' component ={HomePage}/>
                 V6: as follows 
                 <Route to='/' component={LandingPage} />
                
                 
                 <Route exact path="/userlogin" component={UserLoginPage} />
                 <Route  exact path="/contact" component={ContactPage} />
                 <Route  exact path="/purchase" component={PurchasePage} />
               <Route  exact path="/privacy" component={PrivacyPage} />
               <Route  exact path="/refund" component={RefundPage} />

               {/* <Route  exact path="/productdetails" component={<ProductDetailsPage/>} /> 


               <Route  exact path="/notification" component={NotificationPage} />
               <Route  exact path="/favourite" component={FavouritePage} />
               <Route  exact path="/cart" component={CartPage} />
               <Route  exact path="/explore" component={ExplorePage} />
               <Route  exact path="/marketplace" component={MarketPlacePage} />
               <Route  exact path="/people" component={PeoplePage} />
               <Route  exact path="/messages" component={MessagesPage} />
               <Route  exact path="/profile" component={ProfilePage} /> 
               
               <Route  exact path="/home" component={HomePage} />   
               <Route  exact path="/about" component={AboutPage} />
               
               
               
               <Route  exact path="/login" component={LoginPage} />
               <Route  exact path="/signup" component={SignUpPage} />

               <Route  exact path="/productcategory/:category" component={ProductCategoryPage} />
               <Route  exact path="/productsubcategory/:category/:subcategory" component={ProductSubCategoryPage} />
               <Route exact path="/productdetails/:code" component={ProductDetailsPage} />

 */}




<Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} /> } />
<Route exact path="/landing" render={(props) => <LandingPage {...props} key={Date.now()}/>}/>

 <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />

 <Route exact path="/login1" render={(props) => <LoginPage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />

  <Route exact path="/signup" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} /> } />

  <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} /> } />
 
  <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} /> } />

  <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />
 
 <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} /> } />

 <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} /> } />

 <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} /> } /> 

 <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} /> } />

 <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} /> } />

 <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage user={this.state.user}  {...props} key={Date.now()} /> } />

 <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} /> } />

 <Route exact path="/favourite" render={(props) => <FavouritePage user={this.state.user} {...props} key={Date.now()} /> } />

 <Route exact path="/cart" render={(props) => <CartPage user={this.state.user} {...props} key={Date.now()} /> } />

 <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} /> } />

 <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} /> } /> 

 <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} /> } /> 

 <Route exact path="/orderlist" render={(props) => <OrderListPage user={this.state.user} {...props} key={Date.now()} /> } /> 


 <Route exact path="/marketplace" render={(props) => <MarketPlacePage {...props} key={Date.now()}/>}/>

 <Route exact path="/explore" render={(props) => <ExplorePage user={this.state.user} {...props} key={Date.now()} /> } /> 
 <Route exact path="/people" render={(props) => <PeoplePage user={this.state.user} {...props} key={Date.now()} /> } /> 
 {/* <Route exact path="/messages" render={(props) => <MessagesPage user={this.state.user} {...props} key={Date.now()} /> } /> */}
 <Route   to="/messages" component={MessagesPage} />
 <Route   path="/payments" component={PaymentsPage} />

 {/* <Route exact path="/payments" render={(props) => <PaymentsPage user={this.state.user} {...props} key={Date.now()} /> } /> */}


              
    

 
          </Switch>
          
      </Fragment>
    )
  }
}

export default AppRoute
