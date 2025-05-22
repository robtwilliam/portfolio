import { getImageUrl } from "../../helpers/helpers";
import './projects.css';

function LittleLemonBooking() {
    return (
        <div className="project">
            <h2>Little Lemon Website</h2>
            <img src={getImageUrl("little_lemon_booking.jpg")} alt="Bikeshare in Chicago" className="project-hero-img"/>
            <div className="project-content">
                <h3>Introduction</h3>
                <p>The project below is for the Meta Front-end Development capstone. The goal of this project was to use Figma and React to design a home page and a booking page for the Little Lemon restaurant's website. It includes a figma design of a sample app, a figma design of the home page of the website, and a portion of the website, including the home page and the booking page..</p>
                <h3>Figma Design: Sample App</h3>
                <p>This figma project includes a user persona, journey map, wireframe, and prototypes of a simple booking app for the Little Lemon restaurant.</p>
                <iframe width="100%" height="500" src="https://embed.figma.com/design/kb473RO5WaZ932iFmR75Me/FB---Little-Lemon---Reserve-a-Table?node-id=302-82&embed-host=share" allowFullScreen sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <h3>Figma Design: Home Page</h3>
                <p>This figma project includes the wireframe for the home page of the website.</p>
                <iframe width="100%" height="500" src="https://embed.figma.com/design/X0qwTjwQXjzqxMpDKFHihE/Little-Lemon-Order?node-id=0-1&embed-host=share" allowFullScreen sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <h3>Website</h3>
                <p>This website contains a home page and a order now page, according to the requirements provided by the assigment. The code for this site is on my Github, in the <a href="https://github.com/robtwilliam/little_lemon_booking" target="_blank">little_lemon_booking repo</a>.</p>
                <iframe width="100%" height="500" src="https://robtwilliam.github.io/little_lemon_booking" allowFullScreen sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
            </div>
        </div>
    )
}
export default LittleLemonBooking;

