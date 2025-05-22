import { getImageUrl } from "../../helpers/helpers";
import './projects.css';

function CyclisticBikeshare() {
    return (
        <div className="project">
            <h2>Cyclistic Bikeshare Analysis</h2>
            <img src={getImageUrl("bikeshare_photo.jpg")} alt="Bikeshare in Chicago" className="project-hero-img"/>
            <div className="project-content">
                <h3>Introduction</h3>
                <p>The project below is for the Google Data Analytics Capstone, which is part of the Google Data Analytics Certification through Coursera. The project is for a fictional company, Cyclistic. The task is to analyze how annual members and casual riders use Cyclistic bikes differently and provide three recommendations to help Cyclistic’s digital media marketing strategy convert casual riders into members. The project is split into three sections: Google Slides presentation, Tableau dashboards, and full notebook analysis.</p>
                <h3>Google Slides Presentation</h3>
                <p>This slide deck is designed to share high level details of the analysis, tell the story, illuminate key insights, and provide recommendations.</p>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQMCDsTECbRvS2ifl6S9vCJ62pGxLBZvq6pFTHQEFLrg_JV4MRtt6IDNWyvffqHsPptDG2vJV46hqu0/embed?start=false&loop=false&delayms=60000" frameBorder="0" width="100%" height="640" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <h3>Tableau Dashboards</h3>
                <p>These dashboards aggregate and transform 5 million records to deliver an interactive experience for stakeholders who would like to take a deeper dive into the data. These dashboards are optimized for desktop.</p>
                <iframe src="https://public.tableau.com/views/CyclisticHighLevelAnalysis/Dashboard4?:embed=y&:display_count=yes&:showVizHome=no" width="100%" height="600" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <iframe src="https://public.tableau.com/views/Cyclistic-BikeshareTrends/Dashboard1?:embed=y&:display_count=yes&:showVizHome=no" width="100%" height="600" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <iframe src="https://public.tableau.com/views/CyclisticMemberRoutes/TopMemberRoutes?:embed=y&:display_count=yes&:showVizHome=no" width="100%" height="800" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <iframe src="https://public.tableau.com/views/CyclisticCasualRoutes/TopCasualRoutes?:embed=y&:display_count=yes&:showVizHome=no" width="100%" height="800" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <h3>Full Kaggle Notebook</h3>
                <p>This notebook contains the R code used to prepare the data for use in Tableau, using techniques to evaluate, clean, and transform data into a flat, complete schema. It also contains a more detailed analysis of certain insights and recommendations.</p>
                <iframe src="https://www.kaggle.com/embed/robwittstock/cyclistic-bikeshare-analysis" height="800" style={{margin: "0 auto", width: "100%", height: "600px", maxWidth: "1100px"}} frameBorder="0" scrolling="auto" title="Cyclistic Bikeshare Analysis" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
            </div>
        </div>
    )
}

export default CyclisticBikeshare;