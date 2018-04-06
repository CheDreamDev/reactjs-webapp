import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Assistants.css'
import { Container, Row, Col } from 'react-grid-system'

class Assistants extends Component {
  render () {
    return (
      <section className='section-assistants'>
        <Container className='assistants container block'>
          <Row className='app-assistants row'>
            <Col md={3} className='row-assistants'>
              <i className='material-icons account'>account_circle</i>
              <div className='text-block'>
                <h4 className='text'><a href='#'>Somebody</a> допомагає</h4>
                <h3 className='projectName'><a href='#'>Назва проекту</a></h3>
                <p className='time'>5 годин тому</p>
              </div>
            </Col>
            <Col md={3} className='row-assistants'>
              <i className='material-icons account'>account_circle</i>
              <div className='text-block'>
                <h4 className='text'><a href='#'>Somebody</a> допомагає</h4>
                <h3 className='projectName'><a href='#'>Назва проекту</a></h3>
                <p className='time'>5 годин тому</p>
              </div>
            </Col>
            <Col md={3} className='row-assistants'>
              <i className='material-icons account'>account_circle</i>
              <div className='text-block'>
                <h4 className='text'><a href='#'>Somebody</a> допомагає</h4>
                <h3 className='projectName'><a href='#'>Назва проекту</a></h3>
                <p className='time'>5 годин тому</p>
              </div>
            </Col>
            <Col md={3} className='row-assistants'>
              <i className='material-icons account'>account_circle</i>
              <div className='text-block'>
                <h4 className='text'><a href='#'>Somebody</a> допомагає</h4>
                <h3 className='projectName'><a href='#'>Назва проекту</a></h3>
                <p className='time'>5 годин тому</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Assistants
