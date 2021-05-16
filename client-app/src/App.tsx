import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users').then(response => {
      setUsers(response.data);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
