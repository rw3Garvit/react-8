import React,{useState} from 'react'

const Count = () => {


    const [data,setdata]=useState([
        {
           title:'product1',
           desc:'this is product 1'
        },
        {
           title:'product2',
           desc:'this is product 2'
        },
        {
           title:'product12',
           desc:'this is product 12'
        },
        {
           title:'product12',
           desc:'this is product 13'
        },
        {
           title:'watch',
           desc:'this is product 13'
        },
     ]
    )

    const incre=()=>{
        setdata(data+1)
    }


  return (
    <>

<div>{data}</div>
<button onClick={incre}>+</button>
    </>
  )
}

export default Count