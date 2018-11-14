import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  return(
    <div>
      <h2>{props.day}</h2>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h4>{props.booth}</h4>
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default Location;