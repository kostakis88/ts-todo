import React from 'react'

interface ListProps {
  items: {id: string, text: string}[]
}

const List: React.FC<ListProps> = (props): JSX.Element => {
  return (
    <ul>
      {props.items.map(item => {
        return <li key={item.id}>{item.text}</li>
      })}
    </ul>
  )
}

export default List