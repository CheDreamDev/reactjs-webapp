import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { facebookLogin } from '../../actions/facebook-login'
import FacebookLoginButton from './FacebookLoginButton'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state, 'props', facebookLogin)
  return {
    facebookLogin,
    userData: state.facebookLogin.FBData,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({facebookLogin}, dispatch)
  }
}

const FacebookLoginButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookLoginButton)

export default FacebookLoginButtonContainer
