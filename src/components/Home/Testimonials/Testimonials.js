import React from 'react'
// import PropTypes from 'prop-types'
import './Testimonials.css'
import { Container, Row, Col } from 'react-grid-system'

const Testimonials = () => {
  return (
    <section className='testimonials-section'>
      <Container>
        <Row>
          <Col md={12} className='testimonials-wrapper'>
            <h2 className='info-title title-testimonials'>"В нас все вийшло завдяки UDream!"</h2>
            <p>Один добрий чоловік</p>
            <p>Проект цього чоловіка</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
