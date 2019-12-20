const initialState = {
  stateArray: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
}

const readById = (state = initialState, action) => {
  switch (action.type) {
    case 'READ_ALL_USERS':
      return {
        ...state,
        stateArray: action.payload
      }
    case 'READ_ALL_USERS_PENDING':
      return {
        ...state,
        isPending: true
      }
    case 'READ_ALL_USERS_REJECTED':
      return {
        ...state,
        isRejected: true
      }
    case 'READ_ALL_USERS_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        stateArray: action.payload.data.payload
      }
    default:
      return state
  }
}

export default readById
