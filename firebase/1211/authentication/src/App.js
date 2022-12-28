import { useState } from 'react';
import './App.css';
import { loginUserWithEmailAndPassword, signInWIthGoogle } from './firebase/auth'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * 
   * @param {Event} event 
   */
  const signup = async(event) => {
    event.preventDefault();
    console.log(email, password);
    const user = await loginUserWithEmailAndPassword(email, password);
    console.log(user);
  };

  return (
    <div className="App">
      <h1>ログインアプリ</h1>
      <form onSubmit={signup}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
        />
        <button type='submit'>signup</button>
        <button onClick={signInWIthGoogle}>google</button>
      </form>
    </div>
  );
}

export default App;
