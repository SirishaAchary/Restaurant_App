import { Link } from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Ut saepe tempore aperiam molestiae
                     voluptatum voluptas hic eius, quidem eos aspernatur necessitatibus nucndsv
                    dolores incidunt dolor, deleniti laboriosam dolore.
                </p>
                <Link to={"/"}>Explore Menu
                <span></span></Link>

            </div>
            <div className="banner">
                <img src="/about.png" alt="about"/>
            </div>
        </div>
      
    </section>
  )
}

export default About
