import './App.css';
import './main.js';
import db from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";

// CSS
import styled, {createGlobalStyle, keyframes} from "styled-components";

function App() {

  async function create() {
    // create
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function read() {
    // read
    const querySnapshot = await getDocs(collection(db, "test01"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data().age);
      console.log(doc.data().name);
    });
  }

  async function update(age, name) {
    // update
    // Create an initial document to update.
    const docRef = doc(db, "test01", "hashimoto");
    // await setDoc(docRef, {
    //   name: "hashimoto Noaki",
    //   favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    //   age: 30
    // });
    // To update age and favorite color:
    await updateDoc(docRef, {
      "age": age,
      "favorites.color": "Red",
      "name": name
    });

    console.log("updated @update()");
  }

  let age = 20;
  let name = "takahashi";
  return (
    <div className="App">
      <input type="text" />
      <button onClick={() => update(age, name)}>update</button>
      <p>
        <button onClick={() => read()}>read</button>
      </p>
      <StyledDiv primary={"lime"} secondary={"red"}>スタイルを当てる</StyledDiv>
    </div>
  );
}

let bg_color = "lime";

const StyledDiv = styled.div`
  font-size: 48px;
  /* background-color: ${({primary}) => primary}; */
  background-color: ${ props => props.primary};
`

export default App;
