import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    // hit API
    const endpointURL = 
    `https://pixabay.com/api/?key=33476814-003c2b55bde547d57329a4df9&q=${ref.current.value}&image_type=photo`;

    fetch(endpointURL).then((res) => {
        return res.json();
      }).then((data) => {
        setFetchData(data.hits);
        console.log(data.hits);
      })

  }

  return (
    <div className="container">
      <h2> My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='search images' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
