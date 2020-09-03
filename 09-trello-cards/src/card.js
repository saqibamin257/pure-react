import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';


//Single Card Data

// const Card = ( {card} ) => (    
//     <table>
//         <tbody>
//         <ItemList itemList={card}/>
//         </tbody>
//     </table>    
// )

// Multiple Card Data
const Card = ({cardList}) =>{      
    return(
        cardList.map( (card) => (   
            <div style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>                   
            <table>
                <tbody>
                    <ItemList itemList={card}/>
                </tbody>
            </table>
            </div>
        ))        
    );        
}

Card.propTypes={
    cardList:PropTypes.array
}

export default Card;