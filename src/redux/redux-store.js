import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer} from "./Reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    Reducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store