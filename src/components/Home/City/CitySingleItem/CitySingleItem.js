import React from 'react'
import { Col } from 'react-grid-system'

const CitySingleItem = props => (
  <Col md={3} className='rowCity block row-wrap'>
    <img className='photoCity' src={props.photo} alt='sky' />
    <div className='blockRowCity'>
      <h3 className='titleRowCity'>{props.title}</h3>
      <div className='counter'>{props.counter} мрії</div>
    </div>
  </Col>
)

export default CitySingleItem
