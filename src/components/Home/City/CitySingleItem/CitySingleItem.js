import React from 'react'

const CitySingleItem = props => (
  <div className='rowCity block'>
    <img className='photoCity' src={props.photo} alt='sky' />
    <div className='blockRowCity'>
      <h3 className='titleRowCity'>{props.title}</h3>
      <div className='counter'>{props.counter} мрії</div>
    </div>
  </div>
)

export default CitySingleItem
