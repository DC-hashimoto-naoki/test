import React from 'react';
import './App.css';
import { Content } from './components';


function App() {
  return (
    <div className="App">
      <Content title="タイトル" text="テキスト" age={26} />
    </div>
  );
}

export default App;
