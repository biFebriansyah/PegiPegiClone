const initialState = {
  token: {}
}

const token = (state = initialState, action) => {
  return {
    token: action.payload
  }
}

export default token
