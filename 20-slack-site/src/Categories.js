import React from 'react';
import Channel from './Channel';
import People from './People'; 


const Categories = ({ channel,people,getMessageDetails}) => {     
    return(
        <div>
            <Channel channel={channel} getMessageDetails={getMessageDetails}  />
            <People  people={people} getMessageDetails={getMessageDetails}  />
        </div>       
    );    
}

export default Categories;
