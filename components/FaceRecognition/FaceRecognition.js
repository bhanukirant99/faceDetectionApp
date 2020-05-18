import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id='inputImg' src={imgUrl} width='500px' height='auto' alt="Img"></img>
                <div className="bounding-box" style={{ left: box.leftCol, top: box.topRow, right: box.rightCol,  bottom: box.bottomRow }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;