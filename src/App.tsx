import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Title from './components/Title';

export interface TodoProps {
  id: number;
  text: string;
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
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos);

  function removeTodo(id: number) {
    const removedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(removedTodos);
  }

  function createTodo(todo: TodoProps) {
    if (todo.text === '') return;

    setTodos([...todos, todo]);
  }

  return (
    <div>
      <Title todos={todos} />
      <Form todos={todos} createTodo={createTodo} />
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
