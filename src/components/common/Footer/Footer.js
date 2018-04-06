import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <Container>
          <Row className='menuFooter'>
            <Col sm={4} className='footer-credentials'>
              <Link to='/' className='logo'>
                <i className='material-icons logo-icon'>copyright</i>
                <span className='logo-title'>UDream</span>
              </Link>
            </Col>
            <Col sm={2}>
              <h3>Про нас</h3>
              <ul>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
              </ul>
            </Col>
            <Col sm={2}>
              <h3>Про нас</h3>
              <ul>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
              </ul>
            </Col>
            <Col sm={2}>
              <h3>Про нас</h3>
              <ul>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
              </ul>
            </Col>
            <Col sm={2}>
              <h3>Про нас</h3>
              <ul>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
                <li><a href='#'>Посилання</a></li>
              </ul>
            </Col>
          </Row>
          <div className='textFooter'>
            <p><a href='#'>&copy; UDream 2018</a></p>
            <p className='designed-by'>Designed by <a href='#'>Geekhub JS team</a></p>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
