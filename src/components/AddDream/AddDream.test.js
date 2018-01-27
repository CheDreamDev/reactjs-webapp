/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import AddDream from './AddDream'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddDream />, div)
})
