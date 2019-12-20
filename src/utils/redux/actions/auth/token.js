export const token = (token = null) => {
  if (token !== null) {
    return {
      type: 'TOKEN',
      payload: token
    }
  } else {
    return {
      type: 'TOKEN',
      payload: 'null'
    }
  }
}
