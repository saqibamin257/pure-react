import React from 'react';
import ReactDOM from 'react-dom';

///--------------Exercise-1  Single Component---------------------------///
// function HelloWorld(){
//     return (
//     <h1>Hello World!</h1>
//     );
// }


///--------------Exercise-2 Composition of Components---------------------------///
// function Hello(){
//     return (
//     <span>Hello</span>
//     );
// }

// function World(){
//     return (
//     <span>World!</span>
//     );
// }


// function HelloWorld(){
//     return (
//             <div>
//             <Hello/><World/>
//             </div>
//     );
// }


///--------------------------Exercise-3 Book Component------------------------------///
// function Book(){
//     return(
//         <div className='book'>
//             <div className='title'>
//                 The Title
//             </div>
//             <div className='author'>
//                 The Author                
//             </div>
//             <ul className='stats'>
//               <li className='rating'>
//                 5 stars
//               </li>
//               <li className='isbn'>
//                  12-345678-910       
//               </li>
//             </ul>
//         </div>
//     );
// }

///--------------------------Exercise-4 ------------------------------///
//Return the appropriate JSX from this component so that when username is undefined or null,
//it renders “Not logged in”. When username is a string, render “Hello, username”.

// function Greetings(){    
//     let username= "joe root";
//     //let username= undefined;
//     //let username = null;
//     //let username = false;       
//     return(

//         <div>
//             {username ? `Hello ${username}`:'Not logged in'}
//         </div>

//     );
// }


///--------------Example-5 Table component---------------------------------------//

function Table() {
    return(
        <table>
            <tbody>
                <tr>
                    <td>col-1</td>
                    <td>col-2</td>
                    <td>col-3</td>
                </tr>
            </tbody>
        </table>
    );
}

///------------------ Example-6
//create a component called Data that renders the 3 columns, and replace the 3 <td>s with the <Data/> component.
//hint use empty tag

function Data(){
    return(
        <table>
            <tr>
                <>
                <Table/>
                </>
            </tr>
        </table>
    );
}

ReactDOM.render(
    //<HelloWorld/>,
     //<Book/>,
    // <Greetings/>,
    // <Table/>,
    <Data/>,
    document.getElementById("root")
);
