import React from 'react';
import ReactDOM from 'react-dom';

//---------important Note---------------//
//please uncomment each exercise code to see the results.



///--------------Exercise-1  Single Component---------------------------///
// function HelloWorld(){
//     return (
//     <h1>Hello World!</h1>
//     );
// }
// ReactDOM.render(
//     <HelloWorld/>,     
//     document.getElementById("root")
// );


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
// ReactDOM.render(
//     <HelloWorld/>,     
//     document.getElementById("root")
// );



///--------------------------Exercise-3 Book Component------------------------------///
// create a book component which show Title, Author ,Rating and isbn number.

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

// ReactDOM.render(
//     <Book/>,     
//     document.getElementById("root")
// );


///--------------------------Exercise-4 --Ternary Operation Logic----------------------------///
//Return the appropriate JSX from this component so that when username is undefined or null,
//it renders “Not logged in”. When username is a string, render “Hello, username”.

// function Greetings(){ 
//----keep changing usename value and see the difference in result.   

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

// ReactDOM.render(    
//      <Greetings/>,  
//     document.getElementById("root")
// );



///--------------Example-5 Table component---------------------------------------//

// function Table() {
//     return(
//         <table>
//             <tbody>
//                 <tr>
//                     <td>col-1</td>
//                     <td>col-2</td>
//                     <td>col-3</td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }

// ReactDOM.render(   
//     <Table/>,    
//     document.getElementById("root")
// );

///------------------ Example-6-----empty tags-------------//
//can you wrap up <td> elements in a <div>? NO, because the <td> table cells need to be direct descendants
//of a <tr> table row. How can you combine them?
//Answer is empty tag <></>, by empty tags we can achieve this.

//create a component called Data that renders the 3 columns, and replace the 3 <td>s with the <Data/> component.
//hint use empty tag

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
    <Data/>,
    document.getElementById("root")
);
