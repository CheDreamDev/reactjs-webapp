import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Testimonials.css'

class Testimonials extends Component {
  render () {
    return (
      <section className='testimonials'>
        <div className='container'>
          <div className='block'>
            <div className='blockTestimonials'>
              <img src='' alt='' />
              <h2>В нас все вийшло завдяки UDream</h2>
              <p>Один добрий чоловік</p>
              <p>Проект цього чоловіка</p>
            </div>
            <div className='blockSubscribe'>
              <h3>Останні новини UDream</h3>
              <div>
                <input name='email' type='email' placeholder='Email' />
                <div>
                  <a href='' >Підписатися</a>
                </div>
              </div>
              <p>2 рази в місяць, по суті і без спаму</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
