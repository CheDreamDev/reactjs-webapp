import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <section className='header'>
        <header className='App-header container'>
          <div className='logo logo-block'>
            <div className='logo-wrap'>
              <Link to='/'>
                <p className='copyright'>&copy;</p>
                <h3 className='logo-title'>UDream</h3>
              </Link>
            </div>
          </div>
          <nav className='nav header-block'>
            <img src='' className='icon' alt='icon' />
            <NavLink
              to='/dream/create'
              className='dreamBtn'
              activeClassName='selected'
            >Створити мрію(проект)</NavLink>
            <NavLink
              to='/dreams'
              className='dreamBtn'
              activeClassName='selected'
            >Мрії(проекти)</NavLink>
          </nav>
          <div className='btn header-block'>
            <img src='' className='icon' alt='icon' />
            <Link
              to='/sign-in'
              className='comeBtn'
            >Увійти</Link>
            <Link
              to='/sign-up'
              className='registerBtnHome'
            >Зареєструватися</Link>
          </div>
        </header>
      </section>
    )
  }
}

export default Header
