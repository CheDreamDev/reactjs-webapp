import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Info.css'
import { Container, Row, Col } from 'react-grid-system'
import sky from '../../../assets/images/sky.jpg'
import { Link } from 'react-router-dom'

class Info extends Component {
  render () {
    return (
      <section className='section-info'>
        <Container className='info'>
          <Row align='center' className='app-info'>
            <Col md={6} className='rowInfo'>
              <h1 className='info-title'>Реалізуймо ідеї разом</h1>
              <p className='infoContent'>Pain may sometimes be the reason why people change. Getting
                bad grades make you realize that you need to study. Debts remind
                you of your inability to look a source of income</p>
              <Link
                to='/sign-up'
                className='registerBtn'
              >Зареєструватися</Link>
              <Link
                to='/about'
                className='btnInfo'
              >Як це працює</Link>
            </Col>
            <Col md={6} className='rowImg'>
              <img className='sky' src={sky} alt='sky' />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Info
