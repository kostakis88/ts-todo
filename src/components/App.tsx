import React, { useState } from 'react'
import List from './List'
import NewTodo from './NewTodo'
import { Todo } from '../models/todo.model'

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddedTodo = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddedTodo}/>
      <List items={todos} onDeleteTodo={handleDeleteTodo}/>
    </div>
  )
}

export default App