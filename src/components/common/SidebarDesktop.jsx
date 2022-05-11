import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { house } from '@fortawesome/free-solid-svg-icons'



class SidebarDesktop extends Component {
  render() {
    return (
 
<Fragment >

<div className="sidenav">

<Link to="/" className="btn"><i class="fa fa-home" aria-hidden="true"></i><h4>Home</h4> <sup><span className="badge text-white bg-warning">9</span></sup> </Link>
 <Link to="/explore" className="btn"><i className="fas fa-map"></i><h4>Explore</h4></Link>
 <Link to="/marketplace" className="btn"><i className="fas fa-store"></i><h4>Marketplace</h4></Link>
 <Link to="/people" className="btn"><i className="fas fa-users"></i><h4>People</h4></Link>
<div className="sidebarDown">
 <Link to="/messages" className="btn"><i class="far fa-comments"></i><h4>Messages</h4><sup><span className="badge text-white bg-warning">5</span></sup></Link>
 <Link to="/notification" className="btn"><i class="far fa-bell"></i><h4>Notifications</h4></Link>
 <Link to="/profile" className="btn"><i class="far fa-user-circle"></i><h4>Profile</h4></Link>
 </div>

</div>
</Fragment>
    )
  }
}

export default SidebarDesktop