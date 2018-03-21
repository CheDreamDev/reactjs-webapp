import React from 'react'
import { Col } from 'react-grid-system'

const DreamsSingleItem = props => (
  <Col md={4} className='rowDreams block row-wrap'>
    <img className='photoDream' src={props.photo} alt='sky' />
    <div className='infoDreams'>
      <p className='titleDreams'>{props.title}</p>
      <div className='author'>
        <i className='material-icons author-icon'>account_circle</i>
        <p>{props.author}</p>
      </div>
      <div className='city'>
        <div>{props.city}</div>
        <div>{props.category}</div>
      </div>
      <div className='resources'>
        <div>
          <hr />
        </div>
        <div className='done'>
          <div>ЗІБРАНО:</div>
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
  </Col>
)

export default DreamsSingleItem
