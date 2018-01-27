/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import ContactUs from './ContactUs'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ContactUs />, div)
})
