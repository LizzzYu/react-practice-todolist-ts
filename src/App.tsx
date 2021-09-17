import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Title from './components/Title';

export interface TodoProps {
  id: number | null;
  text: string | null;
}

export interface TodosProps {
  todos: TodoProps[];
}

const initialTodos: TodosProps['todos'] = [
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
  const [todo, setTodo] = useState<TodoProps>({ id: null, text: null });
  const [todos, setTodos] = useState<TodosProps['todos']>(initialTodos);

  // function addTodo(todo?: TodoProps) {
  //   if (todo) {
  //     setTodo(todo);

  //     setTodos({
  //       todos: [...initialTodos, todo],
  //     });

  //     return todos;
  //   }

  //   return initialTodos;
  // }

  function createTodos() {
    
  }

  setTodos([...initialTodos, todo]);

  return (
    <div>
      <Title todos={todos} />
      <Form todos={todos} setTodo={setTodo} />
      <List todos={todos} />
    </div>
  );
}
