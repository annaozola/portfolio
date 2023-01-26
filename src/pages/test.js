import React from 'react'
import Splash from '../components/Splash'
import { useState, useEffect } from 'react';

import BrowserRouter from 'react-dom'

export default function Test() {

  // Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  // // Loading
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)

  //   return () => clearTimeout(timeout)
  // }, [])

  return (
    <>
      {loading ? (
        <Splash loading={loading} />
      ) : (
          <div>This is a test</div>
      )}

      {/* // <div>
      //   <div className="splash">
      //     <Splash />
      //   </div>
      //   <h1>Heading</h1>
      //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, necessitatibus.</p>
      // </div> */}
    </>
  )
}
