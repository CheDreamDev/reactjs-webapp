import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Categories.css'
import { Container, Row, Col } from 'react-grid-system'

class Categories extends Component {
  render () {
    return (
      <section className='section-categories'>
        <Container className='categories container block'>
          <Row className='app-categories row-center'>
            <Col md={12} className='block-btn block'>
              <a href='#' className='registerBtnHome button'>Категорія спорт</a>
              <a href='#' className='registerBtnHome button'>Категорія спорт</a>
              <a href='#' className='registerBtnHome button'>Категорія спорт</a>
              <a href='#' className='registerBtnHome button'>Категорія спорт</a>
              <a href='#' className='registerBtnHome button'>Категорія спорт</a>
              <a href='#' className='comeBtn btn-categories button'>Всі категорії</a>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Categories
