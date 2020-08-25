import React from 'react';
import PropTypes from 'prop-types';
import Heading from './heading';
import Icon from './icon';

const Header = ({header}) => (
    <span>
    <Heading text={header.text}/>
    <Icon iconName={header.iconName}/>
    </span>
)

Header.propTypes={
    header:PropTypes.object.isRequired
}

export default Header;