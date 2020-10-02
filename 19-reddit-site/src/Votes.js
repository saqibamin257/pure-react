import React,{useState} from 'react';


const Votes= ({score}) =>{
    const [vote,setVote] = useState(score);
    
    const addVote=()=>{
        setVote( vote => vote+1);
    }
    const decreaseVote=()=>{
        setVote(vote => vote-1);
    }
    return(
    <span>
        votes :{vote}
        <button onClick={() => addVote()}>Add</button>
        <button onClick={() => decreaseVote()}>Minus</button>
    
    </span>
    );
}

export default Votes;