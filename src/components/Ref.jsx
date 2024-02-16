import React, { useRef } from 'react'

const Ref = () => {


    let fname = useRef()
  

    let submit=()=>{

        const data={
            name:fname.current.value
        }

       console.log(data);

    }

    
    

  return (
    <div>
    
   
    <input type="text" ref={fname}/>

    <button onClick={submit}>submit</button>
    
    </div>
  )
}

export default Ref