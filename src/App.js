import React, { useState, useEffect } from 'react';
import Loading from './components/loading';
import axios from 'axios';
import TodoList from './components/todolist';
import Navbar from './components/navbar';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((result) => {
      setTodos(result.data)
    })
  }, []);

  return (
    <div>
      <Navbar />
      { todos ? <TodoList todos={todos} /> : <Loading />  }
    </div>
  )
}

export default App;
