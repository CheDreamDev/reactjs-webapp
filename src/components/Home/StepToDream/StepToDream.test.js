/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import StepToDream from './StepToDream'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StepToDream />, div)
})
