import React, { useRef } from 'react'

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = inputRef.current!.value
    props.onAddTodo(enteredText)
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={inputRef}></input>
    </div>
    <button type="submit">ADD TODO</button>
  </form>
}

export default NewTodo