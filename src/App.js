import logo from './logo.svg';
import './App.css';

import ExampleShell from "./examples/ExampleShell"

import Example1 from "./examples/Example1"
import Example1Code from "./examples/Example1Code"
import Example2 from "./examples/Example2"
import Example3 from "./examples/Example3"

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


        <ExampleShell example={<Example1/>} code={Example1Code} title="Example1" subtitle="Login / Logout" />

        <a style={{fontSize:24}}
          className="App-link"
          href=""
        >
          Example 1
        </a><span style={{fontSize:24}}> Login / Logout</span>

        <div style={{margin:"96px 32px"}}>
          <Example1 />
        </div>

        <a style={{fontSize:24}}
          className="App-link"
          href=""
        >
          Example 2
        </a><span style={{fontSize:24}}> Read Objects</span>

        <div style={{margin:"96px 32px",width:600,textAlign:"left"}}>
          <Example2 />
        </div>


        <a style={{fontSize:24}}
          className="App-link"
          href=""
        >
          Example 3
        </a><span style={{fontSize:24}}> Write Objects</span>

        <div style={{margin:"96px 32px",width:600,textAlign:"left"}}>
          <Example3 />
        </div>
      </header>
    </div>
  );
}

export default App;
