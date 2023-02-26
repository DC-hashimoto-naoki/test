import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    // This is equivalent to /comments?postId=1
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setUsers(data)
      });
  }, [])

  const ref = useRef();

  const handleSearch = () => {
    console.log(ref.current.value);
    const queryResult = users.filter((user) => user.name.toLowerCase().includes(ref.current.value));
    setSearchQuery(queryResult);
  }

  return (
    <div className="App">
      <div className='main'>
        <h2>search app</h2>
        <input type="text" ref={ref} onChange={() => handleSearch()} />
        <div className='content'>
          {searchQuery.map((user) => (
            <div className='box' key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
