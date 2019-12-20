import { combineReducers } from 'redux'

/**
 * Reducers
 */
import Auth_token from '../actions/auth/token'
import Users_readById from '../actions/users/readById'

export default combineReducers({
  Auth_token,
  Users_readById
})
