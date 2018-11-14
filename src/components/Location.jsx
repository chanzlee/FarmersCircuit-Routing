import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  return(
    <div>
      <h5>{props.day}</h5>
      <h6>{props.location}</h6>
      <h6>{props.hours}</h6>
      <h6>{props.booth}</h6>
      <hr/>
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;