import React from 'react'
import Button from './Atoms/Button'
import H1 from './Atoms/H1';

const Static = () => {

    const test=()=>{
        console.log("test called");
    }

  return (
    <div class="card" style={{width:'18rem'}}>
    <img class="card-img-top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Card image cap"/>
    <div class="card-body">
       <H1 ></H1>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button content="go somewhere" onclick={test} color="red"/>
    </div>
    </div>
  )
}

export default Static