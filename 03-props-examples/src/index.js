import React from 'react';
import ReactDOM from 'react-dom';

//-----------Example-1 Normal Function
// function Person(props){
//     return(
//     <div>Hi {props.name}!</div>
//     );
// }

//----------Example-2 ES6-way
// const Person = (props) => (
//             <span>Hi {props.name}</span>
//             );

//----------Example-3 Destructuring

// const Person =({name}) => (
//                         <span>Hi {name}!</span>
//                         );

// //----------Example-4 Destruction 2nd way

// const Person = (props) =>{
//     const {firstname} = props;
//     const {lastname}= props;
//     return(
//     <span>Hi, {firstname} {lastname}!</span>
//     );
// }


//----------Example-5 Destruction 2nd way

// const Person = (props) =>{
//     const {firstname} = props;
//     const {lastname}= props;
//     return(
//     <span>Hi, {firstname} {lastname}!</span>
//     );
// }

//--------------Example-6
// Communicating With Parent Components
// Pass parameter from child to Parent
//If a child needs to send data to its parent, the parent can send down a function as a prop, like this:

function handleAction(event){
    console.log('child did',event);
}

function Parent(){
    return(
        <Child onAction={handleAction} />
    );
}

function Child({onAction}){
    return(
        <button onClick={onAction}>Click</button>
    );
}

ReactDOM.render(
    // <Person firstname={"saqib"} lastname={"Amin"}/>,
    <Parent/>,
    document.getElementById("root")
);