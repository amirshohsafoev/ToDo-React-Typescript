import {
    Todo,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO
}
from './types'

export function addTodo(newTodo: Todo) {
    return {
      type: ADD_TODO,
      payload: newTodo
    };
  }
  
  export function deleteTodo(id: number) {
    return {
      type: DELETE_TODO,
      meta: {
        id
      }
    };
  }
  
  export function editTodo(editedTodo: Todo) {
    return {
      type: EDIT_TODO,
      payload: editedTodo
    };
  }