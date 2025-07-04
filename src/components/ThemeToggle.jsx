import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button onClick={() => setDark(prev => !prev)}>
      {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
