import { getImageUrl } from "../../helpers/helpers";
import "./about.css";

function About() {
    return (
        <div className="about">
            <div className="about-image">
                <img src={getImageUrl("rob_ashley.png")} alt="Rob and Ashley" width="100%" height="100%"/>
            </div>
            <div className="about-text">
                <p>My passion for analytics began before my time at UCLA, when I was a Pilates studio director. At the time I was analyzing studio performance and competitors while developing a plan to achieve profitability. After achieving profitability and seeing the power of data-driven decision making, I knew I could dive deeper into analytics to have a bigger impact.</p>
                <p>Since graduating with a degree in business economics I’ve worked in e-commerce, financial services, healthcare, and tech, developing end-to-end pipelines, ad-hoc analyses, and business intelligence reporting to drive strategic decision-making, operational improvements, and innovation. I’ve been able to make an impact while learning in-demand technologies and processes from team members at top tier companies.</p>
                <p>Outside of work I spend most of my time with my wonderful fiancé and our two cats. We love exploring, eating great food, hanging at home, and enjoying live entertainment. You’ll likely find us at a national park, a good restaurant or brewery, or a concert somewhere around town. Thank you for your interest, and I look forward to hearing from you. Cheers!</p>
            </div>
        </div>
    )
}

export default About;