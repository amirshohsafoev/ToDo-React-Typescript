import {
    TodoState,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    CLEAR_COMPLETED,
    FILTER_TODOS,
    TodoActionTypes
}
from './types'

const initialState: TodoState = {
    todos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      },
      {
        text: 'Finish the project',
        completed: true,
        id: 1
      },
      {
        text: 'Send email to Avary',
        completed: true,
        id: 2
      }
    ],
    filteredTodos: [],
    isFiltered: false
  };
  


export function todoReducer(
    state = initialState,
    action: TodoActionTypes
  ): TodoState {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, {
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: action.payload.completed,
            text: action.payload.text
          }]
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
            if(todo.id === action.meta.id) {
              todo.text = action.meta.text
            }
            return todo
          })
        }
        case COMPLETE_TODO:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if(todo.id === action.meta.id) {
              todo.completed = !todo.completed
            }      
            return todo
          })
        }
        case CLEAR_COMPLETED:
          return {
            ...state, todos: state.todos.filter(todo => !todo.completed)
          }
        case FILTER_TODOS:
            let filter: boolean;
            if (action.meta.completed === true){
              filter = true
            } else {
              filter = false
            }
            return {
              ...state,
              filteredTodos: state.todos.filter(todo => todo.completed === action.meta.completed),
              isFiltered: filter
            }
        default:
      return state;
    }
}