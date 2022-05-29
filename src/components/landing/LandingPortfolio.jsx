import React, { Component,Fragment } from 'react'

import Portfolio1  from '../../assets/landingAssets/images/portfolio-1.jpg';
import Portfolio2 from '../../assets/landingAssets/images/portfolio-2.jpg';
import Portfolio3 from '../../assets/landingAssets/images/portfolio-3.jpg';
import Portfolio4 from '../../assets/landingAssets/images/portfolio-4.jpg';
import Portfolio5 from '../../assets/landingAssets/images/portfolio-5.jpg';
import Portfolio6 from '../../assets/landingAssets/images/portfolio-6.jpg';

export class LandingPortfolio extends Component {
  render() {
    return (
        <Fragment>
    {/*====== PORTFOLIO PART START ======*/}
    <section id="portfolio" className="portfolio_area pt-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center pb-60">
            <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Our Portfolio</h4>
            <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
          </div> {/* section title */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
    <div className="portfolio_wrapper d-flex flex-wrap">
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
        <img src={Portfolio1} alt="portfolio" />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">Logo And Branding</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s">
        <img src={Portfolio2} alt="portfolio" />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">Bootstrap 5 Project</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
        <img src={Portfolio3} alt="portfolio" />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">Creative Projects</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
        <img src={Portfolio4} alt="portfolio" />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">UI/UX Projects</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
        <img src={Portfolio5} alt="portfolio" />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">App Development</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s">
        <img src={Portfolio6} alt="portfolio" />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">Web Development</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
        <img src={Portfolio5} />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">Business Card Design</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
      <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
        <img src={Portfolio6} />
        <div className="portfolio_content">
          <ul className="meta">
            <li><a href="#0"><i className="lni lni-link" /></a></li>
          </ul>
          <h5 className="portfolio_title">Consulting Business</h5>
        </div> {/* Single portfolio */}
      </div> {/* portfolio wrapper */}
    </div> {/* row */}
  </section>
  {/*====== PORTFOLIO PART ENDS ======*/}
  </Fragment>
    )
  }
}

export default LandingPortfolio