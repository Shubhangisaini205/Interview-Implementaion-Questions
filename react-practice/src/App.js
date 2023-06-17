import logo from './logo.svg';
import './App.css';
import Memo from './UseMemo/Memo';
import UseCallBack from './UseMemo/Memo';
import Parent from './UseCallBack/Parent';

function App() {
  return (
    <div className="App">
      {/* <Memo/> */}
      <Parent/>
    </div>
  );
}

export default App;
