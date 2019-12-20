import { get } from '../../../axios'

export const readById = (idUsers = null, jwt = null) => {
  if (idUsers === null && jwt === null) {
    return {
      type: 'READ_BY_ID_USERS',
      payload: 'null'
    }
  } if (idUsers !== null && jwt !== null) {
    return {
      type: 'READ_BY_ID_USERS',
      payload: get(`/users?fn=id_users&fv=${idUsers}`, jwt)
    }
  }
}
