import { getImageUrl, useWindowWidth } from "../../helpers/helpers";
import './projects.css';

function ApexLegends() {
    const width = useWindowWidth()
    return (
        <div className="project">
            <h2>Apex Legends Tournament Earnings</h2>
            <img src={getImageUrl("apex_legends.jpg")} alt="Apex Legends Tournament" className="project-hero-img"/>
            <div className="project-content">
                <h3>Introduction</h3>
                <p>The project below is based on a video game I am personally interested in, Apex Legends. I've been playing Apex for several years and over the past year have been watching a lot of competitive Apex. I was curious about how much a top professional Apex player earns from tournaments and how many players earn enough to quit their day job by competing in tournaments, so I took a look into the data.</p>
                <p>The technologies used in this project are Python, Pandas, Power BI, and Kaggle. The data is sourced from <a href="https://liquipedia.net/apexlegends/Main_Page" style={{"color":"yellow"}}>Liquipedia's Apex Legends section</a> using parsing scripts written in Python with Pandas. The scripts are built directly into the Power BI report to source the data. From there, the data is transformed and aggregated with DAX into formats used to create the report shown below. The Kaggle notebook at the end is only used to share the parsing scripts used directly in the Power BI report. </p>
                <h3>Analysis</h3>
                <p>The analysis was focused on the top 100 players, ranked by overall earnings. For the top 100 players, I looked at total earnings, years competing, average yearly earnings, and earnings by team and tournament since the game's release in 2019.</p>
                <h4>Power BI Reports</h4>
                <p>This report shows earnings and performance for the top 100 players in distribution bins as well as by player. Note that S-Tier Top 3s are Top 3 placements in S-Tier tournaments, the most highly-regarded tournaments in Apex Legends. To interact with this report, click on a distribution bin or shift-click on multiple distribution bins.</p>
                <iframe title="Apex Legends Earnings Distribution" width="100%" height={width > 1100 ? Math.round(1100*(3/5),0) : Math.round((width*1.01)*(3/5),0)} src="https://app.powerbi.com/view?r=eyJrIjoiYjY5N2UxOWQtZDUzZS00MzBiLWE2OWMtMDU2YWM2NmNiNGFkIiwidCI6ImZhYzI0M2M4LWRjOWUtNGVmYi1iNDBjLWNlYjFhYWU2OWVmYiJ9" frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <p>This report shows earnings and earnings rank by year as well as earnings by team and tournament for a given player. To interact with this dashboard, filter by player and click on the bar or column of the data point that you are interested in, or shift-click to choose multiple.</p>
                <iframe title="Apex Legends Earnings Distribution" width="100%" height={width > 1100 ? Math.round(1100*(3/5),0) : Math.round((width*1.01)*(3/5),0)} src="https://app.powerbi.com/view?r=eyJrIjoiYjY5N2UxOWQtZDUzZS00MzBiLWE2OWMtMDU2YWM2NmNiNGFkIiwidCI6ImZhYzI0M2M4LWRjOWUtNGVmYi1iNDBjLWNlYjFhYWU2OWVmYiJ9&pageName=e60318bddc19eaea0556" frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
                <h3>Findings</h3>
                <p>While there are a few players who have clearly outperformed the pack, and one (ImperialHal) notably earning over $1M dollars from tournaments since the games inception, a large majority (68) of the top 100 players have made under $40K per year from tournament earnings. In addition, only 11 of the top 100 have earned over $60K per year competing in tournaments.</p>
                <p>The clearest factor of a player earning enough to make a living from tournaments is placing well in <a href="https://liquipedia.net/apexlegends/S-Tier_Tournaments" style={{"color":"yellow"}}>S-Tier tournaments</a>. Those making over $40K per year placed top 3 in S-Tier tournaments on average 3 times over the course of 5 years, with only one player earning over $40K per year without placing top 3 in an S-Tier tournament.</p>
                <p>Also important to note, in 2025 S-Tier tournaments are more frequent and have larger prize pools than in previous years - $8M is up for grabs in S-Tier tournaments in 2025, versus only $1.5M in 2019. So we should be seeing more players by the end of this year earning enough to make a living by competing in these S-Tier tournaments.</p>
                <p>The bottom line is: in order to make a living competing in Apex Legends tournaments, you'll need to outperform the best of the best in the most highly-regarded tournaments in the game. Otherwise, building additional revenue streams through Twitch, Youtube, TikTok, esports organizations, or sponsorships can greatly help subsidize your passion to compete in Apex Legends.</p>
                <h3>Parsing Script: Kaggle Notebook</h3>
                <p>Below is a Kaggle notebook that shows the parsing scripts use to source the data used in this analysis.</p>
                <iframe src="https://www.kaggle.com/embed/robwittstock/apex-legends-earnings" height="800" style={{margin: "0 auto", width: "100%", height: "600px", maxWidth: "1100px"}} frameBorder="0" scrolling="auto" title="Cyclistic Bikeshare Analysis" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
            </div>
        </div>
    )
}

export default ApexLegends;