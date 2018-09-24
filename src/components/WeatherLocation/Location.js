import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) =>(// { // otro destructuring
    //const Location = (props) => {
    //const city = props.city;
    //const {city} = props; // destructuring ecma
   // return  ( 
        <div>
            <h1>{city}</h1>
        </div>
     //   );
//};
);
Location.propTypes = {
    city: PropTypes.string.isRequired,
};
export default Location;