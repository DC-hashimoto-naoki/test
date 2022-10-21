import logo from './logo.svg';
import './App.css';
import {InputColor, InputFiles, StyledInput} from './components/Index';

function App() {
  return (
    <div className="App">
      <InputColor/>
      <InputFiles/>
      <StyledInput className="box01" />
    </div>
  );
}

export default App;
