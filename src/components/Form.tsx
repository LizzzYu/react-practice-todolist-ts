import React, { useState } from 'react';
import { TodoProps, TodosProps } from '../App';

interface FormProps extends TodosProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  todos: TodoProps[];
}

export default function Form(props: FormProps): JSX.Element {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState();

  return (
    <div>
      <input onChange={event => console.log(event.target.value)}></input>
      <button onClick={() => setTodos([...todos, {id: todos.length + 1, text: '123'}])}>新增</button>
    </div>
  );
}