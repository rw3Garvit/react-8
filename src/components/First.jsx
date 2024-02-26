import React from 'react'
import Button from './Atoms/Button'

const First = () => {
    

    function first()
    {
        console.log("first called");
    }

  return (
    <div>
    First
    <Button content="save" onclick={first} color="black"/>
    </div>
  )
}

export default First