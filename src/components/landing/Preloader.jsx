import React, { Component, Fragment } from 'react'

 class Preloader extends Component {
  render() {
    return (
      <Fragment>

           {/*====== PRELOADER PART START ======*/}
 <div className="preloader">
        <div className="loader">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle" />
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== PRELOADER PART ENDS ======*/}
      </Fragment>
    )
  }
}

export default Preloader