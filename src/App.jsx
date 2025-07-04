import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';
import { loadTasks, saveTasks } from './utils/localStorage';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (username) {
      setTasks(loadTasks(username));
    } else {
      setTasks([]);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      saveTasks(username,tasks);
    }
  }, [tasks, username]);


  const filteredTasks = tasks.filter(task => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });


  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    setTasks([]);
  };

  if (!username) {
    return <Login setUsername={setUsername} />;
  }

  return (
    <div className="app">
      <header>
        <h2>{username}'s Task Tracker</h2>
        <div>
          <button style={{marginRight: '1rem'}} onClick={handleLogout}>Logout</button>
          <ThemeToggle />
        </div>
      </header>

      <AddTask tasks={tasks} setTasks={setTasks} />

      <TaskFilter
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tasks={tasks}
      />

      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
