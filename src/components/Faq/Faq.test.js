/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import Faq from './Faq'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Faq />, div)
})
