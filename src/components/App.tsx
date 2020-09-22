import React, { Fragment, useState } from 'react'

interface Todo {
  text: string
  complete: boolean
}

const App = (): JSX.Element => {

  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: Todo[] = [...todos, {text, complete: false}]
    setTodos(newTodos) 
  }

  const completeTodos = (index: number): void => {
    const newTodos: Todo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  return (
    <Fragment>
      <form>
        <input type="text" onChange={handleChange} value={value}/>
        <input type="submit" value="Add" onClick={handleSubmit}/>
      </form>
      <div>
        {todos.map((todo: Todo, index: number) => {
          return (
            <div key={index} style={{display: 'flex'}}>
              <div key={index}>{todo.text}</div>
              <button onClick={() => completeTodos(index)}>{todo.complete ? 'Incomplete' : 'Complete'}</button>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default App