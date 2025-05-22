import { getImageUrl } from "../../helpers/helpers.js";
import "./experiencetiles.css";
import experienceData from "../../assets/experience_data.json";
import parse from 'html-react-parser';

function ExperienceTile({ image, company, title, dates, stakeholders, technologies, responsibilities, accomplishments }) {
    return (
        <div className="experience-tile">
            <div className="experience-left-section">
                <img src={getImageUrl(image)} className="experience-logo"></img>
                <div className="experience-meta-text">
                <div className="experience-company">{company}</div>
                <div className="experience-title">{title}</div>
                <div className="experience-dates">{dates}</div>
                </div>
            </div>
            <div className="experience-right-section">
                    <div className="experience-subtitle">Stakeholders</div>
                    <ul className="experience-subbullets"><li className="experience-bullet">{stakeholders}</li></ul>
                    <div className="experience-subtitle">Technologies</div>
                    <ul className="experience-subbullets"><li className="experience-bullet">{technologies}</li></ul>
                    <div className="experience-subtitle">Responsibilities</div>
                    <ul className="experience-subbullets">{responsibilities.map((resp,idx) => <li className="experience-bullet" key={idx}>{parse(resp)}</li>)}</ul>
                    <div className="experience-subtitle">Accomplishments</div>
                    <ul className="experience-subbullets">{accomplishments.map((acc,idx) => <li className="experience-bullet" key={idx}>{parse(acc)}</li>)}</ul>
            </div>
        </div>
    )
}

function ExperienceTiles() {
    return (
        <div className="experience-tiles">
            {experienceData.map((data,idx) => <ExperienceTile image={data.image} company={data.company} title={data.title} dates={data.dates} stakeholders={data.stakeholders} technologies={data.technologies} responsibilities={data.responsibilities} accomplishments={data.accomplishments} key={data.id}/>)}
        </div>
    )
}

export default ExperienceTiles;