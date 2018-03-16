/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import DreamsCity from './DreamsCity'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DreamsCity />, div)
})
