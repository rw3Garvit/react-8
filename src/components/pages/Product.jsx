import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'

const Product = () => {

    let {id} = useParams()

    console.log(id);

    console.log(data)

    let result = data.filter((val)=>val.id==id)

    console.log(result);
   

  return (
    <div>
        <h1>{result[0].id}</h1>
        <h1>{result[0].title}</h1>
        <h1>{result[0].desc}</h1>
    </div>
  )
}

export default Product