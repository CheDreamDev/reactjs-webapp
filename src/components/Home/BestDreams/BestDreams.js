import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './BestDreams.css'
import { Container, Row, Col } from 'react-grid-system'
import sky from '../../../assets/images/sky.jpg'

class BestDreams extends Component {
  render () {
    return (
      <section className='section-bestDreams'>
        <Container className='bestDreams container'>
          <Row align='center' className='app-bestDreams row'>
            <Col md={6} className='rowBestDreams row-wrap'>
              <a href='#' className='titleBestDreams'>
                <div className='photoBestDreamsBlock'>
                  <img className='photoBestDreams' src={sky} alt='sky' />
                  <span>Як створити мрію?</span>
                </div>
              </a>
            </Col>
            <Col md={6} className='rowBestDreams row-wrap'>
              <a href='#' className='titleBestDreams'>
                <div className='photoBestDreamsBlock'>
                  <img className='photoBestDreams' src={sky} alt='sky' />
                  <span>Як створити мрію?</span>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default BestDreams
