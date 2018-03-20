import React from 'react'

const DreamsSingleItem = props => (
  <div className='rowNewDreams'>
    <img className='photoDream' src={props.photo} alt='sky' />
    <h3>{props.title}</h3>
    <div className='author'>
      <img src='' alt='icon' />
      {props.author}
    </div>
    <div className='city'>
      <div>{props.city}</div>
      <div>{props.category}</div>
    </div>
    <div>
      <div className='done'>
        <div>Зібрано:</div>
        <div>{props.finance}%</div>
        <div>{props.equipment}%</div>
        <div>{props.work}%</div>
      </div>
      <div className='content'>
        <div>Фінанси</div>
        <div>Обладнання</div>
        <div>Роботи</div>
      </div>
    </div>
  </div>
)

export default DreamsSingleItem
