import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let examples = [];
const exampleCount = 5;

(async ()=>{
  
  for(let i = 1; i <= exampleCount; i++)
  {
    const example = await import(`./examples/Example${i}`);
    examples.push({title:`Example${i}`,
      subtitle:example.subtitle,
      component:example.default,
      code:example.code
    });
  }


  root.render(
    <React.StrictMode>
      <App examples={examples}/>
    </React.StrictMode>
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
