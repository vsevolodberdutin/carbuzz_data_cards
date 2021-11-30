import React, { useState, useEffect } from 'react'
import { getData } from './api/api'
import Gallery from './components/Gallery'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData().then((res) => {
      setData(res)
      // console.log("set", res);
    })
    // console.log("mount", data);
    // return console.log("unmount")
  }, [])
  
  if (data.length === 0) {
    return <h2>Loading data...</h2>;
  }

  return (
    <center style={{margin:100}}>
      <h1 style={{margin:50}}>Welcome to card gallary!</h1>
   
      <Gallery data={data}/>
      
    </center>
  )
}

export default App
