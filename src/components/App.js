import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
// components
import Home from '../components/Home/HomeContainer'
import Faq from '../components/Faq/FaqContainer'
import ContactUs from '../components/ContactUs/ContactUsContainer'
import AddDream from '../components/AddDream/AddDreamContainer'
import FacebookLoginButton from './FacebookLoginButton'
// router
import { Route, Switch } from 'react-router'
import { HashRouter, NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) { staticContext.status = 404 }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }} />
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      FBImg: '',
      FBName: '',
      FBEmail: '',
      FBToken: '',
    }
  }

  facebookCallback(response) {
    console.log(response, this)
    this.setState({
      FBImage: response.picture.data.url,
      FBName: response.name,
      FBEmail: response.email,
      FBToken: response.accessToken
    },state => console.log(state))
  }
  
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <header className='App-header'>
            <h1>Chedream</h1>

            <nav>
              <ul>
                <li><NavLink to={`/`} activeClassName="is-active">Головна</NavLink></li>
                <li><NavLink to={`/faq`} activeClassName="is-active">FAQ</NavLink></li>
                <li><NavLink to={`/contact-us`} activeClassName="is-active">Контакти</NavLink></li>
                <li><NavLink to={`/add-dream`} activeClassName="is-active">Додати мрію</NavLink></li>
                <li>
                  <FacebookLoginButton callback={this.facebookCallback.bind(this)} />
                </li>
                <li><img alt={this.state.FBName} src={this.state.FBImage} /></li>
                <li>{this.state.FBName}</li>
                <li>{this.state.FBEmail}</li>
                <li>{this.state.FBToken}</li>
              </ul>
            </nav>
          </header>

          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/faq' component={Faq} />
              <Route path='/contact-us' component={ContactUs} />
              <Route path='/add-dream' component={AddDream} />
              <Route component={NotFound} />
            </Switch>
          </div>

          <footer>
            <p>Created by Geekhub JS Team</p>
          </footer>
        </div>
      </HashRouter>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  changeStateProp: PropTypes.func.isRequired,
  myCustomPropsFunc: PropTypes.func
}

App.defaultProps = {
  value: 0,
  changeStateProp: () => {},
  myCustomPropsFunc: () => {}
}

export default App