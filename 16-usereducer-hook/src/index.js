import React,{useReducer,useRef,useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//-------------------------------Example-1-------------------------------//
// A “reducer” is a fancy word for a function that takes 2 values and returns 1 value.
// If you have an array of things, and you want to combine those things into a single value, the “functional
// programming” way to do that is to use Array’s reduce function. For instance, if you have an array
// of numbers and you want to add them all together, you can write a reducer function and pass it to
// reduce, like this:



// const Reducer = () => {
//     const adder = (total,number)=>{
//         return total+number
//     };
//     let numbers=[1,2,3];
//     let sum = numbers.reduce(adder,0);
//   return(
//     <div>
//     Hello {sum}
//     </div>
// );
// }

// ReactDOM.render(
//     <Reducer/>,
//     document.getElementById('root')
// );

//-------------------------------Example-2-------------------------------//

//function Counter(){
    // First render will create the state, and it will
   // persist through future renders
   

   //useReducer takes 2 parameter initial state and reducer function and returns new state

   //useReducer returns an array of 2 elements, similar to the useState hook. The first is the current state,
   //and the second is a dispatch function.

   //    const[sum,dispatch] = useReducer( (state, action) => {
//        return state + action;
//    },0);
//    return(
//        <>
//        {sum}
//        <button onClick={() => dispatch(1)}> Add 1 </button>
//        </>
//    );
// }  
// ReactDOM.render(
//     <Counter/>,
//     document.getElementById('root')
// );


//-------------Example 3-------------------//
//--Create a component that return square of elements

// function SquareValue(){
//     const[square,dispatch] = useReducer( (state,action) => {
//         return Math.pow(state+action,2);
//     },0);
    
//     return(
//         <>
//         {square}
//         <button onClick={ () => dispatch(1)}> Square Value </button>
//         </>
    
//     );
// };
// ReactDOM.render(
//     <SquareValue/>,
//     document.getElementById('root')
// );



//-----------------------Example-4-----------------------//
//create a component to manage a shopping list

// const reducer = (state,action) => {
//     switch(action.type){
//         // do something with the action
//         case 'add':
//             return[
//                 ...state,
//                 {
//                     id:state.length,
//                     name:action.name
//                 }
//             ];
//             case'remove':
//             // keep every item except the one we want to remove
//             return state.filter( (_,index) => index !==action.index);

//             case 'clear':
//                 return [];

//             default:
//                 return state;
//     }
// };

// function ShoppingList(){
//     const inputRef=useRef();
//     const[items,dispatch]= useReducer(reducer,[]);

//     function handleSubmit(e){
//         e.preventDefault();
//         dispatch({
//             type:'add',
//             name:inputRef.current.value
//         });
//         inputRef.current.value='';

//     }

//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <input type="text" ref={inputRef}/>
//         </form>
//         <ul>
//             {items.map( (item,index) => (
//                 <li key={item.id}>
//                     {item.name}
//                     <button
//                     onClick={() => dispatch({type:'remove',index})  }
//                     >
//                         X
//                     </button>
//                 </li>
//             ))}
//         </ul>
//         <div>
//             <button onClick={()=>dispatch({type:'clear'})}>Clear All</button>
//         </div>
//         </>
//     );
// }

// ReactDOM.render(
//     <ShoppingList/>,
//     document.getElementById('root')
// );


//----------------------Example-5---------------------------//
//Make a “room” with a light that has 4 levels – off, low, medium, high – and change the level
//each time you press each button. Create another button to turn the lights off.

// const reducer = (state,action) => {
//     switch(action.type){
//         case 'low':
//             return "low";
//         case 'medium':
//             return "medium";
//         case 'high':
//             return "high";
            
//             default:
//                 return state;
//     }
// };

// function Room(){
//     const[light,dispatch]= useReducer(reducer,"dark");
//     const brightness=light;
//     console.log(light);

//     return(
//         <div>
//             <div className={ `room ${brightness}` }>
//                 Room
//             </div>
//             <button onClick={ () => dispatch({type:'low'})  }>low</button>
//             <button onClick={ () => dispatch({type:'medium'})  }>medium</button>
//             <button onClick={ () => dispatch({type:'high'})  }>high</button>
//             <p>{light}</p>            
//         </div>
//     );
// }

// ReactDOM.render(
//     <Room/>,
//     document.getElementById('root')
// );

//----------------------Example-6---------------------------//

// 2. Make a “room” with a light that has 4 levels – off, low, medium, high – and change the level
// each time you press a button. Create a second button to turn the lights off.

// const reducer =(state,action)=>{
//     switch(action.type){
//         case 'advance':
//             return state+1;
//         case 'off':
//             return 0;
//         default:
//             return state;
//     }
// };

// function Room(){
//     const [lightLevel,dispatch]= useReducer(reducer,0);
//     const brightness = describeLightLevel(lightLevel);
//     console.log('brightness is:',brightness); 

//     return(
//         <>
//         <h1>Lights are: {brightness}</h1>
        
//         <br />
//         <button
//             onClick={() => dispatch({ type: 'advance' })}
//         >
//         Next
//         </button>
//         <button
//         onClick={() => dispatch({ type: 'off' })}
//         >
//         Turn Off
//         </button>

//         <div className={ `room ${brightness}` }>
//            Room
//         </div>
//         </>
//     );
//     function describeLightLevel(level) {
//         switch (level) {
//           case 0:
//             return 'off';
//           case 1:
//             return 'low';
//           case 2:
//             return 'medium';
//           case 3:
//             return 'high';
//           default:
//             return 'broken';
//         }
//     }
// }

// ReactDOM.render(
//     <Room/>,
//     document.getElementById('root')
// );


//----------------------Example-7---------------------------//
//Make a “keypad” with 6 buttons that must be pressed in the correct order to unlock it. Each
//correct button press advances the state. An incorrect button should reset it.

function Keypad(){ 

  const[keypad,dispatch] = useReducer( (state,action)=>{            
    return action;
  },0);

  const[counter,dispatchCounter]= useReducer( (state,action) =>{
    return state+action;
  },0);

  function handleClick(num){
    dispatch(num);
    dispatchCounter(1);     
  }


  return(    
    <>
    <p>{(counter===keypad)&&(counter===6)?'unlocked':'locked'}</p>    
    <table>
      <tbody>
      <tr>
        <td><button onClick={()=>handleClick(1)}>1</button></td>
        <td><button onClick={()=>handleClick(2)}>2</button></td>
        <td><button onClick={()=>handleClick(3)}>3</button></td>
      </tr>
      <tr>
        <td><button onClick={()=>handleClick(4)}>4</button></td>
        <td><button onClick={()=>handleClick(5)}>5</button></td>
        <td><button onClick={()=>handleClick(6)}>6</button></td>
    
      </tr>
      </tbody>
    </table>
    
    <p>{`keypad :${keypad}`}</p> 
    <p>{`counter:${counter}`}</p>
    
    </>

  );
}
ReactDOM.render(
  <Keypad/>,
  document.getElementById('root')
);

