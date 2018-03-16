/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import NewDreams from './NewDreams'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewDreams />, div)
})
