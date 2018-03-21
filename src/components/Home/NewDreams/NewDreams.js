import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './NewDreams.css'
import { Container, Row } from 'react-grid-system'
import DreamsSingleItem from '../../common/DreamsSingleItem/DreamsSingleItem'
import sky from '../../../assets/images/sky.jpg'

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
          photo: sky,
          title: 'Створення парашутного спорт-клубу',
          author: 'John Doe',
          city: 'Київ',
          category: 'Спорт',
          finance: 48,
          equipment: 50,
          work: 70
        }, {
          id: 3,
          photo: sky,
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
      <section className='section-dreams'>
        <Container className='dreams block container'>
          <Row className='app-dreams row-center'>
            <div className='rowTitle row-center'>
              <h3 className='textTitle'>Нові мрії</h3>
              <a href='#' className='btnUncover'>ПОКАЗАТИ БІЛЬШЕ</a>
            </div>
            <Row align='center' className='blockDreams wrap row-center'>
              {this.state.cards.map(card => <DreamsSingleItem key={card.id} {...card} />)}
            </Row>
          </Row>
        </Container>
      </section>
    )
  }
}

export default NewDreams
