import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link, Redirect  } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import Logo from '../../assets/images/logo.png'
import Login1 from '../../assets/images/login.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from '../../validation/validation';



class UserLogin extends Component {

     constructor(){
          super();
          this.state={
               email:'',
               password:'',
               message:'Incorrect email or password',
               loggedIn:false
          }
     } 

     // Login Form Submit Method 
     formSubmit = (e) => {
          const data={
               email:this.state.email,
               password:this.state.password
          };
          let sendBtn = document.getElementById('sendBtn');



          if((data.email.length<15)){
       
               toast.info("Incorrect email or password");
          }
          else if(data.password.length<8){
            toast.info("Incorrect email or password");
          }
          else if(!(validation.EmailRegx).test(data.email)){
            toast.info("Incorrect email or password");
          }
          else if(!(validation.PasswordRegx).test(data.password)){
            toast.info("Incorrect email or password");
          }
          else{
            sendBtn.innerHTML="Signing...";       
     
            axios.post(AppURL.CustomerLogin,data).then(response =>{ 
            
               localStorage.setItem('token',response.data.token);
               this.setState({loggedIn:true});
               // check - omar
               // this.props.setUser(response.data.user);
               this.props.setUser(response.data.customer);

               sendBtn.innerHTML="Sign in"
               // console.log(response);
               // console.log(data);
               // console.log(AppURL.CustomerLogin);
               
          }).catch(
               error=>{
                    this.setState({message:error.response.data.message});
                    toast.info(this.state.message);
                    sendBtn.innerHTML="Sign in";


          }
          
          ); 

          }
        
          e.preventDefault();
        

     }



     render() {

           /// After Login Redirect to Profile Page 
           if(this.state.loggedIn){
                return <Redirect  to={'/'} />
           }

           if(localStorage.getItem('token')){
               return <Redirect  to="/" />
          }


          return (
     <Fragment>
          <Container>
               <Row className="p-0">
       <Col className="shadow-sm bg-white mt-0" md={12} lg={12} sm={12} xs={12}>

               <Row className="text-center">
               <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                         <img className="onboardBanner" src={Login1} />
                    </Col>

        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
          <Form className="onboardForm" onSubmit={this.formSubmit} >
          <img src={Logo} alt="logo" className=""/>
               <h4 className="section-title-login mt-3"> Sign in to Dann </h4>
               
               <input className="form-control my-3 py-3" type="email" placeholder="Email Address*" onChange={(e)=>{this.setState({email:e.target.value})}} required/>

               <input className="form-control my-3 py-3" type="password" placeholder="Password*"  onChange={(e)=>{this.setState({password:e.target.value})}} required />

               <Button id="sendBtn" type="submit" className="btn btn-block mt-3 site-btn-login"> Sign in </Button>

               <br></br> <br></br>
     <hr />
     <p> <Link to="/forget"><b> Frogot password? </b> </Link> </p>

     <p> <b> Don't have an account ? </b><Link to="/signup"><b> Sign Up </b> </Link> </p>
               
          </Form>
                    </Col>

       
               </Row>

                    </Col>
               </Row>
          </Container>
               <ToastContainer />
     </Fragment>
          )
     }
}

export default UserLogin
