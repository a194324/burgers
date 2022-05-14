import React, { useState } from 'react';
import PropTypes from 'prop-types';
import restaurants from '../sample-restaurants';

const Landing = props => {
const [display, toggleDisplay] = useState(false);
const [title, setTitle] = useState('');
const [url, setUrl] = useState('');

const displayList = () => {
   toggleDisplay(!display);
};

const getTitle = restaurant => {
   const { title, url } = restaurant;
   setTitle(title);
   setUrl(url);
   toggleDisplay(false);
};

const gotToRestaurant = () => {
   props.history.push(`/restaurant/${url}`);
};

return (
   <div className='restaurantselect'>
      <div className='restaurant-select-top'>
      <div
         onClick={displayList}
         className='restaurant-select-top-header font-effect-outline'
      >
         {title ? title : 'Выбери ресторан'}
      </div>
      <div className='arrow-picker'>
         <div className='arrow-picker-up'></div>
         <div className='arrow-picker-down'></div>
      </div>
      </div>
      {display ? (
      <div className='restaurant-select-bottom'>
         <ul>
            {restaurants.map(restaurant => {
            return (
               <li onClick={() => getTitle(restaurant)} key={restaurant.id}>
                  {restaurant.title}
               </li>
            );
            })}
         </ul>
      </div>
      ) : null}
      {title && !display ? (
      <button onClick={gotToRestaurant}>Перейти в ресторан</button>
      ) : null}
   </div>
);
};

Landing.propTypes = {
history: PropTypes.object
};

export default Landing;