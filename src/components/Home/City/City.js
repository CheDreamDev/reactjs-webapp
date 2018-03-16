import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './City.css'
import CitySingleItem from './CitySingleItem/CitySingleItem'
import sky from '../../../assets/images/sky.jpg'

class City extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [
        {
          id: 1,
          photo: sky,
          title: 'Київ',
          counter: 33
        }, {
          id: 2,
          photo: sky,
          title: 'Тернопіль',
          counter: 33
        }, {
          id: 3,
          photo: sky,
          title: 'Хмельницький',
          counter: 33
        },
        {
          id: 4,
          photo: sky,
          title: 'Черкаси',
          counter: 33
        }
      ]
    }
  }
  render () {
    return (
      <section className='Dreams'>
        <div className='container'>
          <div className='rowTitle'>
            <h3>Міста з мріями</h3>
            <a href='#' className='btnUncover'>Всі міста</a>
          </div>
          <div className='blockCity'>
            {this.state.cards.map(card => <CitySingleItem key={card.id} {...card} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default City
