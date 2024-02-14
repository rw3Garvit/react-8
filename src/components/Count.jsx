import React,{useState} from 'react'

const Count = () => {

const [data,setdata] = useState(0)
  

// const incre = ()=>{
//    setdata(data+1)
// }


  return (
    <>

<div>{data}</div>
<button onClick={()=>setdata(data+1)}>+</button>
    </>
  )
}

export default Count