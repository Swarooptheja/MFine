import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Authreducer } from "./Authreducer/reducer";
import {reducer as Appreducer} from "./Appreducer/reducer"
let rootreducer=combineReducers({Authreducer,Appreducer})
export let store=legacy_createStore(rootreducer,applyMiddleware(thunk))