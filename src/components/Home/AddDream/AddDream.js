import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './AddDream.css'
import { Link } from 'react-router-dom'

class AddDream extends Component {
  render () {
    return (
      <section className='addDream'>
        <div className='container'>
          <div className='blockAddDream'>
            <h2>Втіль мрію у життя!</h2>
            <Link
              to='/sign-up'
              className='registerBtn'
            >Зареєструватися</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default AddDream
