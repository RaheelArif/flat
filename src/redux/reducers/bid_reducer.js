const bidReducer = (state=[], action) => {
    switch (action.type) {
      case "ADD_BID":
        {
          return action.payload
        }
      case "DELETE_BID":
        return {}
      default:
        return state
  
    }
  }
  
  export default bidReducer