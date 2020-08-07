import React from 'react';
import ReactDOM from 'react-dom';

// function HelloWorld(){
//     return (
//     <h1>Hello World!</h1>
//     );
// }
function Hello(){
    return (
    <span>Hello</span>
    );
}

function World(){
    return (
    <span>World!</span>
    );
}


function HelloWorld(){
    return (
            <div>
            <Hello/> <World/>
            </div>
    );
}


ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("root")
);