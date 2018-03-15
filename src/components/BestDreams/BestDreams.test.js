/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import BestDreams from './BestDreams'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BestDreams />, div)
})
