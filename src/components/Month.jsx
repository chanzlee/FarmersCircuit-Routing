import React from 'react';
import PropTypes from 'prop-types';


function Month(props){
  return(
    <div>
      <h5>{props.month}</h5>
      <ul>
        {props.selection.map((produce, index) =>
          <li key={index}>
            {produce}
          </li>         
        )}
      </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Month;