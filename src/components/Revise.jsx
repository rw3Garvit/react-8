import React, { useRef, useState } from 'react'

const Revise = () => {


   let email= useRef()
   let password= useRef()
   let file= useRef()

    // const [input, setinput] = useState()

    // const handle=(e)=>{
    //     // console.log(e.target.value);
    //     setinput({...input,[e.target.name]:e.target.value})
    // }

  

    let submit=()=>{
        // console.log(input);

        let data={
            email:email.current.value,
            password:password.current.value,
            file:file.current.files
        }

        console.log(data);
    }   

  return (
    <div>

{/* <input type="text" name='email' onChange={handle}/>
<input type="text" name='password' onChange={handle}/>
<input type="text" name='fname' onChange={handle} />
<button onClick={submit}>Submit</button> */}


<form encType='multipart/form-data'>
    
<input type="text" ref={email}/>
<input type="text" ref={password}/>
<input type="file" ref={file} multiple/>
<button onClick={submit}>Submit</button>
</form>

    </div>
  )
}

export default Revise