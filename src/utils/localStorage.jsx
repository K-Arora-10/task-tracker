export function saveTasks(username, tasks) {
  if (!username) return;
  localStorage.setItem(`tasks-${username}`, JSON.stringify(tasks));
}

export function loadTasks(username) {
  if (!username) return [];
  const saved = localStorage.getItem(`tasks-${username}`);
  return saved ? JSON.parse(saved) : [];
}

export function clearTasks(username) {
  if (!username) return;
  localStorage.removeItem(`tasks-${username}`);
}
