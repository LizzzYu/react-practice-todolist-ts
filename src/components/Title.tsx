import React from 'react';
import { TodosProps } from '../App';

export default function Title(props: TodosProps): JSX.Element {
  const { todos } = props;

  return (
    <h2>
      待辦事項清單({todos.length})
    </h2>
  );
}