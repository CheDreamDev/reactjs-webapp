import { FACEBOOK_LOGIN } from '../actions/facebook-login'
import update from 'immutability-helper'

const defaultState = {
    FBImage: '',
    FBName: '',
    FBEmail: '',
    FBToken: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN:
      
      // Axious request to server here
      // Get server response

      return update(state, {
        FBData: {
          $set: {  
            ...state,
            ...action.state
          }
        }
      })
    default:
      return state
  }
}
