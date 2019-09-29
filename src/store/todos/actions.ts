import {
    Todo,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    CLEAR_COMPLETED,
    FILTER_TODOS
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
  
  export function editTodo(id: number, text: string) {
    return {
      type: EDIT_TODO,
      // payload: editedTodo
      meta: {
        id,
        text
      }
    };
  }

  export function completeTodo(id: number) {
    return {
      type: COMPLETE_TODO,
      meta: {
        id
      }
    }
  }

  export function clearCompleted () {
    return {
      type: CLEAR_COMPLETED,
      // meta: {
      //   completed
      // }
    }
  }

  export function handleFilterTodos(completed: boolean) {
    return {
      type: FILTER_TODOS,
      meta: {
        completed
      }
    };
  }
  