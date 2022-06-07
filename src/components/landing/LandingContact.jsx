import React, { Component, Fragment } from 'react'

import Contact_bg from '../../assets/landingAssets/images/contact_bg.jpg';



import validation from '../../validation/validation';
import axios from 'axios' 
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 class LandingContact extends Component {


  constructor(){
    super();
    this.state={
         name:"",
         email:"",
         phone:"",
         subject:"",
         message:""
    }
}

nameOnChange =(event)=>{
  let name = event.target.value;
 
  this.setState({name:name})
}

emailOnChange =(event)=>{
  let email = event.target.value;
  
  this.setState({email:email})
}

phoneOnChange =(event)=>{
  let phone = event.target.value;
 
  this.setState({phone:phone})
}
subjectOnChange =(event)=>{
  let subject = event.target.value;
  
  this.setState({subject:subject})
}
messageOnChange =(event)=>{
  let message = event.target.value;
  
  this.setState({message:message})
}

onFormSubmit =(event)=>{
  let name = this.state.name;
  let email = this.state.email;
  let phone = this.state.phone;
  let subject = this.state.subject;
  let message = this.state.message;
  let sendBtn = document.getElementById('sendBtn');
  let contactForm = document.getElementById('contactForm');

  if(message.length==0){
       
       toast.error("Please write your message");
  }
  else if(name.length==0){
    toast.error("Please write Your name");
  }
  else if(email.length==0){
    toast.error("Please write your Email");
  }
  else if(phone.length<10){
    toast.error("Please write a valid phone number");
  }
  else if(subject.length==0){
    toast.error("Please write the subject");
  }
  else if(!(validation.NameRegx).test(name)){
    toast.error("Invalid Name");
  }
  else if(!(validation.PhoneRegx).test(phone)){
    toast.error("Please write a valid phone number");
  }
  else{
    sendBtn.innerHTML="Sending...";       

let MyFormData = new FormData();
MyFormData.append("name",name)
MyFormData.append("email",email)
MyFormData.append("phone",phone)
MyFormData.append("subject",subject)
MyFormData.append("message",message)

axios.post(AppURL.PostContact,MyFormData).then(function (response) {
  if(response.status==200 && response.data==1){
    toast.success("Message Sent Successfully");
       sendBtn.innerHTML="Submit";
                    contactForm.reset();
  }
  else{
    toast.error("error"); 
  sendBtn.innerHTML="Submit";
  }
})
.catch(function (error) {
  toast.error(error);
});
  }

  event.preventDefault();

}


  render() {
    return (
      <Fragment>
          {/*====== CONTACT PART START ======*/}
        <section id="contact" className="contact_area bg_cover pt-120 pb-130" style={{backgroundImage: `url(${Contact_bg})`}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title section_title_2 text-center pb-25">
                  <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Contact Us</h4>
                  <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">We are all ears, Send your thoughts, ideas and complaints </p>
                </div> {/* section title */}
              </div>
            </div> {/* row */}

             <form onSubmit={this.onFormSubmit} id="contactForm"  className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s"> 
              <div className="row">
                <div className="col-lg-6">
                  <div className="single_form">
                    <input onChange={this.nameOnChange} type="text" placeholder="Name" name="name" id="name" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-6">
                  <div className="single_form">
                    <input onChange={this.emailOnChange} type="email" placeholder="Email" name="email" id="email" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-6">
                  <div className="single_form">
                    <input onChange={this.phoneOnChange}type="text" placeholder="Phone Number" name="number" id="number" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-6">
                  <div className="single_form">
                    <input onChange={this.subjectOnChange} type="text" placeholder="Subject" name="subject" id="subject" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-12">
                  <div className="single_form">
                    <textarea onChange={this.messageOnChange} placeholder="Message" name="message" id="message" required defaultValue={""} />
                  </div> {/* single form */}
                </div>
                <p className="form-message" />
                <div className="col-lg-12">
                  <div className="single_form text-center">
                    <button  id="sendBtn" type ="submit" className="main-btn">SUBMIT</button>
                  </div> {/* single form */}
                </div>
              </div> {/* row */}
            </form>
          </div> {/* container */}
        </section>
        {/*====== CONTACT PART ENDS ======*/}
        <ToastContainer />
      </Fragment>
    )
  }
}

export default LandingContact