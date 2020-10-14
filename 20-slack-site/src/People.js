import React from 'react';

const People = ({people,getMessageDetails}) => {
    
    const handleClick = (e) => {
        getMessageDetails(e.currentTarget.value,"People");
    }
    return(
        <div>
            <h2>PEOPLE</h2>
            <ul>
                {people.map( (peopleGroup) => (
                    <li key={peopleGroup.ID} value={peopleGroup.ID} onClick={(e) => handleClick(e)  } >{peopleGroup.Name}</li>
                ))}
            </ul>
        </div>
    );
}

export default People;