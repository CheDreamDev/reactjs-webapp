import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './AlmostDoneDreams.css'
import { Container, Row, Col } from 'react-grid-system'
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
      <section className='dreams-section section-bordered'>
        <Container className='dreams'>
          <Row align='center' className='dreams-row'>
            <Col xs={12}>
              <div className='section-title'>
                <h3>За крок до мрії</h3>
                <a href='#'>показати більше</a>
              </div>
            </Col>
            <Col xs={12}>
              <Row className='dreams-wrapper'>
                { this.state.cards.map(card => <DreamsSingleItem key={card.id} {...card} />) }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default NewDreams
