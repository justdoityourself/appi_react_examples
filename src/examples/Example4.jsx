import {useState} from 'react';
import {loadBasic} from 'appi_react'

export default function Example() {
    const [result,setResult] = useState("");

    const getDirty = async ()=>{

        const client = await loadBasic({});

        setResult(client.Dirty());
    };

    const sync = async ()=>{

        const client = await loadBasic({});

        await client.Commit();

        getDirty();
    };

    return ( 
        <div>
            <button onClick={()=>getDirty()}>
                Load Dirty
            </button>
            <button onClick={()=>sync()}>
                Commit
            </button>
            <textarea readOnly style={{margin:8,width:'100%'}} rows="16" value={result} />
        </div> 
    );
}

export const subtitle = "Push / Commit Local Changes";

export const code = `Pending Finalization`;