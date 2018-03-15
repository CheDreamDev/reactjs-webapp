import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
// components
import Home from '../components/Home/HomeContainer'
import Info from '../components/Info/InfoContainer'
import Assistants from '../components/Assistants/AssistantsContainer'
import NewDreams from '../components/newDreams/NewDreamsContainer'
import StepToDream from '../components/StepToDream/StepToDreamContainer'
import Categories from '../components/Categories/CategoriesContainer'
import DreamsСity from '../components/DreamsСity/DreamsСityContainer'
import City from '../components/City/CityContainer'
import BestDreams from '../components/BestDreams/BestDreams'
import Testimonials from '../components/Testimonials/TestimonialsContainer'
import AddDream from '../components/AddDream/AddDreamContainer'
import Footer from '../components/Footer/Footer'

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
              {/*<Route exact path='/' component={Home} />*/}
              {/*<Route path='/faq' component={Faq} />*/}
              {/*<Route path='/contact-us' component={ContactUs} />*/}
              {/*<Route path='/add-dream' component={AddDream} />*/}
              {/*<Route component={NotFound} />*/}
            {/*</Switch>*/}
          {/*</div>*/}

          <Home />
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
