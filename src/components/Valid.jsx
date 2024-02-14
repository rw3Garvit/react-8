import React, { useState } from 'react'

const Valid = () => {
    const [fname, setfname] = useState("")
    const [number, setnumber] = useState("")

 

    let submit =()=>{
       

        console.log(fname,"fname");

        const data={
            fname,
            number
        }

        console.log(data);

    }
    
    
  return (
    <div>

{/* <h1>{fname}</h1>
<h2>{number}</h2> */}

        <input type="text"  onChange={(e)=>setfname(e.target.value)} />
        <input type="number" onChange={(e)=>setnumber(e.target.value)} />
        <button onClick={submit}>submit</button>
    </div>
  )
}

export default Valid