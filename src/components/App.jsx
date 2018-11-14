import React from 'react';
import Schedule from './Schedule';
import Produce from './Produce';

function App(){
  return(
    <div className='container'>
      <style jsx> {`
        h1 {
          text-align: center;
        }
      `} </style>
      <h1 className="jumbotron">Farmer's Market</h1>
      <div className="row">
        <Schedule/>
        <Produce/>
      </div>
    </div>
  );
}

export default App;