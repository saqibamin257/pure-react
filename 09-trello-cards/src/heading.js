import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({text}) => (
    <span>
    {text}
    </span>
)
Heading.propTypes={
    text:PropTypes.string.isRequired
}
export default Heading;