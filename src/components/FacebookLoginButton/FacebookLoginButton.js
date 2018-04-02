import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './FacebookLoginButton.css'

export default class FacebookLoginButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogged: false
    }

    this.facebookCallback = this.facebookCallback.bind(this)
  }

  facebookCallback (response) {
    console.log(this.props)
    this.props.facebookLogin(response)
    this.setState({
      isLogged: true
    })
  }

  render () {
    return (!this.state.isLogged ? <div>
      <FacebookLogin
        appId='748214505382810'
        autoLoad
        fields='name,email,picture'
        callback={this.facebookCallback}
        size='small'
        version='2.12'
        cssClass='registerBtnHome'
        textButton={<div><i className='fab fa-facebook-square' /><span className='icon-header'>Увійти</span></div>}
      />
    </div> : `${this.props.userData.FBName.split(' ')[0]}`) // Token: this.props.userData.FBToken
  }
}
