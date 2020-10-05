import React,{useState} from 'react';
import {Image, ArrowUp,ArrowDown} from './Icon';

const Votes= ({score}) =>{
    const [vote,setVote] = useState(score);
    
    const addVote=()=>{
        setVote( vote => vote+1);
    }
    const decreaseVote=()=>{
        setVote(vote => vote-1);
    }
    return(
    <span >
        <ArrowUp VoteUp={() => addVote()}/>
        votes :{vote}
        <ArrowDown VoteDown={() => decreaseVote()} />
        <Image/>
    </span>
    );
}

export default Votes;