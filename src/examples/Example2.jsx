import {useState} from 'react';
import {loadBasic} from 'appi_react'

export default function Example() {
    const [id,setId] = useState("TESTAPP.HW.64KB.hellostatic.*");
    const [result,setResult] = useState("");

    const readObject = async ()=>{
        const client = await loadBasic({});
        let _result;

        if(!client.UserId()) // Are we logged in?
            client.SetAuthenticationDetails("USER","PASSWORD","");

        switch(id){
            case "[user]":
                _result = await client.Get(client.LookupId("user","",""));
                break;
            case "[activity]":
                _result = await client.Get(client.LookupId("activity","",""));
                break;
            case "[status]":
                _result = await client.Status(0);
                break;
            case "[schema]":
                _result = await client.Get("APPIAPPS.APPIAPP.64KB.TESTAPP.public");
                break;
            default:
                _result = await client.Get(id);
                break;
        }

        const formatted = JSON.stringify(JSON.parse(_result),undefined,4);

        setResult(formatted);
    };

    return ( 
        <div>
            <p style={{fontSize:16,margin:16}}>
                Appi Ids can be technical, this example let's you use these shorthand ids to get started: <br/><br/>

                <span style={{color:"lightblue",cursor:"pointer"}} onClick={()=>setId("[user]")}>[user]</span><br/>
                <span style={{color:"lightblue",cursor:"pointer"}} onClick={()=>setId("[status]")}>[status]</span><br/>
                <span style={{color:"lightblue",cursor:"pointer"}} onClick={()=>setId("[activity]")}>[activity]</span><br/>
                <span style={{color:"lightblue",cursor:"pointer"}} onClick={()=>setId("[schema]")}>[schema]</span><br/>
            </p>
            <p style={{fontSize:16,margin:16}}>
                By default objects can be sourced from the staticfs/ folder. Go ahead and add a json file there and read it. Make sure to set the permission to public like the example: <span style={{color:"lightblue",cursor:"pointer"}} onClick={()=>setId("TESTAPP.HW.64KB.hellostatic.*")}>[TESTAPP.HW.64KB.hellostatic.*]</span> <br/><br/>
            </p>
            <p style={{fontSize:16,margin:16}}>
                By default objects can also be sourced from a get request to 127.0.0.1:6991. Go ahead and start a debug web server and requests a resource, it will be fetched once and then integrated into the pipeline. <br/><br/>
            </p>
            <span style={{fontSize:16}}>Read Object</span>
            <input style={{margin:8,width:'calc(100% - 158px)'}} placeholder="Object ID" value={id} onChange={evt => setId(evt.target.value)} />
            <button onClick={()=>readObject()}>Read</button>
            <br/>
            <textarea readOnly style={{margin:8,width:'100%'}} rows="16" value={result} />
        </div> 
    );
}