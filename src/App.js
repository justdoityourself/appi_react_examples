import logo from './logo.svg';
import './App.css';

import ExampleShell from "./examples/ExampleShell"

function App({examples}) {  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js and examples/*</code> and save to reload.
        </p>
        <img style={{margin:32}} src="appi_nosub.png" alt="logo" />
        <span style={{fontSize:14,margin:16}}>Make sure to run the server: <span style={{color:'#68d388'}}>docker run -p 8099:8099 agardnerut/appi_community</span></span>

        <span style={{fontSize:14,margin:16}}>Note: this is the low level API, used to build new components and workflows. 
          Use the npm module <span style={{color:'#68d388'}}>appi_react_components</span> to leverage the composition API.</span>

        {examples.map((ex,i)=><ExampleShell key={i} example={ex?.component} code={ex?.code} title={ex?.title} subtitle={ex?.subtitle} />)}
      </header>
    </div>
  );
}

export default App;
