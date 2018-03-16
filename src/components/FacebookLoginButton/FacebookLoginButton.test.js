/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import FacebookLoginButton from './FacebookLoginButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FacebookLoginButton />, div)
})
