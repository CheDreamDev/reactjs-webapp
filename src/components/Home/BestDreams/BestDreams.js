import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './BestDreams.css'
import sky from '../../../assets/images/sky.jpg'

class BestDreams extends Component {
  render () {
    return (
      <section className='bestDreams'>
        <div className='container'>
          <div className='blockBestDreams'>
            <div className='rowBestDreams'>
              <img className='photoBestDreams' src={sky} alt='sky' />
              <div>
                <a href='' className=''>Як створити мрію?</a>
              </div>
            </div>
            <div className='rowBestDreams'>
              <img className='photoBestDreams' src={sky} alt='sky' />
              <div>
                <a href='' className=''>Як створити мрію?</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BestDreams
