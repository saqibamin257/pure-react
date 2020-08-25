import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({iconName}) => (
    <span>
    <i className={iconName}/>
    </span>
)

Icon.propTypes={
    iconName:PropTypes.string.isRequired
}

export default Icon;