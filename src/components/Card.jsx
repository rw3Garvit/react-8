import img from './img/demo.png'

const Card =({title,desc})=>{

   


return(
    <div class="card" style={{width:'18rem'}}>
    <img class="card-img-top" src={img} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{desc}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
)

}


export default Card