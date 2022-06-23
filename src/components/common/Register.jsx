import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link,Redirect  } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import Login from '../../assets/landingAssets/images/about.jpg'
import axios from 'axios'
import Logo from '../../assets/images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from '../../validation/validation';


class Register extends Component {

     constructor(){
          super(); 
          this.state={
               name:'',
               email:'',
               password:'',
               password_confirmation:'',
               message:[],
               loggedIn:false
          }
     } 

      // Register Form Submit Method 
      formSubmit = (e) => {
          const data={
               name:this.state.name,
               email:this.state.email,
               password:this.state.password,
               password_confirmation:this.state.password_confirmation
          }
  let sendBtn = document.getElementById('sendBtn');



          if((data.name.length<7)){
       
               toast.info("Please write your full name");
          }
          else if(data.email.length<15){
            toast.info("Please write a valid Email");
          }
          else if(data.password.length<8){
            toast.info("Minimum password: 8 characters");
          }
          else if(!(validation.NameRegx).test(data.name)){
            toast.info("Invalid Name");
          }
          else if(!(validation.EmailRegx).test(data.email)){
            toast.info("Please write a valid email");
          }
          else if(!(validation.PasswordRegx).test(data.password)){
            toast.info("Password must include letters AND numbers");
          }
          else if(data.password.length!=data.password_confirmation.length){
               toast.info("Passwords do not match");
             }

          else{
            sendBtn.innerHTML="Signing...";       
        

        axios.post(AppURL.CustomerRegister,data).then(response =>{ 
            
          localStorage.setItem('token',response.data.token);
          this.setState({loggedIn:true})
          // this.props.setUser(response.data.user);
          this.props.setUser(response.data.customer);
          sendBtn.innerHTML="Sign Up";
          
     }).catch(error=>{
          this.setState({message:error.response.data.error});
          sendBtn.innerHTML="Sign Up";
          toast.info(this.state.message[0]);

     }); 

          }
        
          e.preventDefault();
          
     }


     render() {

          /// After Login Redirect to Profile Page 
          if(this.state.loggedIn){
               return <Redirect  direct to={'/'} />
          }

          if(localStorage.getItem('token')){
               return <Redirect  to="/" />
          }


          return (
               <Fragment>
               <Container> 
                    <Row className="p-0 mb-5">
            <Col className="shadow-sm bg-white mt-0" md={12} lg={12} sm={12} xs={12}>
     
                    <Row className="text-center">

                    <Col className="p-0 Desktop m-0 reg" md={6} lg={6} sm={6} xs={6}>
                              <img className="onboardBanner " src={Login}/>
                         </Col>


             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form className="onboardForm mt-1" onSubmit={this.formSubmit} >
               <img src={Logo} alt="logo" className="mt-3"/>
                    <h4 className="section-title-login mt-2"> Create your account </h4>
                    
     <input className="form-control m-2" type="text" placeholder="Full name"  onChange={(e)=>{this.setState({name:e.target.value})}} required />

     <input className="form-control m-2" type="email" placeholder="Email Address" onChange={(e)=>{this.setState({email:e.target.value})}} required/>

     <input className="form-control m-2" type="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}} required />

     <input className="form-control m-2" type="password" placeholder="Confirm password" onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} required/>
     
     
      <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Sign Up </Button>
     <br></br> <br></br>
     <hr />
     <p> <Link to="/forget"><b> Forgot password? </b> </Link> </p>

     <p> <b> Already have an account? </b><Link to="/login"><b> Login </b> </Link> </p>
                    
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

export default Register
