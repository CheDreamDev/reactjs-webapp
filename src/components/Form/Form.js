import React, { Component } from 'react'
// import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: moment()
    }
    this.dateChanged = this.dateChanged.bind(this)
  }

  dateChanged (date) {
    this.setState({
      date: date
    })
  }

  render () {
    return (
      <div className='date'>
        <DatePicker selected={this.state.date}
          onChange={this.dateChanged}
          dateFormat='YYYY/MM/DD'
        />
      </div>
    )
  }
}

export default Form
