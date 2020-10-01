import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

function Tweet({tweet}){
    return(
        <div className='tweet'>
            <Avatar hash={tweet.gravatar}/>                    
        <div className="content">
            <Author author={tweet.author}/>
            <Time time={tweet.timestamp}/>
            <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweet}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
        </div>
        </div>
    );
}
//------propTypes with shape------//

// Tweet.propTypes={
//     tweet:PropTypes.shape({
//         message:PropTypes.string,
//         gravatar:PropTypes.string,
//         author:PropTypes.shape({
//             handle:PropTypes.string.isRequired,
//             name:PropTypes.string.isRequired
//         }).isRequired,
//         likes:PropTypes.number,
//         retweet:PropTypes.number,
//         timestamp:PropTypes.string
//     })    
// };

//------propTypes with object------//
Tweet.propTypes={
    tweet:PropTypes.objectOf(PropTypes.object)
};


function Avatar({hash}){
    const url=`https://www.gravatar.com/avatar/${hash}`;
    return(
        <img
        src={url}
        className="avatar"
        alt="avatar"
        />
    );
}
//-------propType-------//
Avatar.propTypes={
    hash:PropTypes.string
};

function Message({text}){
    return(
        <div className="message">
            {text}
        </div>
    );
}

 //-----propTypes------//  
Message.propTypes={
    text:PropTypes.string
};

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return(
    <span className="time">{timeString}</span>
    );
}; 

 //-----propTypes------//  
Time.propTypes={
    time:PropTypes.string
};

const ReplyButton = () =>(
    <i className="fa fa-reply reply-button"/>
);



function Count({count}){
    if(count > 0){
        return(
        <span className="retweet-count">{count}</span>
        )
    }
    else{
        return null;
    }
}

const RetweetButton= ({count}) => (
    <span className="retweet-button">
        <i className="fa fa-retweet">           
            <Count count={count}/>            
        </i>
    </span>
);




const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart">
            {count > 0 && 
            <span className="like-count">
                {count}
            </span>}
        </i>
    </span>    
    );

    //-----propTypes------//    
LikeButton.propTypes={
    count:PropTypes.number
};


const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

function Author({author}){
    return(
        <span className="author">
        <span className = "name">{author.name}</span>
        <span className="handle">@{author.handle}</span>              
        </span>
    );
}

//------propTYpes----//
Author.propTypes={
    author:PropTypes.shape({
        name:PropTypes.string.isRequired,
        handle:PropTypes.string.isRequired
    }).isRequired
};




const testTweet ={
    message:"Something about cats.",
    gravatar: "xyz",
    author:{
        handle:"catperson",
        name:"IAMA Cat Person"
    },
    likes:2,
    retweet:10,
    timestamp:"2020-08-10 21:24:37"
};



ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.getElementById('root')
);