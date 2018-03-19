import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Assistants.css'

class Assistants extends Component {
  render () {
    return (
      <section className='assistants'>
        <div className='container'>
          <div className='row-wrap'>
            <div className='row-assistants'>
              <i className='material-icons'>account_circle</i>
              <div className='text-block'>
                <h4>Somebody допомагає</h4>
                <h3>Назва проекту</h3>
                <p>5 годин тому</p>
              </div>
            </div>
            <div className='row-assistants'>
              <i className='material-icons'>account_circle</i>
              <div className='text-block'>
                <h4>Somebody допомагає</h4>
                <h3>Назва проекту</h3>
                <p>5 годин тому</p>
              </div>
            </div>
            <div className='row-assistants'>
              <i className='material-icons'>account_circle</i>
              <div className='text-block'>
                <h4>Somebody допомагає</h4>
                <h3>Назва проекту</h3>
                <p>5 годин тому</p>
              </div>
            </div>
            <div className='row-assistants'>
              <i className='material-icons'>account_circle</i>
              <div className='text-block'>
                <h4>Somebody допомагає</h4>
                <h3>Назва проекту</h3>
                <p>5 годин тому</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Assistants
