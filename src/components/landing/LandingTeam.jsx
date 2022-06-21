import React, { Component, Fragment } from 'react'

import Team1 from '../../assets/landingAssets/images/team-1.jpg';
import Team2 from '../../assets/landingAssets/images/team-2.jpg';
import Team3 from '../../assets/landingAssets/images/team-3.jpg';


 class LandingTeam extends Component {
  render() {
    return (
    <Fragment>
{/*====== TEAM PART START ======*/}
<section id="team" className="team_area pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-25">
                <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Meet The Team</h4>
                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className="row justify-content-center team_active">
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single_team mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                <img src={Team1} alt="team" />
                <div className="team_content">
                  <h4 className="team_name"><a href="#0">Tom Hanks.</a></h4>
                  <p>Head Of Ideas</p>
                  <ul className="social">
                    <li><a href="#0"><i className="lni lni-facebook-filled" /></a></li>
                    <li><a href="#0"><i className="lni lni-twitter-original" /></a></li>
                    <li><a href="#0"><i className="lni lni-linkedin-original" /></a></li>
                  </ul>
                </div>
              </div> {/* single team */}
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single_team mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s">
                <img src={Team2} alt="team" />
                <div className="team_content">
                  <h4 className="team_name"><a href="#0">Jennifer L.</a></h4>
                  <p>UX Designer</p>
                  <ul className="social">
                    <li><a href="#0"><i className="lni lni-facebook-filled" /></a></li>
                    <li><a href="#0"><i className="lni lni-twitter-original" /></a></li>
                    <li><a href="#0"><i className="lni lni-linkedin-original" /></a></li>
                  </ul>
                </div>
              </div> {/* single team */}
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single_team mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                <img src={Team3} alt="team" />
                <div className="team_content">
                  <h4 className="team_name"><a href="#0">Rob Percy</a></h4>
                  <p>Creative Designer</p>
                  <ul className="social">
                    <li><a href="#0"><i className="lni lni-facebook-filled" /></a></li>
                    <li><a href="#0"><i className="lni lni-twitter-original" /></a></li>
                    <li><a href="#0"><i className="lni lni-linkedin-original" /></a></li>
                  </ul>
                </div>
              </div> {/* single team */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
      {/*====== TEAM PART ENDS ======*/}

    </Fragment>
    )
  }
}

export default LandingTeam