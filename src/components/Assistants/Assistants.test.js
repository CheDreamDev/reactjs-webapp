/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import Assistants from './Assistants'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Assistants />, div)
})
