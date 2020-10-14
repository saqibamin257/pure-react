import React from 'react';

const Channel =({channel,getMessageDetails})=>{
    
    const handleClick = (e) => {
        getMessageDetails(e.currentTarget.value,"Channel");
    }
    return(
        <div>
            <h2>CHANNELS</h2>
        <ul>
            {channel.map( (channelGroup) => (
                <li key={channelGroup.ID} value={channelGroup.ID} onClick={(e) => handleClick(e)}> {`# ${channelGroup.Name}`} </li>
            ))}            
        </ul>
        </div>

    );
}
export default Channel;