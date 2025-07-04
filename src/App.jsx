import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(`tasks-${localStorage.getItem('username')}`);
    return saved ? JSON.parse(saved) : [];
  },[username]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
  if (username) {
    localStorage.setItem(`tasks-${username}`, JSON.stringify(tasks));
  }
}, [tasks, username]);


  const filtered = tasks.filter((task) => {
    const matchesStatus =
      filter === 'all' ||
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed);
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (!username) {
    return <Login setUsername={setUsername} />;
  }

  return (
    <div className="app">
      <header>
        <h2>{username}'s Task Tracker</h2>
        <button onClick={() => {
          localStorage.removeItem('username');
          setUsername('');
          setTasks([])
        }}>Logout</button>
        <ThemeToggle />
      </header>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskFilter
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tasks={tasks}
      />
      <TaskList tasks={filtered} setTasks={setTasks} />
    </div>
  );
}

export default App;
