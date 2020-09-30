import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const CartPage = ({items,onRemoveOne,onAddOne,totalAmount}) => {
    return(
        <div>
            {totalAmount===0 ? 
            <div className="EmptyCart-Message">
                <p>Your cart is empty.</p>
                <p>Why not add some expensive products to it?</p> 
            </div>:
            <div>            
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
            <div className="Total-Amount">Total: ${totalAmount}</div>
        </div>
            }
        </div>
    );
}
CartPage.prototype={
    items:PropTypes.array.isRequired,
    onRemoveOne:PropTypes.func.isRequired,
    onAddOne:PropTypes.func.isRequired    
}
export default CartPage;