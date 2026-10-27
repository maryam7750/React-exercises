
import { useState, useReducer } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };

      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: 'toggle', payload: todo.id })
              }
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>

            <button
              onClick={() =>
                dispatch({ type: 'delete', payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
