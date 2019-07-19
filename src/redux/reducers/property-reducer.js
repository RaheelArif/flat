const propertyReducer = (state={}, action) => {
    switch (action.type) {
      case "ADD_Property":
        {
          return action.payload
        }
      case "DELETE_Property":
        
            return state.filter(property=>{
                 if(property._id!==action.payload._id)
                 return property;
             })
         
      default:
        return state
  
    }
  }
  
  export default propertyReducer