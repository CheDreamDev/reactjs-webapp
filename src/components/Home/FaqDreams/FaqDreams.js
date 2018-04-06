import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './FaqDreams.css'
import { Container, Row, Col } from 'react-grid-system'
import sky from '../../../assets/images/sky.jpg'

class FaqDreams extends Component {
  render () {
    return (
      <section className='faq-section'>
        <Container className='faq container'>
          <Row className='faq-row'>
            <Col md={6}>
              <div className='faq-single'>
                <img src={sky} alt='sky' />
                <a href='#'>
                  <h3>Як створити мрію?</h3>
                </a>
              </div>
            </Col>
            <Col md={6}>
              <div className='faq-single'>
                <img src={sky} alt='sky' />
                <a href='#'>
                  <h3>Як створити мрію?</h3>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default FaqDreams
