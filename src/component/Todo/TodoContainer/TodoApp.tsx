import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/modules';
import { addTodo, removeTodo, toggleTodo } from 'redux/modules/todos';
import TodoInsert from '../TodoInsert';
import TodoList from '../TodoList';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;