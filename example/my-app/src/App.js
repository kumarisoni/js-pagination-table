import logo from './logo.svg';
import './App.css';
import Pagination from 'js-pagination-table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pagination totalRows={[{id: 1, firstName: 'a', lastName: 'b'}]}/>
      </header>
    </div>
  );
}

export default App;
