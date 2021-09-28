import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Title from './components/Title';

export interface TodoProps {
  id: number;
  text: string | null;
}

export interface TodosProps {
  todos: TodoProps[];
}

const initialTodos: TodoProps[] = [
  {
    id: 0,
    text: '坐捷運',
  },
  {
    id: 1,
    text: '到公司',
  },
  {
    id: 2,
    text: '寫扣',
  },
];

export default function App(): JSX.Element {
  // const [todo, setTodo] = useState<TodoProps>({ id: null, text: null });
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos);

  return (
    <div>
      <Title todos={todos} />
      <Form todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}
