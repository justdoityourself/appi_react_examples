import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import {useState} from 'react';

export default function ExampleShell({example,title,subtitle, code}) {
    const [mode,setMode] = useState("demo");
    return ( 
        <div>
            <a style={{fontSize:24}} className="App-link" href="" > {title} </a>
            <div style={{fontSize:24}}>{subtitle}</div>
            <span style={{fontSize:14,cursor:"pointer"}} className="App-link" onClick={()=>setMode(mode=="demo" ? "code" : "demo")} > {mode=="demo" ? "Show Code" : "Show Demo"} </span>

            {mode=="demo" ?
                <div style={{margin:"96px 32px",width:600,textAlign:"left"}}>
                    {example}
                </div> :
                <div style={{fontSize:16,textAlign:'left',width:664}}>
                    <SyntaxHighlighter language={languages.javascript} style={themes.monoBlue}>
                        {code }
                    </SyntaxHighlighter>
                </div>
            }
        </div> 
    );
}