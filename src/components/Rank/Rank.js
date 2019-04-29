import React from 'react';
import "./Rank.css";

const Rank = ( {name, entries} ) => {
  if (entries === 1) {
    return (
      <div className="rank">
        <h3 className="greeting">{`Welcome back, ${name}! You've analyzed ${entries} photo!`}</h3>
      </div>
    );
  }
  else {
    return (
      <div className="rank">
        <h3 className="greeting">{`Welcome back, ${name}! You've analyzed ${entries} photos!`}</h3>
      </div>
    );
  }
}

export default Rank;