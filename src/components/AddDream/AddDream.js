import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './AddDream.css'

class AddDream extends Component {
  render () {
    return (
      <section className='addDream'>
        <div className='container'>
          <div className='blockAddDream'>
            <h2>Втіль мрію у життя!</h2>
            <a className='registerBtn'>Зареєструватися</a>
          </div>
        </div>
      </section>
    )
  }
}

export default AddDream
