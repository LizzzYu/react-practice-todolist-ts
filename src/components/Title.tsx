import React from 'react';
import { TodoProps } from '../App';

interface TitleProps {
  todos: TodoProps[];
}

export default function Title(props: TitleProps): JSX.Element {
  const { todos } = props;

  return <h2>待辦事項清單({todos.length})</h2>;
}
