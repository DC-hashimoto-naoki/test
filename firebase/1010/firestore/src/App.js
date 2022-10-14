import { useEffect, useState } from "react";
import './App.css';
import db from "./firebase";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapshot) => {
      // console.log(snapshot.docs.map( doc => ({...doc.data()}) ))
      setPosts(snapshot.docs.map(doc => ({ ...doc.data() })))
    })

    // real time
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })))
    })

  }, []);

  return (
    <div className="App">
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h1>{post.title} </h1>
            <p>{post.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
