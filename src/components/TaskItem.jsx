// src/components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDesc, setUpdatedDesc] = useState(task.description);

  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t)
    );
  };

  const deleteTask = () => {
    const confirm = window.confirm("Are you sure you want to delete this task?");
    if (confirm) {
      setTasks(prev => prev.filter(t => t.id !== task.id));
    }
  };

  const saveEdit = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, title: updatedTitle, description: updatedDesc } : t
      )
    );
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setUpdatedTitle(task.title);
    setUpdatedDesc(task.description);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        marginBottom: '1rem',
        background: task.completed ? '#e0ffe0' : '#fff8dc'
      }}
    >
      {isEditing ? (
        <>
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
          <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
          {task.dueDate && <p>Due: {task.dueDate}</p>}
          <p>Priority: {task.priority}</p>
          {task.tags.length > 0 && (
            <p>Tags: {task.tags.join(', ')}</p>
          )}
          <div style={{ marginTop: '0.5rem' }}>
            <button onClick={toggleComplete}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
