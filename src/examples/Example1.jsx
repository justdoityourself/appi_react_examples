import {useState} from 'react';
import {loadBasic, login,logout} from 'appi_react'

export default function Example() {
    const [loggedIn,setLoggedIn] = useState("No");
    const [logging,setLogging] = useState(false);

    const doLogin = async ()=>{
        if("No" == loggedIn)
        {
            const client = await loadBasic({});

            const result = await login("USER","PASSWORD","",false);
    
            setLoggedIn(result ? "YES!" : "Something went wrong.");
        }
        else{
            logout();
            setLoggedIn("No");
        }
    };

    const doLogging = async ()=>{
        setLogging(!logging);

        const client = await loadBasic({});
        client.SetLogging((!logging) ? 1 : 0)
    };

    return ( 
        <div>
            <span style={{fontSize:16}}>Logged In? {loggedIn} </span>
            <button onClick={()=>doLogin()}>
                {loggedIn == "YES!" ? "Logout" : "Login"}
            </button> <br></br>
            <span style={{fontSize:16}}>Logging? {logging ? "Enabled" : "Disabled"} </span>
            <button onClick={()=>doLogging()}>
                {logging ? "Disable" : "Enable"}
            </button>
        </div> 
    );
}

export const subtitle = "Login / Logout";

export const code = `import {useState} from 'react';
import {loadBasic, login,logout} from 'appi_react'

export default function Example() {
    const [loggedIn,setLoggedIn] = useState("No");

    const doLogin = async ()=>{
        if("No" == loggedIn)
        {
            await loadBasic({});

            const result = await login("USER","PASSWORD","",false);
    
            setLoggedIn(result ? "YES!" : "Something went wrong.");
        }
        else{
            logout();
            setLoggedIn("No");
        }
    };

    return ( 
        <div>
            <span style={{fontSize:16}}>Logged In? {loggedIn} </span>
            <button onClick={()=>doLogin()}>
                {loggedIn == "YES!" ? "Logout" : "Login"}
            </button>
        </div> 
    );
}`;