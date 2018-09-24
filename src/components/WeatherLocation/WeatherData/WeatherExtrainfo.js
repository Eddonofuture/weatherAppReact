import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WheaterExtrainfo = ({humidity , wind}) => (
   <div className="weatherExtraInfoCont">
       <span className="extraInfoText">{`Humedad: ${humidity} % `}</span>
       <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);

WheaterExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default WheaterExtrainfo;