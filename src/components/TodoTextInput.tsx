import * as React from 'react'
import { connect } from "react-redux"

// import { AppState } from "../store"
// import { TodoState } from "src/store/todos/types"
import { addTodo } from "../store/todos/actions"

import classnames from "classnames"

interface TodoTextInputProps {
    // todoState: TodoState
    newTodo?: boolean
    editing?: boolean
    placeholder?: string
    text?: string
    addTodo: (args: any) => void
}

export type UpdateTodoParam = React.SyntheticEvent<{ value: string }>;

class TodoTextInput extends React.Component<TodoTextInputProps>{

    state = {
        text: ''
    }

    handleChange = (event: UpdateTodoParam) => {
        this.setState({ text: event.currentTarget.value }
        );
    }

    handleSubmit = (e: React.KeyboardEvent<any>) => {
        const text = e.currentTarget.value.trim()   
        if(text.length !== 0){
            if (e.key === "Enter") {
              this.props.addTodo({
                  text: text,
                  completed: false
              })
              if (this.props.newTodo) {
                this.setState({ text: ''})
              }
            }
        }
      }

    //   handleBlur = e => {
    //     if (!this.props.newTodo) {
    //       this.props.onSave(e.target.value)
    //     }
    //   }

    render(){
        return(
            <div>
                <input 
                className={
                classnames({
                  edit: this.props.editing,
                  'new-todo': this.props.newTodo
                })}
                type="text"
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                // onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyPress={this.handleSubmit} 
                />
            </div>
        )
    }
}

// const mapStateToProps = (state: AppState) => ({
//     todoState: state.todoState
// })

export default connect(null, { addTodo })(TodoTextInput)