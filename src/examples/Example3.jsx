import {useState} from 'react';
import {loadBasic} from 'appi_react'

export default function Example() {
    const [id,setId] = useState("@user");
    const [delta,setDelta] = useState('{"~public":{"name":"Joe Shmo"}}');
    const [result,setResult] = useState("");

    const writeObject = async ()=>{
        const client = await loadBasic({});

        if(!client.UserId()) // Are we logged in?
            client.SetAuthenticationDetails("USER","PASSWORD","");

        let _result = await client.Upsert(id,delta);

        setResult(client.LookupError(_result));
    };

    return ( 
        <div>
            <p style={{fontSize:16,margin:16}}>
                An Appi Id must have several segments:

                [ApplicationId].[Object Type].[Provider Service].[Object Id].[Permission]
            </p>
            <p style={{fontSize:16,margin:16}}>
                If the application has a dynamic schema, then you can create any object with any shape.
                If the app does have a schema then you must comply with the application defined object types and shapes. <br/><br/>
                (use the Object Read example to read the public schema for the test app: <span style={{color:"lightblue",cursor:"pointer"}}>[APPIAPPS.APPIAPP.64KB.TESTAPP.public]</span>)
            </p>
            <span style={{fontSize:16}}>Write Object</span>
            <input style={{margin:8,width:'calc(100% - 164px)'}} placeholder="Object ID" value={id} onChange={evt => setId(evt.target.value)} />
            <button onClick={()=>writeObject()}>Write</button>
            <br/>
            <textarea onChange={evt => setDelta(evt.target.value)} style={{margin:8,width:'100%'}} rows="16" value={delta} />
            <p style={{fontSize:16,margin:16,color:result.startsWith("No Error") ? "green" : "red"}}>{result}</p>
        </div> 
    );
}

export const subtitle = "Write Objects";
export const code = `import {useState} from 'react';
import {loadBasic} from 'appi_react'

export default function Example() {
    const [id,setId] = useState("@user");
    const [delta,setDelta] = useState('{"~public":{"name":"Joe Shmo"}}');
    const [result,setResult] = useState("");

    const writeObject = async ()=>{
        const client = await loadBasic({});

        if(!client.UserId()) // Are we logged in?
            client.SetAuthenticationDetails("USER","PASSWORD","");

        let _result = await client.Upsert(id,delta);

        setResult(client.LookupError(_result));
    };

    return ( 
        <div>
            <p style={{fontSize:16,margin:16}}>
                An Appi Id must have several segments:

                [ApplicationId].[Object Type].[Provider Service].[Object Id].[Permission]
            </p>
            <p style={{fontSize:16,margin:16}}>
                If the application has a dynamic schema, then you can create any object with any shape.
                If the app does have a schema then you must comply with the application defined object types and shapes. <br/><br/>
                (use the Object Read example to read the public schema for the test app: <span style={{color:"lightblue",cursor:"pointer"}}>[APPIAPPS.APPIAPP.64KB.TESTAPP.public]</span>)
            </p>
            <span style={{fontSize:16}}>Write Object</span>
            <input style={{margin:8,width:'calc(100% - 164px)'}} placeholder="Object ID" value={id} onChange={evt => setId(evt.target.value)} />
            <button onClick={()=>writeObject()}>Write</button>
            <br/>
            <textarea onChange={evt => setDelta(evt.target.value)} style={{margin:8,width:'100%'}} rows="16" value={delta} />
            <p style={{fontSize:16,margin:16,color:result.startsWith("No Error") ? "green" : "red"}}>{result}</p>
        </div> 
    );
}`;