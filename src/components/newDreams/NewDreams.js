import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './NewDreams.css'
import DreamsSingleItem from './DreamsSingleItem/DreamsSingleItem'
import sky from '../../assets/images/sky.jpg'

class NewDreams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [
        {
          id: 1,
          photo: sky,
          title: 'Створення парашутного спорт-клубу',
          author: 'John Doe',
          city: 'Київ',
          category: 'Спорт',
          finance: 0,
          equipment: 50,
          work: 100
        }, {
          id: 2,
          photo: '',
          title: 'Створення парашутного спорт-клубу',
          author: 'John Doe',
          city: 'Київ',
          category: 'Спорт',
          finance: 48,
          equipment: 50,
          work: 70
        }, {
          id: 3,
          photo: '',
          title: 'Створення парашутного спорт-клубу',
          author: 'John Doe',
          city: 'Київ',
          category: 'Спорт',
          finance: 10,
          equipment: 30,
          work: 100
        }
      ]
    }
  }
  render () {
    return (
      <section className='Dreams'>
        <div className='container'>
          <div className='rowTitle'>
            <h3>Нові мрії</h3>
            <a href='' className='btnUncover'>Показати більше</a>
          </div>
          <div className='blockNewDreams'>
            {this.state.cards.map(card => <DreamsSingleItem key={card.id} {...card} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default NewDreams
