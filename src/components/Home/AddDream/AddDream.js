import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './AddDream.css'
import { Container, Row } from 'react-grid-system'
import { Link } from 'react-router-dom'

class AddDream extends Component {
  render () {
    return (
      <section className='section-addDream'>
        <Container className='addDream block container'>
          <Row align='center' className='app-addDream row-center'>
            <h2 className='info-title title-addDream'>Втіль мрію у життя!</h2>
            <Link
              to='/sign-up'
              className='registerBtn'
            >Зареєструватися</Link>
          </Row>
        </Container>
      </section>
    )
  }
}

export default AddDream
