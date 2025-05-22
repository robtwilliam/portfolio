import { getImageUrl } from "../../helpers/helpers";
import './projects.css';
import photomosaic_data from "../../assets/photomosiac_data.json";

function SamplePhotomosaic({ title, original, photomosaic }) {
    return (
    <div className="photomosaic">
        <h3 className='project-content-image-container-title'>{title}</h3>
        <div className='project-content-image-preview-container'>
            <div className='project-content-image-preview-tile'>
                <h4 className='project-content-image-title'>Original</h4>
                <img src={getImageUrl(original)} className='project-content-image-preview'/>
            </div>
            <div className='project-content-image-preview-tile'>
                <h4 className='project-content-image-title'>Photomosaic</h4>
                <img src={getImageUrl(photomosaic)} className='project-content-image-preview'/>
            </div>
        </div>
    </div>
)
}

function PhotomosaicBuilder() {
    return (
        <div className="project">
            <h2>Photomosaic Builder with Python and ML</h2>
            <img src={getImageUrl("juliet_upside_down_output.jpg")} alt="Juliet Cat Photomosaic" className="project-hero-img"/>
            <div className="project-content">
                <h3>Introduction</h3>
                <p>In one of the courses I took through Coursera - Stanford University & DeepLearning.AI Machine Learning Specialization - there was a lesson on how the KMeans clustering algorithm could be used for color quantization - reducing the amount of colors to compress the image. This sparked a project idea for me: could I use a similar process to create a photomosaic?</p>
                <p>I took on the challenge, using the techniques that I learned through this course - KMeans Clustering, Principal Component Analysis, and libraries such as pillow, pandas, and numpy - to create a systematic way of generating a photomosaic from an image.</p>
                <p>The photos I used were from my travels throughout the years, especially at national parks. So this was a fun project for me to create photomosaics of photos I like using photos I took on my journey. Below are some samples of the output. Zoom in on the photomosaic to see the smaller images.</p>
                {photomosaic_data.map((data,idx) => <SamplePhotomosaic key={data.id} title={data.title} original={data.original} photomosaic={data.photomosaic}/>)}
                <h3>Project Notebook</h3>
                <p>Below is the code for the project. Note that this code uses a json file of around 1,500 images to choose from when creating the photomosaic. They are mainly images of nature, hence all of the earth tones. To improve quality we could add more images, and adjust cluster/PCA hyperparameters. To improve speed, we could use GPU processing and improve the mosaic patch matching function.</p>
                <iframe src="https://www.kaggle.com/embed/robwittstock/photomosaic-builder-with-pil-and-sklearn" height="800" style={{margin: "0 auto", width: "100%", height: "600px", maxWidth: "1100px"}} frameBorder="0" scrolling="auto" title="Cyclistic Bikeshare Analysis" sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"></iframe>
            </div>
        </div>
    )
}

export default PhotomosaicBuilder;