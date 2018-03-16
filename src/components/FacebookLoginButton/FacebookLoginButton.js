import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './FacebookLoginButton.css'

const Icon = () => (
  <img className='fb-icon' src='' alt='' />
)

export default class FacebookLoginButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogged: false
    }

    this.facebookCallback = this.facebookCallback.bind(this)
  }

  facebookCallback (response) {
    this.props.facebookLogin(response)
    this.setState({
      isLogged: true
    })
  }

  render () {
    console.log(this.props)
    return (!this.state.isLogged ? <div>
      <FacebookLogin
        appId='748214505382810'
        autoLoad
        fields='name,email,picture'
        callback={this.facebookCallback}
        size='small'
        icon={<Icon />}
        cssClass='fb-login'
        textButton={'Увійти'}
      />
    </div> : `Logged in as ${this.props.userData.FBName} with token: ${this.props.userData.FBToken}`)
  }
}
