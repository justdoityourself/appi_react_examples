import logo from './logo.svg';
import './App.css';

import Example1 from "./examples/Example1"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js and examples/*</code> and save to reload.
        </p>
        <img style={{margin:32}} src="appi_nosub.png" alt="logo" />
        <span style={{fontSize:14,margin:16}}>Make sure to run the server: <span style={{color:'#68d388'}}>docker run -p 8099:8099 agardnerut/appi_community</span></span>
        <a
          className="App-link"
          href=""
        >
          Example 1
        </a>

        <div style={{margin:"16px"}}>
          <Example1 />
        </div>
        <a
          className="App-link"
          href=""
        >
          Example 2
        </a>
      </header>
    </div>
  );
}

export default App;
