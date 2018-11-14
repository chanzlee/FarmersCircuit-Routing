import React from 'react';
import Schedule from './Schedule';
import Produce from './Produce';

function App(){
  return(
    <div>
      <style jsx> {`
        h1 {
          text-align: center;
        }
      `} </style>
      <h1>Farmer's Market</h1>
      <Schedule/>
      <Produce/>
    </div>
  );
}

export default App;