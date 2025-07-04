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
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>

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
          <span className={`priority ${task.priority}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
          </span>

          {task.tags.length > 0 && (
            <p>Tags: {task.tags.join(', ')}</p>
          )}
          <div className="actions">
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
