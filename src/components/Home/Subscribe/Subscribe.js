import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Subscribe.css'
import { Container, Row, Col } from 'react-grid-system'

class Subscribe extends Component {
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
      <section className='subscribe-section'>
        <Container>
          <Row className='subscribe-row'>
            <Col md={12} className='subscribe-wrapper'>
              <h2>Останні новини UDream</h2>
              <form onSubmit={this.submitFormHandler}>
                <div className='subscribe-input-handler'>
                  <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <button type='submit'>Підписатися</button>
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

export default Subscribe
