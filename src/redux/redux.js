import { createStore, combineReducers } from 'redux';

import userReducer from "./reducers/user-reducer"
import propertyReducer from "./reducers/property-reducer"

const allReducers = combineReducers({ userReducer,propertyReducer })

let store = createStore(allReducers);

window.store = store

export default store