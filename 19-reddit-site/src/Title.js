import React from 'react';
import PropTypes from 'prop-types';


const Title = ({title,url}) => {
    return(
        <a href={url} target="_blank" rel="noopener noreferrer"> <h3>{title}</h3> </a>     
    );
}

Title.propType={
 title:PropTypes.string.isRequired,
 url:PropTypes.string.isRequired
}

export default Title;