import React from 'react';
import PropTypes from 'prop-types';


const FileName = ({fileName}) => (
<span>{fileName}</span>
);

FileName.propTypes={
    fileName:PropTypes.string.isRequired
}

export default FileName;