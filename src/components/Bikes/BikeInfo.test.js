import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BikeInfo from './BikeInfo'

it('renders without crashing', () => {
  const props = {
    match: {
      params: {
        id: "1"
      }
    }
  }
  const context = {
    bikes: [
      {
        "id": "1",
        "bike_name": "Road",
        "bike_description": "Road bikes are designed to be ridden fast on smooth pavement. They have smooth, skinny tires and drop handlebars, and can be used for on-road racing. They are usually lighter than other types of bicycles. People find them uncomfortable and unstable on unpaved trails.",
        "bike_category": "Road",
        "bike_image": "https://www.bikeride.com/images/bike/Road-Bike-Chain-Reaction.jpg"
      },
      {
        "id": "2",
        "bike_name": "Cyclocross",
        "bike_description": "Cyclocross bikes are a special type of road bike designed to be raced on a mixed surface course (combination of pavement, unpaved trails, gravel, grass). They have a drop handlebar like regular road bikes, but the tires are a littler wider for more off-road traction, and they have a different style of brake that helps to prevent mud buildup in the frame.",
        "bike_category": "Road",
        "bike_image": "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/spxknltjc4fqrijlkcy6/MY19-TCX-SLR-2_Color-A.jpg"
      },
      {
        "id": "3",
        "bike_name": "Touring",
        "bike_description": "Touring bikes are a special type of road bike. They are designed to be ridden on pavement. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, they usually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bikes, because of their durability and ability to carry heavy loads.",
        "bike_category": "Road",
        "bike_image": "https://vader-prod.s3.amazonaws.com/1551217303-kona-sutra-1551217296.jpg"
      }
    ]
  }
  
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BikeInfo selectedBike={selectedBike} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
