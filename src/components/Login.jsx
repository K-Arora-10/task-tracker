import React, { useState } from 'react';

function Login({ setUsername }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem('username', name.trim());
    setUsername(name.trim());
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input style={{width:'auto',textAlign:'center'}}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Login;
