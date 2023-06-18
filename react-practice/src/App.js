import logo from './logo.svg';
import './App.css';
import Memo from './UseMemo/Memo';
import UseCallBack from './UseMemo/Memo';
import Parent from './UseCallBack/Parent';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <Memo/> */}
      {/* <Parent/> */}
      <SearchBar/>
    </div>
  );
}

export default App;
