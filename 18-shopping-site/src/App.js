import React,{useState} from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import { items } from './static-data';
import CartPage from './CartPage';


const summarizeCart = cart =>{
    const groupedItems = cart.reduce((summary,item) => {
        summary[item.id] = summary[item.id] || {
            ...item,
            count:0
        };
        summary[item.id].count++;
        return summary;
     },{});
     return Object.values(groupedItems); 
}

const App = () => {

    const[activeTab,setActiveTab] = useState('items');
    const[cart,setCart]=useState([]);
    const[totalAmount,setTotalAmount] = useState(0);
    
    const addToCart = (item) => {
      setCart( prevCart => [...prevCart,item]);      
      setTotalAmount(totalAmount => Math.round((totalAmount + item.price)*100)/100 );
    };
    
    const removeItem = item => {
        let index = cart.findIndex(i => i.id === item.id);
        if (index >= 0) {
        setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
        });
        }
        setTotalAmount(totalAmount => Math.round((totalAmount - item.price)*100)/100);
        };    
 
    return(
        <div className ="App">            
            <Nav
            activeTab = {activeTab}
            onTabChange = {setActiveTab}
            totalItems={cart.length}
            totalAmount={totalAmount}
            />
           
            <main className = "App-content" >
            <Content
             tab={activeTab}
             onAddToCart = {addToCart}             
             onRemoveItem={removeItem}
             cart={summarizeCart(cart)}
             totalAmount={totalAmount}             
              />             
            </main>

        </div>
    );
}

const Content = ({tab, onAddToCart ,onRemoveItem, cart,totalAmount}) => {
    switch(tab){
        default:
            case 'items':
                return(
                    <ItemPage
                    items={items}
                    onAddToCart={onAddToCart}
                />
                );                
            case 'cart':                
                return (
                <CartPage 
                items={cart}
                onAddOne={onAddToCart}
                onRemoveOne={onRemoveItem}
                totalAmount={totalAmount}
                />);
    }
};



export default App;