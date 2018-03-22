import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './BestDreams.css'
import { Container, Row, Col } from 'react-grid-system'
import sky from '../../../assets/images/sky.jpg'

class BestDreams extends Component {
  render () {
    return (
      <section className='section-bestDreams'>
        <Container className='bestDreams block container'>
          <Row align='center' className='app-bestDreams row-center'>
            <Col md={6} className='rowBestDreams row-wrap'>
              <img className='photoBestDreams' src={sky} alt='sky' />
              <a href='#' className='titleBestDreams'>Як створити мрію?</a>
            </Col>
            <Col md={6} className='rowBestDreams row-wrap'>
              <img className='photoBestDreams' src={sky} alt='sky' />
              <a href='#' className='titleBestDreams'>Як створити мрію?</a>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default BestDreams
