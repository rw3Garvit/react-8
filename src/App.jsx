import React from "react";
import Card from "./components/Card";

import { data } from "./components/data";
import Count from "./components/Count";
import Valid from "./components/Valid";
import Single from "./components/Single";
import Ref from "./components/Ref";
import Revise from "./components/Revise";
import Crud from "./components/Crud";
import Effect from "./components/Effect";
import Static from "./components/Static";
import First from "./components/First";
import Navbar from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Not from "./components/Not";
import Product from "./components/pages/Product";
import Bootstrap from "./components/Bootstrap";
import Mui from "./components/Mui";
import Api from "./components/Api";

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <div className="row col-md-12">
            <div className="col-md-3">
               <Card data={data}/>
            </div>
            
         
         </div> */}

      {/* <Count/> */}
      {/* <Valid/> */}

      {/* <Single/> */}
      {/* <Ref/> */}

      {/* <Revise/> */}
      {/* <Crud/> */}
      {/* <Effect/> */}
      {/* <Static/>
      <First /> */}

      {/* <About/> */}

      {/* <Navbar/>
   
         <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' exact element={<About/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path='/:id' exact element={<Product/>}/>
            <Route path='*' exact element={<Not/>}/>
         </Routes> */}

      {/* <Bootstrap /> */}
      {/* <Mui /> */}
      <Api/>
    </>
  );
};

export default App;
