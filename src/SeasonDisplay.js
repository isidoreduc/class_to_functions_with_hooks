import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    seasonMessage: "Nice, let's hit the beach",
    iconName: 'sun'
  },
  winter: {
    seasonMessage: "Brrr, it's chilly out side",
    iconName: 'snowflake'
  }
};

const getSeason = (latitude, date) => {
  if (date < 4 && date > 9) {
    return latitude < 0 ? 'summer' : 'winter';
  } else {
    return latitude < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  // destructuring
  const { seasonMessage, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      {/* className = 'snowflake icon' */}
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{seasonMessage}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
