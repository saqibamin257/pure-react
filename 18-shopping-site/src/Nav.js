import React from 'react';
import './Nav.css';

const Nav =({activeTab, onTabChange, totalItems, totalAmount})=>{
    const itemClass = tabName =>
        `App-nav-item ${
        activeTab === tabName ? 'selected' : ''
        }`;
    return(
        <nav className="App-nav">
            <ul>
                <li className={itemClass('items')}>
                    <button onClick={()=> onTabChange('items')}>
                        Items
                    </button>
                </li>
                <li className={itemClass('cart')}>
                    <button onClick={()=> onTabChange('cart')}>
                        Cart
                    </button>
                </li>                
                
                    <ShoppingCartSummary
                     totalItems = {totalItems}
                     totalAmount = {totalAmount}/>
                
            </ul>
            
        </nav>        
    );
}

const ShoppingCartSummary = ({totalItems,totalAmount}) => {
    return(
        <span className = "shopping-summary">
        <i className="fa fa-shopping-cart"></i>
        {` ${totalItems} items ($${totalAmount})`}
        </span>
        
        
    );
}


export default Nav;