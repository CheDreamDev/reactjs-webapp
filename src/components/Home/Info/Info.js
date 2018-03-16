import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Info.css'
import sky from '../../../assets/images/sky.jpg'

class Info extends Component {
  render () {
    return (
      <section className='info'>
        <div className='App-info container'>
          <div className='row'>
            <div className='rowInfo'>
              <h1 className='info-title'>Реалізуймо ідеї разом</h1>
              <p className='infoContent'>Pain may sometimes be the reason why people change. Getting
                bad grades make you realize that you need to study. Debts remind
                you of your inability to look a source of income</p>
              <a className='registerBtn'>Зареєструватися</a>
              <a href='' className='btnInfo'>Як це працює</a>
            </div>
            <div className='rowImg'>
              <img className='sky' src={sky} alt='sky' />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Info
