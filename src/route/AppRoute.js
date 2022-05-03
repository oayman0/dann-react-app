import React, { Component, Fragment } from 'react'
import { Routes ,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';


 class AppRoute extends Component {
  render() {
    return (
      <Fragment>

          <Routes>
                 {/*v5: <Route exact to='/' component ={HomePage}/>
                 V6: as follows */}
                 <Route path='/' element={<HomePage/>} />
             
          </Routes>
          
      </Fragment>
    )
  }
}

export default AppRoute
