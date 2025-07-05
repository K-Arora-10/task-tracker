import React, { useState } from "react";

function TaskItem({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDesc, setUpdatedDesc] = useState(task.description);
  const [updatedDueDate, setUpdatedDueDate] = useState(task.dueDate || "");
  const [updatedPriority, setUpdatedPriority] = useState(task.priority);
  const [updatedTags, setUpdatedTags] = useState(task.tags.join(", "));

  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    const confirm = window.confirm("Are you sure you want to delete this task?");
    if (confirm) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

  const saveEdit = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? {
              ...t,
              title: updatedTitle,
              description: updatedDesc,
              dueDate: updatedDueDate,
              priority: updatedPriority,
              tags: updatedTags
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean),
            }
          : t
      )
    );
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setUpdatedTitle(task.title);
    setUpdatedDesc(task.description);
    setUpdatedDueDate(task.dueDate || "");
    setUpdatedPriority(task.priority);
    setUpdatedTags(task.tags.join(", "));
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Title"
          />

          <textarea
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
            placeholder="Description"
          />

          <input
            type="date"
            value={updatedDueDate}
            onChange={(e) => setUpdatedDueDate(e.target.value)}
          />

          <select
            value={updatedPriority}
            onChange={(e) => setUpdatedPriority(e.target.value)}
          >
            <option value="low">Low priority</option>
            <option value="medium">Medium priority</option>
            <option value="high">High priority</option>
          </select>

          <input
            value={updatedTags}
            onChange={(e) => setUpdatedTags(e.target.value)}
            placeholder="Tags (comma separated)"
          />

          <div className="actions">
            <button onClick={saveEdit}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </div>
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

          {task.tags.length > 0 && <p>Tags: {task.tags.join(", ")}</p>}

          <div className="actions">
            <button onClick={toggleComplete}>
              {task.completed ? "Mark as Pending" : "Mark as Completed"}
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
