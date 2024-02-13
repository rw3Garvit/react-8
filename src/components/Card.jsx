import React from 'react';
import img from './img/demo.png'
import Small from './Small';

const Card =({data})=>{

  console.log(data);


   


return(
   <>
    {
      data.map((val,ind)=>{

      return( 
         <React.Fragment key={ind}>

         <div className="card" style={{width:'18rem'}} >
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.desc}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>

            <Small title={val.title}/>
          </div>
         
         </React.Fragment>
)
      })
    }
   </>
)

}


export default Card