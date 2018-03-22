import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './City.css'
import { Container, Row } from 'react-grid-system'
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
      <section className='city-dreams'>
        <div className='line'>
          <hr />
        </div>
        <Container className='city block container'>
          <Row className='app-city row-center'>
            <div className='rowTitle row-center'>
              <h3 className='textTitle'>Міста з мріями</h3>
              <a href='#' className='btnUncover btnCity'>ВСІ МІСТА</a>
            </div>
            <Row align='center' className='blockCity wrap row-center'>
              {this.state.cards.map(card => <CitySingleItem key={card.id} {...card} />)}
            </Row>
          </Row>
        </Container>
        <div className='line'>
          <hr />
        </div>
      </section>
    )
  }
}

export default City
