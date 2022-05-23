import {useAppi} from 'appi_react'

export default function Example() { 
    const [user,setUser] = useAppi("@user");
    return ( 
        <div>
            <p style={{fontSize:16,margin:16}}>
                Once you are logged in, this binding will alway display the latest version of your user object. Go ahead and update the user object to see that it works.
            </p>
            <textarea readOnly style={{margin:8,width:'100%'}} rows="16" value={JSON.stringify(user)} />
            
         </div>
    );
}

export const subtitle = "Binding";
export const code = `import {useAppi} from 'appi_react'

export default function Example() { 
    const [user,setUser] = useAppi("@user");
    return ( 
        <div>
            <p style={{fontSize:16,margin:16}}>
                Once you are logged in, this binding will alway display the latest version of your user object. Go ahead and update the user object to see that it works.
            </p>
            <textarea readOnly style={{margin:8,width:'100%'}} rows="16" value={JSON.stringify(user)} />
            
         </div>
    );
}`;