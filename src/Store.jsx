import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as Authreducer } from "./Authreducer/reducer";
import { reducer as Appreducer } from "./Appreducer/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootreducer = combineReducers({ Authreducer, Appreducer });
export let store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
