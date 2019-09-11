import {
    TodoState,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TodoActionTypes
}
from './types'

const initialState: TodoState = {
    todos: [],
    // filteredList: [],
    // isFiltered: false
  };

export function todoReducer(
    state = initialState,
    action: TodoActionTypes
  ): TodoState {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(
            todo => todo.id !== action.meta.id
          )
        };
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if(todo.id === action.payload.id) {
              todo = action.payload
            }
            return todo
          })
        }
        default:
      return state;
    }
}