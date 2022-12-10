import { useState } from 'react'
import './App.css'
import { Title, Form, Result } from './components'
import axios from 'axios';

function App() {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]);

  const getPhotoData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const url = 'https://api.unsplash.com';
    const path = '/search/photos';
    const param = 'query';
    const keyword = word;

    const client_id = import.meta.env.VITE_UNSPLASH_API_KEY;
    axios
      .get(url + path + '?' + param + '=' + keyword + '&' + 'client_id=' + client_id)
      .then(res => {
        setPhoto(res.data.results)
      })
  }

  return (
    <div className='App'>
      <Title/>
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Result photo={photo} />
    </div>
  )
}

export default App
