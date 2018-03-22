import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='blockFooter'>
            <hr/>
            <div className='menuFooter'>
              <p className='logo-title'><span className="copyright">&copy;</span> UDream</p>
              <div className='menu-wrap'>
                <div className='block-menu'>
                  <h3>Про нас</h3>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                </div>
                <div className='block-menu'>
                  <h3>Про нас</h3>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                </div>
                <div className='block-menu'>
                  <h3>Про нас</h3>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                </div>
                <div className='block-menu'>
                  <h3>Про нас</h3>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                  <a href='#'>Посилання</a>
                </div>
              </div>
            </div>
            <hr/>
            <div className='textFooter'>
              <p>&copy; UDream 2018</p>
              <p>Designed by</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
