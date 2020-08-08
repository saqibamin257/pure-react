import React from 'react';
import ReactDOM from 'react-dom';

///--------------Exercise-1  Single Component---------------------------///
// function HelloWorld(){
//     return (
//     <h1>Hello World!</h1>
//     );
// }


///--------------Exercise-2 Composition of Components---------------------------///
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
            <Hello/><World/>
            </div>
    );
}
///--------------------------Exercise-3 Book Component------------------------------///
function Book(){
    return(
        <div className='book'>
            <div className='title'>
                The Title
            </div>
            <div className='author'>
                The Author                
            </div>
            <ul className='stats'>
              <li className='rating'>
                5 stars
              </li>
              <li className='isbn'>
                 12-345678-910       
              </li>
            </ul>
        </div>
    );
}

///--------------------------Exercise-4 ------------------------------///
//Return the appropriate JSX from this component so that when username is undefined or null,
//it renders “Not logged in”. When username is a string, render “Hello, username”.

function Greetings(){
    alert('hi');
    let username= "root";
    //let username= undefined;
    //let username = null;
    //let username = false;   
    
    return(

        <div>
            {username ? `Hello ${username}`:'Not logged in'}
        </div>

    );


}




ReactDOM.render(
    //<HelloWorld/>,
     //<Book/>,
    <Greetings/>,
    document.getElementById("root")
);
