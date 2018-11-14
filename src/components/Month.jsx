import React from 'react';
import PropTypes from 'prop-types';


function Month(props){
  return(
    <div>
      <h2>{props.month}</h2>
      <h4>{props.selection}</h4>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
}



export default Month;