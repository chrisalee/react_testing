import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';

function App() {

  const a = 3;
  const b = 2;

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
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
        <h1 data-testid="mytestid">hello</h1>
        <span title='sum'>{a + b}</span>
        <p>***********************************************</p>
        <br />
        <br/>
        <Login />
      </header>
    </div>
  );
}

export default App;
