import React from 'react';
import './App.css';
import { Content, Header } from './components';


function App() {
  return (
    <div className="App">
      <Header title="home page" page="App.tsx" />
      <Content title="タイトル" text="テキスト" age={30} />
    </div>
  );
}

export default App;
