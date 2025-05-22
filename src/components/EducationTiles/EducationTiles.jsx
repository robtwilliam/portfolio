import { getImageUrl } from "../../helpers/helpers.js";
import "./educationtiles.css";
import educationData from "../../assets/education_data.json";
import parse from 'html-react-parser';

function EducationTile({ title, image, school, dates, topics, courses }) {
    return (
        <div className="education-tile">
            <div className="education-left-section">
                <img src={getImageUrl(image)} className="education-logo"></img>
            </div>
            <div className="education-right-section">
                    <div className="education-meta-text">
                        <div className="education-company">{title}</div>
                        <div className="education-title">{school}</div>
                        <div className="education-dates">{dates}</div>
                    </div>
                    <div className="education-subtitle">Topics</div>
                    <ul className="education-subbullets"><li className="education-bullet">{topics}</li></ul>
                    <div className="education-subtitle">Courses</div>
                    <ul className="education-subbullets">{courses.map((course,idx) => <li className="education-bullet" key={idx}>{parse(course)}</li>)}</ul>
            </div>
        </div>
    )
}

function EducationTiles() {
    return (
        <div className="education-tiles">
            {educationData.map((data,idx) => <EducationTile key={data.id} title={data.title} image={data.image} school={data.school} dates={data.dates} topics={data.topics} courses={data.courses}/>)}
        </div>
    )
}

export default EducationTiles;