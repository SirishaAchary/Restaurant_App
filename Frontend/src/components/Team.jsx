import {data} from "../restApi.json"

const Team = () => {
  return (
    <section className="team" id="team">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading"> OUR TEAM</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Error accusantium neque repellendus quo 
                    similique! Perspiciatis quidem in consectetur eos iste, ipsum
                     porro commodi sit quos temporibus iusto eius esse est 
                     officiis corporis sapiente suscipit blanditiis labore 
                     laboriosam sint. Itaque minima perspiciatis temporibus aut
                      asperiores! Praesentium eveniet quaerat provident dolores 
                      unde.
                </p>

            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name}/>
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
      
    </section>
  )
}

export default Team
