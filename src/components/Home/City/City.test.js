/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import City from './City'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<City />, div)
})
