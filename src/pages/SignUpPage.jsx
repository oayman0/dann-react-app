import React, { Component, Fragment } from 'react'
import SignUp from '../components/landing/LandingSignUp'
import LandingNavbarLogin from '../components/landing/LandingNavbarLogin'


 class SignUpPage extends Component {
  render() {
    return (
<Fragment>
<LandingNavbarLogin/>

    <SignUp/>
</Fragment>     
    )
  }
}

export default SignUpPage