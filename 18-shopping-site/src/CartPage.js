import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const CartPage = ({items,onRemoveOne,onAddOne}) => {
    return(
        <ul className="CartPage-items">
            {items.map( (item) => (
                <li className="CartPage-item" key={item.id}>
                    <Item item={item}>
                        
                    <div className="CartItem-controls">

                    <button
                    className="CartItem-removeOne"
                    onClick={() => onRemoveOne(item)}>&ndash;</button>
                    <span className="CartItem-count">{item.count}</span>
                    
                    <button
                    className="CartItem-addOne"
                    onClick={() => onAddOne(item)}>+</button>
                    </div>                    
                    </Item>
                </li>
            ))}
        </ul>
    );
}

CartPage.prototype={
    items:PropTypes.array.isRequired,
    onRemoveOne:PropTypes.func.isRequired,
    onAddOne:PropTypes.func.isRequired    
}
export default CartPage;