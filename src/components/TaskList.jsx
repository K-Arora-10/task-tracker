import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  if (tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
