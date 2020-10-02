import React from 'react';
import Votes from './Votes';
import Title from './Title';
import Time from './Time';
import Comments from './Comments';
import Links from './Links';
import PropTypes from 'prop-types';

const PostList = ({posts}) => {
    
    return(
        <ul>
            {posts.map( (post)=> (
            <li key={post.id}>
                 <Votes score={post.score} />
                 <Title title={post.title} url={post.url}/>
                 <Time time={post.created_utc}/>
                 <Comments totalComments={post.num_comments}/>
                 <Links/>
            </li>
            ))}
        </ul>
    );
}

PostList.propTypes={
    posts:PropTypes.array.isRequired
}

export default PostList;