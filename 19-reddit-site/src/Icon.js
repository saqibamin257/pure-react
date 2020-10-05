import React from 'react';
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

const ArrowDown =({VoteDown})=>{
    return(
       <span className="image-icon" onClick={VoteDown}> <i className="fa fa-arrow-down"></i></span>
    );
}

export{
    Image,
    ArrowDown,
    ArrowUp
}