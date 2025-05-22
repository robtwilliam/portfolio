import hero_image from "../../assets/images/salt_flats.png"
import "./hero.css"

function Hero() {
    return (
        <div className="hero-container">
            <img src={hero_image} alt="hero image" className="hero-image"/>
            <div className="hero-text">
                <div className="hero-name">Rob_</div>
                <div className="hero-description">Data Storyteller | Creative Mind | Lifelong Explorer</div>
            </div>
        </div>
    )
}

export default Hero;