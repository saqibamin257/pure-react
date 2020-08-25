import React from 'react';
import PropTypes from 'prop-types';
import Heading from './heading';
import Icon from './icon';


const Footer = ({footer}) => (
    <span>
    <Heading text={footer.text}/>
    <Icon iconName={footer.iconName}/>
    </span>
)
Footer.propTypes={
    footer:PropTypes.object.isRequired
}

export default Footer;