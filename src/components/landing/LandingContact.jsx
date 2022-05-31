import React, { Component, Fragment } from 'react'

import Contact_bg from '../../assets/landingAssets/images/contact_bg.jpg';


 class LandingContact extends Component {
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
            <div id="contact-form"  className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
            {/* <form id="contact-form" action="assets/contact.php" method="post" className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s"> */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="single_form">
                    <input type="text" placeholder="Name" name="name" id="name" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-6">
                  <div className="single_form">
                    <input type="email" placeholder="Email" name="email" id="email" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-6">
                  <div className="single_form">
                    <input type="text" placeholder="Phone Number" name="number" id="number" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-6">
                  <div className="single_form">
                    <input type="text" placeholder="Subject" name="subject" id="subject" required />
                  </div> {/* single form */}
                </div>
                <div className="col-lg-12">
                  <div className="single_form">
                    <textarea placeholder="Message" name="message" id="message" required defaultValue={""} />
                  </div> {/* single form */}
                </div>
                <p className="form-message" />
                <div className="col-lg-12">
                  <div className="single_form text-center">
                    <button className="main-btn">SUBMIT</button>
                  </div> {/* single form */}
                </div>
              </div> {/* row */}
            </div>
          </div> {/* container */}
        </section>
        {/*====== CONTACT PART ENDS ======*/}
      </Fragment>
    )
  }
}

export default LandingContact