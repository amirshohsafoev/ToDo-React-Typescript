import * as React from "react"

const Footer: React.SFC<any> = (props) => {
    let { clearCompleted } = props
 return (
     <footer className="footer">
        <span className="todo-count">
        <strong>{'Many' || 'No'}</strong>  todos left
        </span>
        <ul className="filters">
        </ul>
        <button
          className="clear-completed"
          onClick={()=> clearCompleted()}
        >Clear completed</button>
    </footer>
  )
}

export default Footer


