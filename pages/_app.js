import '../styles/globals.css'
// import IndexPage from './authIndex'
import { useEffect, useState, useRef } from "react";
import { InitializeAuth } from "../auth/init"
import Layout from "../Component/Layout";


export default function MyApp() {
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
          {loggedIn ? <Layout /> : "LogIn"}
          
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

// function MyApp({ Component, pageProps }) {
  
//   return <>

//   {/* <IndexPage /> */}
//   {/* <Layout>
//   <Component {...pageProps} />
//   </Layout> */}
//   </>
// }



