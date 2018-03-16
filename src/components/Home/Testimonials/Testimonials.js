import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Testimonials.css'

class Testimonials extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
    this.submitFormHandler = this.submitFormHandler.bind(this)
  }
  submitFormHandler (e) {
    e.preventDefault()
  }
  render () {
    return (
      <section className='testimonials'>
        <div className='container'>
          <div className='block'>
            <div className='blockTestimonials'>
              <img src='' alt='icon' />
              <h2>В нас все вийшло завдяки UDream</h2>
              <p>Один добрий чоловік</p>
              <p>Проект цього чоловіка</p>
            </div>
            <div className='blockSubscribe'>
              <h3>Останні новини UDream</h3>
              <form onSubmit={this.submitFormHandler}>
                <div>
                  <input name='email' type='email' placeholder='Email' value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <button type='submit'>Підписатися</button>
              </form>
              <p>2 рази в місяць, по суті і без спаму</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
