import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {


   // let arr = [3,2,4]
   // console.log(arr);

   // let [num1,num2,num3] = arr

   // console.log(num1)

   // let data ={
   //    name:'garvit',
   //    mobile:'123'
   // }

   // let {name,mobile} = data

   // console.log(name,mobile);




  return (
    <>
    <Navbar/>
   <div className="row col-md-12">
      <div className="col-md-3">
         <Card title="mobile" desc="this is mobile"/>
      </div>
      <div className="col-md-3">
         <Card title="watch" desc="this is watch"/>
      </div>
      <div className="col-md-3">
         <Card title="ring" desc="this is mobile"/>
      </div>
      <div className="col-md-3">
         <Card title="hello" desc="this is mobile"/>
      </div>
     
   </div>


<About/>
    
    </>
  )
}

export default App