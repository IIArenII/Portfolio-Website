import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio"
import Services from "./Components/Services"

const App = () => {
  
  return (

    

  <div className="m-0 p-0 box-border">
    <Navbar />
    <Hero />
    <Header name="About me" />
    <About />
    <Header name="My Services" />
    <Services />
    <Header name="My latest work" />
    <Portfolio />
    <Header name="Get in touch" />
    <Contact />
    <Footer />
  </div>
      
      
        
    
  )
}

export default App
