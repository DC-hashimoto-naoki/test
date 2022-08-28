import logo from './logo.svg';
import './App.css';
import {Article} from './components/index';

function App() {
  return (
    <div>
      <Article
        title={'ここにタイトルが入ります'}
        content={'ここに内容が入る'}
      />
    </div>
  );
}

export default App;
