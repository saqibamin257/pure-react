import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({type}) => {
    let icon='fa-file-text-o';
    if(type ==='folder')
    icon = 'fa-folder';
    return(
        <span className="file-icon">
            <i className={`fa ${icon}`}/>
        </span>
    );
}

FileIcon.propTypes={
    type:PropTypes.string.isRequired
}

export default FileIcon;