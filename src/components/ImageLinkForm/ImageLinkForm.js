import React from 'react';
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onSubmit }) => {
  return (
    <div className="imagelinkform">
      <h3 className="prompt">Detect Face Below</h3>
      <div className="inputform">
        <input className="input" type="text" placeholder="Enter URL" onChange={onInputChange}/>
        <button className="button" onClick={onSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;