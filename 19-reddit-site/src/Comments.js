import React from 'react';
import PropTypes from 'prop-types';

const Comments =({totalComments})=>{
    return(
    <div className='comments'>{totalComments} comments</div>
    );
}
Comments.propTypes={
    totalComments:PropTypes.number.isRequired
}

export default Comments;