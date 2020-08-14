import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
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

function Message({text}){
    return(
        <div className="message">
            {text}
        </div>
    );
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return(
    <span className="time">{timeString}</span>
    );
}; 

const ReplyButton = () =>(
    <i className="fa fa-reply reply-button"/>
);

// function getRetweetCount(count){
//     if(count > 0){
//         return(
//         <span className="retweet-count">{count}</span>
//         );
//     }
//     else{
//         return null;
//     }
// }

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
            {/* {getRetweetCount(count)} */}
            <Count count={count}/>            
        </i>
    </span>
);


// const LikeButton = ({count}) => (
// <i className="fa fa-heart like-button">{count}</i>
// );

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




const testTweet ={
    message:"Something about cats.",
    gravatar: "xyz",
    author:{
        handle:"catperson",
        name:"IAMA Cat Person"
    },
    likes:2,
    retweet:0,
    timestamp:"2020-08-10 21:24:37"
};



ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.getElementById('root')
);