import {data} from "../restApi.json"
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading-section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, 
                consequatur quis. Porro temporibus corporis optio, ab voluptatem deserunt 
                numquam officia laudantium ut sunt aliquid quaerat! Debitis ab eligendi quia mollitia veniam doloribus unde, molestias vero rerum magnam laboriosam exercitationem corrupti, omnis nostrum commodi fugit nihil reiciendis 
                voluptatibus tempore enim quisquam.</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id} >
                            <img src={element.image} alt={element.title}/>
                            <h3 >{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Menu
