import * as React from "react"
import { Todo} from "../store/todos/types"
import TodoTextInput from './TodoTextInput'
import classnames from 'classnames'
import { completeTodo, editTodo, deleteTodo } from "src/store/todos/actions";

interface TodoCardProps {
    todo: Todo
    edit: boolean
    props: any
    deleteTodo: typeof deleteTodo
    completeTodo: typeof completeTodo
    editTodo: typeof editTodo
   }
   
   class TodoCard extends React.Component<TodoCardProps>{
       state = {
           editing: false,
           completed: false
       }

     handleDblClick = () => {
         if(this.props.edit === true){
             this.setState({
                 editing: true
             })
         }
     }

     handleComplete = (id: number) => {
         this.props.completeTodo(id)
         this.setState({
             completed: !this.state.completed
         })
     }
    
     render(){
         const {todo, deleteTodo} = this.props
         
         let element     
         if(this.state.editing){
             element = <TodoTextInput 
                        text={todo.text}
                        editing={this.state.editing}
                        />
         } else {
             element = ( 
                <div className="view">
                     <input 
                     className="toggle"
                     type="checkbox"
                     checked={todo.completed}
                     onChange={() => this.handleComplete(todo.id)}
                     />
                     <label
                     onDoubleClick={this.handleDblClick}
                     >
                     {todo.text}
                     </label>
                     <button className="destroy" onClick={()=> deleteTodo(todo.id)}/>
                 </div> )

         }

        return (
            <li
            className={classnames({
              completed: todo.completed,
              editing: this.state.editing
            })}
          >
            {element}
          </li>
          );

     }
   }
   
   export default TodoCard;


   

