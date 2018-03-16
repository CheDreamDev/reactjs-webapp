/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import Testimonials from './Testimonials'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Testimonials />, div)
})
