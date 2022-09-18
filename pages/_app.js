import '../styles/globals.css'
// import IndexPage from './authIndex'
import { useEffect, useState, useRef } from "react";
import { InitializeAuth } from "../auth/init"
import Layout from "../Component/Layout";
import { Box } from '@mui/material';


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
            <Box style={{ height:"100vh",background: "rgb(16,13,69)", background: "linear-gradient(162deg, rgba(16,13,69,1) 0%, rgba(179,9,141,1) 27%, rgba(0,212,255,1) 70%, rgba(0,255,192,1) 89%)"}}>
              <Box style={{WebkitBoxShadow: "0px 0px 23px 11px rgba(0,0,0,0.75)",MozBoxShadow: "0px 0px 23px 11px rgba(0,0,0,0.75)",BoxShadow: '0px 0px 23px 11px rgba(0,0,0,0.75)',background: "rgb(148,255,229)",background: "linear-gradient(162deg, rgba(148,255,229,1) 2%, rgba(112,231,255,1) 24%, rgba(255,125,225,1) 70%, rgba(51,49,74,1) 100%)",backgroundColor: "#fff", position:"absolute",borderRadius:"20px", left:"50%",top:"50%",transform:"translate(-50%,-50%)",height:"300px", width:"400px"}}>
                <h2 style={{fontWeight:"700",color:"white",fontFamily:"arial",fontSize: "30px",margin:"40px 20px"}}>Authenticate with your social account</h2>
                <button style={{border:"4px solid white",position:"absolute",borderRadius:"10px",fontWeight:"800",width:"300px",fontSize:"25px",color:"white",padding:"20px 20px",left:"50%",top:"70%",transform:"translate(-50%,-50%)",}} onClick={() => authRef.current?.loginWithSocial("google")}>
                  Login With Google
                </button>
              </Box>
            </Box>
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



