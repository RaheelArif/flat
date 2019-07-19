const propertyReducer = (state=[], action) => {
    switch (action.type) {
      case "ADD_Property":
        {
          return action.payload;
        }
      case "DELETE_PROPERTY":{
        return state.filter(program=>{
             if(program._id!=action.payload._id)
             return program;
         })
     }
     case "EDIT_PROPERTY":{
      return state.filter(program=>{
           if(program._id==action.payload._id)
           return action.payload;
           else
           return program
       })
   }
         
      default:
        return state
  
    }
  }
  
  export default propertyReducer