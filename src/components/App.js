import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
// components
import Header from './common/Header/Header'
import Info from './Home/Info/Info'
import Assistants from './Home/Assistants/Assistants'
import NewDreams from './Home/NewDreams/NewDreams'
import StepToDream from './Home/StepToDream/StepToDream'
import Categories from './Home/Categories/Categories'
import DreamsСity from './Home/DreamsСity/DreamsСity'
import City from './Home/City/City'
import BestDreams from './Home/BestDreams/BestDreams'
import Testimonials from './Home/Testimonials/Testimonials'
import AddDream from './Home/AddDream/AddDream'
import Footer from './common/Footer/Footer'

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
  render () {
    return (
      <HashRouter>
        <div className='App'>
          {/*<header className='App-header'>*/}
            {/*<h1>Chedream</h1>*/}

            {/*<nav>*/}
              {/*<ul>*/}
                {/*<li><NavLink to={`/`} activeClassName="is-active">Головна</NavLink></li>*/}
                {/*<li><NavLink to={`/faq`} activeClassName="is-active">FAQ</NavLink></li>*/}
                {/*<li><NavLink to={`/contact-us`} activeClassName="is-active">Контакти</NavLink></li>*/}
                {/*<li><NavLink to={`/add-dream`} activeClassName="is-active">Додати мрію</NavLink></li>*/}
              {/*</ul>*/}
            {/*</nav>*/}
          {/*</header>*/}

          {/*<div>*/}
            {/*<Switch>*/}
              {/*<Route exact path='/' component={Header} />*/}
              {/*<Route path='/faq' component={Faq} />*/}
              {/*<Route path='/contact-us' component={ContactUs} />*/}
              {/*<Route path='/add-dream' component={AddDream} />*/}
              {/*<Route component={NotFound} />*/}
            {/*</Switch>*/}
          {/*</div>*/}

          <Header />
          <Info />
          <Assistants />
          <NewDreams />
          <StepToDream />
          <Categories />
          <DreamsСity />
          <City />
          <BestDreams />
          <Testimonials />
          <AddDream />
          <Footer />
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
