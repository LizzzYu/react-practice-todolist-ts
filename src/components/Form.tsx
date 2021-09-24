import React, { useState } from 'react';
import { TodoProps, TodosProps } from '../App';

interface FormProps extends TodosProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  todos: TodoProps[];
}

export default function Form(props: FormProps): JSX.Element {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState({id: todos.length + 1, text: ''});

  function handleOnClick(todo: TodoProps) {
    if (todo.text === '') return;

    setTodos([...todos, todo]);
    setTodo({id: 0, text: ''});
  }
  
  return (
    <div>
      <input
        onChange={event => setTodo({id: todos.length + 1, text: event.target.value})}
        value={todo.text} />
      <button onClick={() => handleOnClick(todo)}>
        新增
      </button>
    </div>
  );
}