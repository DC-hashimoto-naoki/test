import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // new TODO
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map(todo => {
      {
        if (todo.id === id) {
          todo.inputValue = inputValue;
        }
        return todo;
      }
    });

    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map(todo => {
      {
        if (todo.id === id) {
          todo.checked = !checked;
        }
        return todo;
      }
    });

    setTodos(newTodos);

  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className='card' style={{ borderRadius: "15px" }}>
        <div className='card-body p-5'>
          <h2 className='mb-3'>TO DO LIST with Typescript</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => handleChange(e)} className="inputText" value={inputValue} />
            <input type="submit" value="create" className='submitButton btn btn-primary btn-lg ms-2' />
          </form>
          <ul className='todoList'>
            {todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" className='me-2'
                  onChange={(e) => handleChecked(todo.id, todo.checked)} />
                <input type="text"
                  onChange={(e) => handleEdit(todo.id, e.target.value)}
                  className="inputText"
                  value={todo.inputValue}
                  disabled={todo.checked}
                />
                <button onClick={() => handleDelete(todo.id)}>
                  <i className="fas fa-times text-primary"></i>
                </button>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
