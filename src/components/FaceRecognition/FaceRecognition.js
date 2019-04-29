import React from 'react';
import "./FaceRecognition.css";

const FaceRecognition = ({ box, image }) => {
  return (
    <div className="center">
      <div className="face">
        <img id="photo" src={image} alt=""/>
        <div className="facebox" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;