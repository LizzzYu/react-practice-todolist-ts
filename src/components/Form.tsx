import React from 'react';
import { TodoProps, TodosProps } from '../App';

interface FormProps extends TodosProps {
  setTodo: React.Dispatch<React.SetStateAction<TodoProps>>
}

export default function Form(props: FormProps): JSX.Element {
  const { todos, setTodo } = props;

  console.log(todos);

  return (
    <div>
      <input></input>
      <button onClick={() => setTodo({id: todos.length + 1, text: '123'})}>新增</button>
    </div>
  );
}