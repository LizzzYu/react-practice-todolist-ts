import React from 'react';
import { TodoProps } from '../App';

interface ListProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  todos: TodoProps[];
}

export default function List(props: ListProps): JSX.Element {
  const { todos, setTodos } = props;

  function removeTodo(id: number) {
    const removedTodos = todos.filter(todo => todo.id !== id);

    setTodos(removedTodos)
  }

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
