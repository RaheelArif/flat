import { createStore, combineReducers } from 'redux';

import userReducer from "./reducers/user-reducer"
import propertyReducer from "./reducers/property-reducer"
import adminReducer from "./reducers/admin-reducer"
import messageReducer from "./reducers/message-reducer"


const allReducers = combineReducers({ userReducer,propertyReducer,adminReducer,messageReducer })

let store = createStore(allReducers);

window.store = store

export default store