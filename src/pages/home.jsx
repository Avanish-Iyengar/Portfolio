import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBg"
import { Navbar } from "../components/Navbar"
import { AboutSection } from "../components/About"
//import { ContactSection } from "../components/Contact"
import { HeroSection } from "../components/Hero"
import { SkillsSection } from "../components/Skills"
import { Footer } from "../components/Footer"
import { ContactSection } from "../components/Contact"

export const Home =() => {

    return <div className="min-h-screen ">
        
        <ThemeToggle />

        {/* Bg effects*/}
        <StarBackground />

        {/*Navbar*/}
        <Navbar />

        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        {/*Main*/}
        <Footer/>


    </div>
}