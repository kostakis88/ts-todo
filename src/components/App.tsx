import React from 'react'
import List from './List'
import NewTodo from './NewTodo'

const App: React.FC = (): JSX.Element => {
  const todos: any = [{id: '1', text: 'code a todo list'}]

  return (
    <div className="App">
      <NewTodo/>
      <List items={todos}/>
    </div>
  )
}

export default App