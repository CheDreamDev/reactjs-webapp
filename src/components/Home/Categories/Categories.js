import React from 'react'
// import PropTypes from 'prop-types'
import './Categories.css'
import { Container, Row, Col } from 'react-grid-system'

const Categories = () => {
  const renderButtons = () => {
    const categories = [ 'Категорія спорт', 'Категорія спорт', 'Категорія спорт', 'Категорія спорт', 'Категорія спорт', 'Всі категорії' ]
    return categories.map((category, i) => (
      <Col
        className='categories-button-wrapper'
        sm={12 / categories.length}
        key={i}
      >
        <a
          href='#'
          className={i !== categories.length - 1 ? 'categories-button' : 'last-categories-button'}
        >{category}</a>
      </Col>
    ))
  }
  return (
    <section className='section-categories'>
      <Container className='categories container block'>
        <Row className='app-categories row'>
          {renderButtons()}
        </Row>
      </Container>
    </section>
  )
}

export default Categories
