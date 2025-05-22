import "./pages.css"
import Hero from "../components/Hero/Hero";
import ProjectTiles from "../components/ProjectTiles/ProjectTiles";
import ExperienceTiles from "../components/ExperienceTiles/ExperienceTiles";
import EducationTiles from "../components/EducationTiles/EducationTiles";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <>
            <Hero />
            <h2>Projects</h2>
            <ProjectTiles />
            <h2>Experience</h2>
            <ExperienceTiles />
            <h2>Education</h2>
            <EducationTiles />
            <h2>About Me</h2>
            <About />
            {/* <Footer /> */}
        </>
    )
}

export default Home;