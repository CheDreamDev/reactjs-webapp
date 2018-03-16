import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <section className='header'>
        <header className='App-header container'>
          <div className='logo logo-block'>
            <div className='logo-wrap'>
              <p className='copyright'>&copy;</p>
              <h3 className='logo-title'>UDream</h3>
            </div>
          </div>
          <nav className='nav header-block'>
            <img src='' className='icon' alt='icon' />
            <a href='#' className='dreamBtn'>Створити мрію(проект)</a>
            <a href='#' className='dreamBtn'>Мрії(проекти)</a>
          </nav>
          <div className='btn header-block'>
            <img src='' className='icon' alt='icon' />
            <a href='#' className='comeBtn'>Увійти</a>
            <a href='#' className='registerBtnHome'>Зареєструватися</a>
          </div>
        </header>
      </section>
    )
  }
}

export default Header
