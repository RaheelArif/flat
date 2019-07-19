const messageReducer = (state=[], action) => {
    switch (action.type) {
      case "ADD_MESSAGE":
        {
          return action.payload
        }
      case "DELETE_MESSAGE":
        return {}
      default:
        return state
  
    }
  }
  
  export default messageReducer