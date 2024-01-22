
import HeroSection from "./component/HeroSection"
import NavBar from "./component/Navbar"
import AboutSection from "./component/AboutSection"
import Footer from "./component/Footer"
import ProjectSection from "./component/ProjectSection"
import ParticleBackground from "./component/ParticleBackground"


export default function Home(){

  return (
    <>
    <main className="flex min-h-screen flex-col bg-[#19191a]">
    <ParticleBackground/>
        <nav>
            <NavBar />
        </nav>
        <div className='container mt-24 mx-auto px-12 py-4'>
            <HeroSection />
            <AboutSection /> 
            <ProjectSection/>
        </div>
        <Footer/>
      </main>
    </>
  )
}

