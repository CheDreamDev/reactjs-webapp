import React from 'react'

const CitySingleItem = props => (
  <div className='rowCity'>
    <img className='photoCity' src={props.photo} alt='sky' />
    <h3>{props.title}</h3>
    <div>{props.counter} мрії</div>
  </div>
)

export default CitySingleItem
