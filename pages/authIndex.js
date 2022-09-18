import { useEffect, useState, useRef } from "react";
import { InitializeAuth } from "../auth/init"
// import Layout from "../Component/Layout";
// import { AuthProvider } from "https://cdn.jsdelivr.net/npm/@arcana/auth/dist/standalone/auth.esm.js";

let auth;

export default function IndexPage() {
    const authRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
      InitializeAuth().then(async (auth) => {
        setLoaded(true);
        authRef.current = auth;
        const isLoggedIn = await authRef.current.isLoggedIn();
        setLoggedIn(isLoggedIn);
      });
    }, []);


    return (
      <>
        {!loaded && "Loading..."}
        {loaded && (
          <div style={{textAlign:"center", top: "50%", height: "100vh"}}>
            {/* If use is logged in then it will shoe Logout (1st), if not than show LogIn(2nd) BUTTON */}
            {loggedIn ? "logOut": "LogIn"}
            
            {!loggedIn && (
              <button onClick={() => authRef.current?.loginWithSocial("google")}>
                Login With Google
              </button>
            )}
          </div>
        )}
      </>
    );
}


 
// export async function LogOutBtn() {
//     auth = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID);
//     const handleSignOut = await auth.logout();
    
//     return(
//         <div>
//             <button onClick={ (e) => handleSignOut(e)}>Logout</button>
//         </div>
//     )
// }
