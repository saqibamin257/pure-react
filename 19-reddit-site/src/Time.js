import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Time = ({time}) => {
    const timeString = moment(time).startOf('day').fromNow();
    return(
    <span className="time">Submitted {timeString} by </span>
    );
}

Time.propTypes={
    time:PropTypes.number.isRequired
}

export default Time;