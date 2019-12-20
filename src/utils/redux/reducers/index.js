import { combineReducers } from 'redux'

/**
 * Reducers
 */
import Auth_token from '../reducers/auth/token'
import Users_readById from '../reducers/users/readById'

export default combineReducers({
  Auth_token,
  Users_readById
})
