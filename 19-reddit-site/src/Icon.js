import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image =() => {
    return(
        <span className="image-icon"><i className="fa fa-picture-o"></i></span>
    );
}


const ArrowUp =({VoteUp})=>{
    return(
        <span className="image-icon" onClick={VoteUp}><i className="fa fa-arrow-up"></i></span>
        
    );
}
//-------proptypes
ArrowUp.propTypes={
    VoteUp:PropTypes.func.isRequired
}

const ArrowDown =({VoteDown})=>{
    return(
       <span className="image-icon" onClick={VoteDown}> <i className="fa fa-arrow-down"></i></span>
    );
}

//----proptypes
ArrowDown.propTypes={
    VoteDown:PropTypes.func.isRequired
}

export{
    Image,
    ArrowDown,
    ArrowUp
}