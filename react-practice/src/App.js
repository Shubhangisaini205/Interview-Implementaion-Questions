import logo from './logo.svg';
import './App.css';
import Memo from './UseMemo/Memo';
import UseCallBack from './UseMemo/Memo';
import Parent from './UseCallBack/Parent';
import SearchBar from './components/SearchBar';
import ProgressBar from './components/Progress';

function App() {
  return (
    <div className="App">
      {/* <Memo/> */}
      {/* <Parent/> */}
      {/* <SearchBar/> */}
      <ProgressBar/>
    </div>
  );
}

export default App;
