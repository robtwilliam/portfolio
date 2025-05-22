import CyclisticBikeshare from "../components/Projects/CyclisticBikeshare";
import { useSearchParams } from "react-router-dom";
import ProjectScrollbar from "../components/ProjectScrollbar/ProjectScrollbar";
import LittleLemonBooking from "../components/Projects/LittleLemon";
import ApexLegends from "../components/Projects/ApexLegends";
import PhotomosaicBuilder from "../components/Projects/PhotomosaicBuilder";

function Project() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")

    let projectTopic
    console.log(id)
    switch(id) {
        case 'cyclistic-bikeshare':
            projectTopic = <CyclisticBikeshare/>;
            break;
        case 'little-lemon-booking':
            projectTopic = <LittleLemonBooking/>
            break;
        case 'apex-legends-tournament-earnings':
            projectTopic = <ApexLegends/>
            break;
        case 'photomosaic-builder':
            projectTopic = <PhotomosaicBuilder/>
            break;
    }


    return (
        <div className='project'>
            <h2>Projects</h2>
        <div className='project-scrollbar' style={{margin:"auto"}}>
            <ProjectScrollbar id={id}/>
        </div>
        <div className='project-container'>
            {projectTopic}
        </div>
        </div>
    )
}

export default Project;