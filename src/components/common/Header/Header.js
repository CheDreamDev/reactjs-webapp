import React, { Component } from 'react'
import FBLogin from '../../FacebookLoginButton/FacebookLoginButtonContainer'
// import PropTypes from 'prop-types'
import './Header.css'
import { Container, Row, Col } from 'react-grid-system'
import { NavLink, Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <section className='section-header'>
        <Container className='header container'>
          <Row align='center' className='app-header row'>
            <Col md={2} className='block'>
              <div>
                <Link to='/' className='logo header-block'>
                  <i className='material-icons logo-icon'>copyright</i>
                  <h3 className='logo-title'>UDream</h3>
                </Link>
              </div>
            </Col>
            <Col md={5} className='block'>
              <div className='nav header-block'>
                <i className='material-icons'>whatshot</i>
                <NavLink
                  to='/dream/create'
                  className='dreamBtn addBtn'
                  activeClassName='selected'
                >Створити мрію(проект)</NavLink>
                <NavLink
                  to='/dreams'
                  className='dreamBtn'
                  activeClassName='selected'
                >Мрії(проекти)</NavLink>
              </div>
            </Col>
            <Col md={5} className='block'>
              <div className='btn header-block'>
                <i className='material-icons search'>search</i>
                <FBLogin />
                <Link
                  to='/sign-up'
                  className='registerBtnHome'
                >Зареєструватися</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Header
