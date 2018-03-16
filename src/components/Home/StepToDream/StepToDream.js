import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './StepToDream.css'
import DreamsSingleItem from '../../Home/newDreams/DreamsSingleItem/DreamsSingleItem'

class StepToDream extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [
        {
          id: 1,
          photo: '',
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
          work: 80
        }
      ]
    }
  }
  render () {
    return (
      <section className='Dreams'>
        <div className='container'>
          <div className='rowTitle'>
            <h3>За крок до мрії</h3>
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

export default StepToDream
