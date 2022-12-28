import { useState } from 'react'
import './App.css'
import { addDataToFirestore, getDataFromFirebase } from './firebase';

function App() {
  const [count, setCount] = useState(0);

  const submitData = async () => {
    const collections = "users";
    const field = {
      born: 1192,
      first: "Naoki2",
      last: "hashimoto22"
    }
    const value = await addDataToFirestore(collections, field);
    console.log(value);
  }

  const getData = async() => {
    const data = await getDataFromFirebase();
    console.log(data);
  }

  return (
    <div className="App">
      <p>
        <button onClick={() => { submitData() }}>データ送信</button>
      </p>
      <p>
        <button onClick={() => { getData() }}>データ取得</button>
      </p>
    </div>
  )
}

export default App
