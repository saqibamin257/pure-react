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

const Person = (props) =>{
    const {firstname} = props;
    const {lastname}= props;
    return(
    <span>Hi, {firstname} {lastname}!</span>
    );
}

ReactDOM.render(
    <Person firstname={"saqib"} lastname={"Amin"}/>,
    document.getElementById("root")
);