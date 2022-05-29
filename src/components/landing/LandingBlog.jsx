import React, { Component, Fragment } from 'react'

import Blog1 from '../../assets/landingAssets/images/blog-1.jpg';
import Blog2 from '../../assets/landingAssets/images/blog-2.jpg';
import Blog3 from '../../assets/landingAssets/images/blog-3.jpg';
import Blog4 from '../../assets/landingAssets/images/blog-4.jpg';


 class LandingBlog extends Component {
  render() {
    return (
     <Fragment>
         {/*====== BLOG PART START ======*/}
 <section id="blog" className="blog_area pt-120 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center pb-25">
                  <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Recent Blog</h4>
                  <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
                </div> {/* section title */}
              </div>
            </div> {/* row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="single_blog mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                  <div className="blog_image">
                    <img src={Blog1} alt="blog" />
                  </div>
                  <div className="blog_content">
                    <h3 className="blog_title"><a href="#0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor .</a></h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.Lorem ipsum dolor sit amet, conse sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore magna .Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                  </div>
                </div> {/* single blog */}
              </div>
              <div className="col-lg-6">
                <div className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                  <div className="blog_image">
                    <img src={Blog2} alt="blog" />
                  </div>
                  <div className="blog_content media-body">
                    <h3 className="blog_title"><a href="#0">Lorem ipsum dolor sit amet, consetetur sadipscing .</a></h3>
                    <p>Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.</p>
                    <a href="#0" className="more">Read More</a>
                  </div>
                </div> {/* single blog */}
                <div className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s">
                  <div className="blog_image">
                    <img src={Blog3} alt="blog" />
                  </div>
                  <div className="blog_content media-body">
                    <h3 className="blog_title"><a href="#0">Lorem ipsum dolor sit amet, consetetur sadipscing .</a></h3>
                    <p>Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.</p>
                    <a href="#0" className="more">Read More</a>
                  </div>
                </div> {/* single blog */}
                <div className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                  <div className="blog_image">
                    <img src={Blog4} alt="blog" />
                  </div>
                  <div className="blog_content media-body">
                    <h3 className="blog_title"><a href="#0">Lorem ipsum dolor sit amet, consetetur sadipscing .</a></h3>
                    <p>Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.</p>
                    <a href="#0" className="more">Read More</a>
                  </div>
                </div> {/* single blog */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </section>
        {/*====== BLOG PART ENDS ======*/}

     </Fragment>
    )
  }
}

export default LandingBlog