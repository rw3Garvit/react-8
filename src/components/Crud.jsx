import React, { useRef, useState } from 'react'

const Crud = () => {

    let name = useRef()
    let age = useRef()

const [data, setdata] = useState([
    {
        id:1,
        name:"garvit",
        age:21
    },
    {
        id:2,
        name:"user",
        age:22
    },
    {
        id:3,
        name:"demo",
        age:23
    }
])


let submit =()=>{
    let user={
        id:4,
        name:name.current.value,
        age:age.current.value
    }

    setdata([...data,user])
}


// let deleteData=(id)=>{
// console.log(id);

// setdata(data.filter((val)=>val.id !== id))
// }

let deleteData=(index)=>{

setdata(data.slice(0,index))

}






  return (
    <div>

    <input type="text" ref={name}/>
    <input type="number" ref={age}/>
    <button onClick={submit}>add</button>

    {
        data?.map((val,ind)=>{

            return(
              <>
              <p>{val.id}</p>
                 <h1>{val.name}</h1>
                <h2>{val.age}</h2>
                <button onClick={()=>deleteData(ind)}>delete</button>
              </>
            )
           
        })
    }


 
    </div>
  )
}

export default Crud