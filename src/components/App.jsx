import React from 'react';
import Schedule from './Schedule';
import Produce from './Produce';

function App(){
  return(
    <div className='container'>
      <style jsx> {`
        @import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');

        body {
          background-image: url('https://fee.org/media/25783/farmersmarket.jpg?anchor=center&mode=crop&width=1920&rnd=131577516230000000');
        }
        h1 {
          font-family: 'Allerta Stencil', sans-serif;
          font-size: 100px;
          text-align: center;
          border: 10px solid darkorange;
          border-radius: 5px;
          color: darkorange;
          background-color: rgb(255, 204, 153, .4);
          text-shadow: 0 0 5px black;
          padding: 50px;
          margin: 20px;
          box-shadow: 0 0 5px black;
        }
        .marketFont {
          font-family: 'Allerta Stencil', sans-serif;
          font-size: 200%;
        }
      `} </style>
      <h1>Avery's Organics</h1>
      <div className="row">
        <Schedule/>
        <Produce/>
      </div>
    </div>
  );
}

export default App;