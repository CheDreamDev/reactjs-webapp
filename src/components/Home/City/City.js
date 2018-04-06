import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './City.css'
import { Container, Row, Col } from 'react-grid-system'
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
        <Container>
          <Row>
            <Col xs={12}>
              <div className='section-title'>
                <h3>Міста з мріями</h3>
                <a href='#'>всі міста</a>
              </div>
            </Col>
            <Row className='row cities-wrapper'>
              {this.state.cards.map(card => <CitySingleItem key={card.id} colWidth={12 / this.state.cards} {...card} />)}
            </Row>
          </Row>
        </Container>
      </section>
    )
  }
}

export default City
