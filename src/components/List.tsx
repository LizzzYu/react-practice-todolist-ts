import React from 'react';
import { TodosProps } from '../App';

export default function List(props: TodosProps): JSX.Element {
  const { todos } = props;

  return (
    <div>
      {todos.map(todo => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}