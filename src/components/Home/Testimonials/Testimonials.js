import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Testimonials.css'
import { Container, Row, Col } from 'react-grid-system'
import sky from '../../../assets/images/sky.jpg'

class Testimonials extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
    this.submitFormHandler = this.submitFormHandler.bind(this)
  }
  submitFormHandler (e) {
    e.preventDefault()
  }
  render () {
    return (
      <section className='section-testimonials'>
        <Container className='testimonials block container-max'>
          <Row align='center' className='app-testimonials row'>
            <Col md={12} className='blockTestimonials'>
              <img src={sky} alt='sky' />
              <h2 className='info-title title-testimonials' >В нас все вийшло завдяки UDream</h2>
              <p className='counter'>Один добрий чоловік</p>
              <p className='counter'>Проект цього чоловіка</p>
            </Col>
            <Col md={12} className='blockSubscribe'>
              <h3 className='info-title'>Останні новини UDream</h3>
              <form onSubmit={this.submitFormHandler}>
                <div className='block-email'>
                  <input className='inputTestimonials input' name='email' type='email' placeholder='Email' value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                  />
                  <button className='inputTestimonials btn-block-email' type='submit'>Підписатися</button>
                </div>
              </form>
              <p>2 рази в місяць, по суті і без спаму</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Testimonials
