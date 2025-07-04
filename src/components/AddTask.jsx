
import React, { useState } from 'react';

function AddTask({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,      createdAt: new Date().toISOString(),
      dueDate,
      priority,
      tags: tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean)
    };

    setTasks([newTask, ...tasks]);

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Task</h3>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low priority</option>
        <option value="medium">Medium priority</option>
        <option value="high">High priority</option>
      </select>

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
