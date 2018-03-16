import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='blockFooter'>
            <div className='menuFooter'>
              <div className='logo-wrap logo-footer'>
                <p className='copyright'>&copy;</p>
                <h3 className='logo-title'>UDream</h3>
              </div>
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
