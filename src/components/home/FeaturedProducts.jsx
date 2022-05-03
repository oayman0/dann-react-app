import React, { Component, Fragment } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

 class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
<div className='section-title text-center mb-55'>
  <h2>Featured Products</h2>
  <p>Some of Our Exclusive Collection you may like!</p>
</div>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default FeaturedProducts