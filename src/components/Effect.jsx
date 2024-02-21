import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [data, setdata] = useState(0)
    const [val, setval] = useState("")

   
    // let submit = ()=>{
    //     setdata(data+1)
    // }

 


  useEffect(()=>{
 
   console.log("useeffect start");
   setTimeout(() => {
    setdata(data+1);
  }, 1000);
    
  },[val])


  return (
    <div>

        <h1>{data}</h1>
        <h2>{val}</h2>

        <button onClick={()=>setval("garvit")}>Click</button>
    </div>
  )
}

export default Effect