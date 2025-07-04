import React from 'react';

function TaskFilter({ filter, setFilter, searchQuery, setSearchQuery, tasks }) {
  const count = {
    all: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setFilter('all')}
          style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
        >
          All ({count.all})
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
        >
          Completed ({count.completed})
        </button>
        <button
          onClick={() => setFilter('pending')}
          style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal' }}
        >
          Pending ({count.pending})
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default TaskFilter;
