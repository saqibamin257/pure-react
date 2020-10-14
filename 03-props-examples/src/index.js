import React from 'react';
import ReactDOM from 'react-dom';

//Note
//------- Run command "npm install" in terminal to install dependencies
//--------"npm start"  to start the project
//-----------Please Uncommment each exercise and run-----------//

//-----------Example-1 Normal Function
// function Person(props){
//     return(
//     <div>Hi {props.name}!</div>
//     );
// }

// ReactDOM.render(
//     <Person name={"saqib amin"}/>,    
//     document.getElementById("root")
// );

//----------Example-2 ES6-way
// const Person = (props) => (
//             <span>Hi {props.name}</span>
//             );

// ReactDOM.render(
//     <Person name={"saqib amin"}/>,    
//     document.getElementById("root")
// );

//----------Example-3 Destructuring

// const Person =({name}) => (
//                         <span>Hi {name}!</span>
//                         );

// ReactDOM.render(
//     <Person name={"saqib amin"}/>,    
//     document.getElementById("root")
// );

// //----------Example-4 Destruction 2nd way

// const Person = (props) =>{
//     const {firstname} = props;
//     const {lastname}= props;
//     return(
//     <span>Hi, {firstname} {lastname}!</span>
//     );
// }


// ReactDOM.render(
//     <Person firstname={"saqib"} lastname={"amin"}/>,    
//     document.getElementById("root")
// );


//----------Example-5 Destruction 2nd way

// const Person = ({firstname,lastname}) =>{//     
//     return(
//     <span>Hi, {firstname} {lastname}!</span>
//     );
// }

// ReactDOM.render(
//     <Person firstname={"saqib"} lastname={"amin"}/>,    
//     document.getElementById("root")
// );

//--------------Example-6
// Communicating With Parent Components
// Pass parameter from child to Parent
//If a child needs to send data to its parent, the parent can send down a function as a prop, like this:

// function handleAction(event){
//     console.log('child did',event);
// }

// function Parent(){
//     return(
//         <Child onAction={handleAction} />
//     );
// }

// function Child({onAction}){
//     return(
//         <button onClick={onAction}>Click</button>
//     );
// }

// ReactDOM.render(    
//     <Parent/>,
//     document.getElementById("root")
// );