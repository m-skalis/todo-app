const TodoList = ({toggleComplete, todos, deleteTodo, moveUp, moveDown}) => {
  return (
    <ul className="todo-list">
      {todos && todos.map((todo, index) => {
        return (
        <div className="container" key={todo.id}>
          <li
          onClick={() => toggleComplete(todo.id)}
          className={todo.completed ? "complete" : ""}>
          {todo.text}
          </li>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>&#128465;</button>
          <button className="arrow-btn" onClick={() => moveUp(index)}>&uarr;</button>
          <button className="arrow-btn" onClick={() => moveDown(index)}>&darr;</button>
        </div>
        )
      })}
    </ul>
  )
}

export default TodoList