import React from 'react'

interface ListProps {
  items: {id: string, text: string}[]
  onDeleteTodo: (id: string) => void
}

const List: React.FC<ListProps> = (props): JSX.Element => {

  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, item.id)}>DELETE</button>
          </li>
        )
      })}
    </ul>
  )
}

export default List