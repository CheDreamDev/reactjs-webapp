import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Categories.css'

class Categories extends Component {
  render () {
    return (
      <section className='categories'>
        <div className='container'>
          <div className='row-wrap'>
            <div className='block-btn'>
              <a className='registerBtnHome'>Категорія спорт</a>
              <a className='registerBtnHome'>Категорія спорт</a>
              <a className='registerBtnHome'>Категорія спорт</a>
              <a className='registerBtnHome'>Категорія спорт</a>
              <a className='registerBtnHome'>Категорія спорт</a>
              <a className='comeBtn'>Всі категорії</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Categories
