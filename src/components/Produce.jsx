import React from 'react';
import Month from './Month';

const availableProduce = [  
  {  
    month: 'January',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  },
  {  
    month: 'February',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {  
    month: 'March',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {  
    month: 'April',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Garlic',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {  
    month: 'May',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Cauliflower',
      'Garlic',
      'Lettuce',
      'Potatoes',
      'Radishes'
    ]
  },
  {  
    month: 'June',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Blackberries',
      'Cherries',
      'Raspberries',
      'Strawberries',
      'Asparagus',
      'Broccoli',
      'Cauliflower',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash'
    ]
  },
  {  
    month: 'July',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Raspberries',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {  
    month: 'August',
    selection: [  
      'Apples',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Rhubarb',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {  
    month: 'September',
    selection: [  
      'Apples',
      'Blueberries',
      'Grapes',
      'Melons',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {  
    month: 'October',
    selection: [  
      'Apples',
      'Grapes',
      'Hazelnuts',
      'Melons',
      'Peaches',
      'Pears',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Pumpkins',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {  
    month: 'November',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Squash',
      'Turnips'
    ]
  },
  {  
    month: 'December',
    selection: [  
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  }
];

function Produce(){
  return(
    <div className="d-flex justify-content-center">
    <div className='col-md-9'>
      <style jsx>{`
        div.style2 {
          background-color: rgb(255, 204, 153, .7);
          border: 10px solid darkgreen;
          padding: 50px;
          margin-top: 20px;
          border-radius: 5px;
          box-shadow: 0 0 5px black;
          margin: 10px;
          padding: 10px;
        }
        h2 {
          text-align: center;
          padding: 10px 0;
        }
      `}</style>
      <div className="style2">
        <h2 className="marketFont">SEASONAL PRODUCE</h2>
        {availableProduce.map((item, index) =>
          <Month
            month={item.month}
            selection={item.selection}
            key={index}/>
        )}
      </div>
    </div>
    </div>
  );
}

export default Produce;