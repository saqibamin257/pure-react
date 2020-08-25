import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

const Card = ( {card} ) => (
    <table>
        <tbody>
        <ItemList itemList={card.card1_itemList}/>
        </tbody>
    </table>    
)

Card.propTypes={
    card:PropTypes.object
}

export default Card;