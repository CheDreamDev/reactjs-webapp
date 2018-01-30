import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class FacebookLoginButton extends Component {
  render() {
    return (<div>
      <FacebookLogin
        appId='748214505382810'
        autoLoad={true}
        fields='name,email,picture'
        callback={this.props.callback}
        size={'metro'}
      />
    </div>)
  }
}

