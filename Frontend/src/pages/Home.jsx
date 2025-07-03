import About from "../components/About"
import HeroSection from "../components/HeroSection"
import Qualities from "../components/Qualities"
import Reservation from "../components/Reservation"
import Team from "../components/Team"
import WhoAreWe from "../components/WhoAreWe"
import Menu from "./Menu"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default Home
