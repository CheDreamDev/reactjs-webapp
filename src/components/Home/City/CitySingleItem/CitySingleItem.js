import React from 'react'
import { Col } from 'react-grid-system'
import './CitySingleItem.css'

const CitySingleItem = props => (
  <Col sm={props.colWidth}>
    <a className='no-text-decoration' href='#'>
      <div className='city-single-item'>
        <img src={props.photo} alt='sky' />
        <div className='city-single-info'>
          <h3>{props.title}</h3>
          <p>{props.counter} мрії</p>
        </div>
      </div>
    </a>
  </Col>
)

export default CitySingleItem
