import React, { useState } from 'react';
import { TodoProps, TodosProps } from '../App';

interface FormProps extends TodosProps {
  todos: TodoProps[];
  createTodo: (todo: TodoProps) => void;
}

export default function Form(props: FormProps): JSX.Element {
  const { todos, createTodo } = props;
  const [todo, setTodo] = useState({ id: todos.length + 1, text: '' });

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ id: todos.length + 1, text: event.target.value });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13) {
      createTodo(todo);
    }
  }

  return (
    <div>
      <input
        onChange={(event) => handleOnChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
        value={todo.text}
      />
      <button
        onClick={() => {
          createTodo(todo);
          setTodo({ id: 0, text: '' });
        }}>
        新增
      </button>
    </div>
  );
}
