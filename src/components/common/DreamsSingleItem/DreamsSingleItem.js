import React from 'react'
import { Col } from 'react-grid-system'
import './DreamsSingleItem.css'

const DreamsSingleItem = props => (
  <Col sm={4} className='dreams-item-wrapper'>
    <div className='dreams-item-inner'>
      <a href='#'>
        <img className='dreams-item-image' src={props.photo} alt='sky' />
      </a>
      <div className='dreams-item-info'>
        <h4 className='dreams-item-title'><a href='#'>{props.title}</a></h4>
        <div className='dreams-item-author'>
          <i className='material-icons author-icon'>account_circle</i>
          <p><a href='#'>{props.author}</a></p>
        </div>
        <div className='dreams-item-category'>
          <div><a href='#'>{props.city}</a></div>
          <div><a href='#'>{props.category}</a></div>
        </div>
        <ul className='dreams-item-resources'>
          <li>ЗІБРАНО:</li>
          <li>
            <ul>
              <li>{props.finance}%</li>
              <li>Фінанси</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>{props.equipment}%</li>
              <li>Обладнання</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>{props.work}%</li>
              <li>Роботи</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Col>
)

export default DreamsSingleItem
