import React from 'react'
import { data } from '../data'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<>

    <div>
      Home
    </div>
    <div className='row'>
      {
        data.map((val,ind)=>{
          return(
            <>
            
              <div class="card" style={{width:'18rem'}}>
                <div class="card-body">
                  <h5 class="card-title">{val.id}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{val.title}</h6>
                  <p class="card-text">{val.desc}</p>
                  <Link to={`/${val.id}`} class="card-link">view</Link>
                 
                </div>
              </div>
            </>
          )
        })
      }
    </div>


</>
  )
}

export default Home