import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";


import { todoReducer } from "./todos/reducers";
import { visibilityFilter } from './filters/reducers'

const rootReducer = combineReducers({
  todoState: todoReducer,
  visibility: visibilityFilter
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    middleWareEnhancer
  );
  return store;
}
