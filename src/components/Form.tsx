import React, { useState } from 'react';
import { TodoProps, TodosProps } from '../App';

interface FormProps extends TodosProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  todos: TodoProps[];
}

export default function Form(props: FormProps): JSX.Element {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState({id: todos.length + 1, text: ''});

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({id: todos.length + 1, text: event.target.value})
  }

  function createTodo(todo: TodoProps) {
    if (todo.text === '') return;

    setTodos([...todos, todo]);
    setTodo({id: 0, text: ''});
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13) {
      createTodo(todo);
    }
  }
  
  return (
    <div>
      <input
        onChange={event => handleOnChange(event)}
        onKeyDown={event => handleKeyDown(event)}
        value={todo.text} />
      <button onClick={() => createTodo(todo)}>
        新增
      </button>
    </div>
  );
}