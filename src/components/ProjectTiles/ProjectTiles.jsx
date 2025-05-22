import { NavLink } from "react-router-dom";
import projectData from "../../assets/project_data.json";
import { getImageUrl } from "../../helpers/helpers.js";
import "./projecttiles.css";

function ProjectTile(props) {
    return (
        <div className="project-tile">
            <div className="project-tile-image-layer">
                <img src={getImageUrl(props.image)} className="project-tile-image"/>
                <div className="project-tile-technologies">
                    {props.technologies.map((tech,idx) => <span className='tech-box' key={idx}>{tech}</span>)}
                </div>
            </div>
            <div className="project-tile-text">
                <div className="project-tile-title">{props.title}</div>
                <div className="project-tile-description">{props.description}</div>
                <NavLink to={props.url}><button className="view-project-button">View Project</button></NavLink>
            </div>
        </div>
    )
}


function ProjectTiles() {
    return (
        <div className="project-tile-container">
            {projectData.map((data, idx) => <ProjectTile key={data.id} image={data.image} title={data.title} description={data.description} technologies={data.technologies} url={data.url}/>)}
        </div>
    )
}

export default ProjectTiles;