import React from 'react'
import Splash from '../components/Splash'
import { useState, useEffect } from 'react';

import BrowserRouter from 'react-dom'

export default function Test() {

  // Loading
  const [loading, setLoading] = useState(true);

  // new 5
  const [showSplash, setShowSplash] = useState(true);

  // current issue - now the loader disappears after like 0.1 seconds and doesn't
  // show at all, no matter the session. I think sessionStorage isn't working.

  useEffect(() => {
    if (sessionStorage.getItem("showSplash") == true) {
      // if splash hasn't been shown before - show
      setTimeout(() => {
        setLoading(false);
      }, 2000)
      // don't show splash again
      setShowSplash(false);
    } else {
      // else if splash has been shown before - don't show again
      setTimeout(() => {
        setLoading(false);
      })
    }
  })

  return (
    <>
      {showSplash===true && loading ? (
        <Splash loading={loading} />
      ) : (
          <div>This is a test</div>
      )}
    </>
  )

  // new 4
  // const shown = useState(true);

  // useEffect (() => {
  //   if (sessionStorage.getItem("shown", true)) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)

  //     return
  //     // return
  //       <>
  //         {loading ? (
  //           <Splash loading={loading} />
  //         ) : (
  //             <div>This is a test</div>
  //         )}
  //       </>

  //   } else {
  //     return
  //     // else return
  //       <>
  //         <div>This is a test</div>
  //       </>
  //   }
  // })

  // new 3
  // const [shown, setShown] = useState(true);

  // useEffect(() => {
  //   // If splash hasn't been shown before, show it
  //   if (sessionStorage.getItem("shown", true)) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)
  //     // disable so it doesn't show again during the session
  //     sessionStorage.setItem("shown", false)
  //   } else {
  //     // Else, if splash has been shown before, don't show it
  //   }
  // })

  // new 2

  // const [shown, setShown] = useState(true);

  // useEffect(() => {
  //   var shown = sessionStorage.getItem("shown");
  //   if (shown == true) {
      
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)

  //     shown = false;
  //   } else {
  //     setTimeout(() => {
  //       setLoading(true);
  //     }, 2000)

  //     sessionStorage.setItem("shown", false)
  //     setShown(shown);
  //   }, []);
  // }


  //   if (sessionStorage.getItem("shown") {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)

  //   } else {
  //     setTimeout(() => {
  //       setLoading(true);
  //     }, 2000)
  //   })
  // })

  // sessionStorage.setItem('shown', true);

  // if (!sessionStorage.getItem('shown')) {

  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000)
  // }, [])

  // new
  // useEffect(() => {
  //   if (!sessionStorage.getItem('shown')) {
  //     sessionStorage.setItem('shown', false);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)
  //   } else {
  //     ('.splash').hide();
  //   }
  // })


  // old that works - always
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000)
  // }, [])

  // // Loading
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)

  //   return () => clearTimeout(timeout)
  // }, [])

  // return (
  //   <>
  //     {loading ? (
  //       <Splash loading={loading} />
  //     ) : (
  //         <div>This is a test</div>
  //     )}

  //     {/* // <div>
  //     //   <div className="splash">
  //     //     <Splash />
  //     //   </div>
  //     //   <h1>Heading</h1>
  //     //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, necessitatibus.</p>
  //     // </div> */}
  //   </>
  // )
}