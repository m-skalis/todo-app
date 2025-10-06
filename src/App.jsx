import { useState, useEffect} from "react"
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [todo, setTodo] = useState({id: null, text: '', completed: false})
  const [todoFilter, setTodoFilter] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (todo.text.trim() === '') return;
    setTodos(todos.concat(todo))
    setTodo({id: null, text: '', completed: false})
  }

  const handleChange = e => {
    setTodo({id: uuidv4(), text: e.target.value, completed: false})
  }

  const deleteTodo = id => {
    setTodos(t => t.filter(todo => todo.id !== id))
  }
  
  const toggleComplete = id => {
    setTodos(t => t.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  }

  const moveTaskUp = index => {
    if (index === 0) return
    const updatedTodos = [...todos]
    updatedTodos[index] = todos[index - 1]
    updatedTodos[index - 1] = todos[index]
    setTodos(updatedTodos)
  }

  const moveTaskDown = index => {
    if (index === todos.length - 1) return
    const updatedTodos = [...todos]
    updatedTodos[index] = todos[index + 1]
    updatedTodos[index + 1] = todos[index]
    setTodos(updatedTodos)
  }

  const runFilter = e => {
    setTodoFilter(e.target.value)
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const shown = todos.length > 0 && todos.filter(t => t.text.toLowerCase().includes(todoFilter.toLowerCase())) 

  return (
  <div className="todo-app">
    <h1>Welcome to your Todos Board<span className='star'>&#127775;</span></h1>
    <Input value={todo.text} onChange={handleChange} onSubmit={handleSubmit}/>
    <hr />
    <h2>Todos</h2>
    
    <input
      className = "filter"
      type="text"
      placeholder="Filter todos"
      onChange={runFilter}/>
    <TodoList 
    toggleComplete={toggleComplete}
    todos={shown}
    deleteTodo={deleteTodo}
    moveUp={moveTaskUp}
    moveDown={moveTaskDown}
    />
  </div>
  )
}

export default App

const Input = ({value, onSubmit, onChange}) => {
  return (
  <form onSubmit={onSubmit}>
    <input value={value} onChange={onChange} type="text" placeholder="Enter your todo here..." />
    <button type='submit'>Add todo</button>
  </form>
  )
}

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
