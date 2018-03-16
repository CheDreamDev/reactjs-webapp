export const FACEBOOK_LOGIN = '_FACEBOOK_LOGIN'

export function facebookLogin (response) {
  return dispatch => {
    dispatch({
      type: FACEBOOK_LOGIN,
      state: {
        FBImage: response.picture.data.url,
        FBName: response.name,
        FBEmail: response.email,
        FBToken: response.accessToken
      }
    })
  }
}
