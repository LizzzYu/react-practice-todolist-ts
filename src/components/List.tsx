import React from 'react';
import { TodoProps } from '../App';

interface ListProps {
  todos: TodoProps[];
  removeTodo: (id: number) => void;
}

export default function List(props: ListProps): JSX.Element {
  const { todos, removeTodo } = props;

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => removeTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ol>
    </div>
  );
}
