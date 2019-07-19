const adminReducer = (state={}, action) => {
    switch (action.type) {
      case "ADD_ADMIN":
        {
          return action.payload
        }
      case "DELETE_ADMIN":
        return {}
      default:
        return state
  
    }
  }
  
  export default adminReducer