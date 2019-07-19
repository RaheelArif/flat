import { createStore, combineReducers } from 'redux';

import userReducer from "./reducers/user-reducer"
import propertyReducer from "./reducers/property-reducer"
import adminReducer from "./reducers/admin-reducer"
import messageReducer from "./reducers/message-reducer"
import bidReducer from  "./reducers/bid_reducer"

const allReducers = combineReducers({ userReducer,propertyReducer,adminReducer,messageReducer,bidReducer })

let store = createStore(allReducers);

window.store = store

export default store