import React, { Component } from 'react'
import './App.css'

// components
import Home from './Home/Home'
import About from './About/About'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import Dreams from './Dreams/Dreams'
import DreamsSingle from './Dreams/DreamsSingle/DreamsSingle'
import DreamsCreate from './Dreams/DreamsCreate/DreamsCreate'
import NotFound from './NotFound/NotFound'

// import Form from '../components/Form/Form'
// import FacebookLoginButton from './FacebookLoginButton/FacebookLoginButtonContainer'

// router
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about/' component={About} />
          <Route path='/dreams/' component={Dreams} />
          <Route path='/dream/create' component={DreamsCreate} />
          <Route path='/dream/:id' component={DreamsSingle} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
