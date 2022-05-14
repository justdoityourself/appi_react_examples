
export default
`import {useState} from 'react';
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