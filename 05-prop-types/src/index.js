import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import stamp from './img/stamp.jpg';
import logo512 from './img/logo512.png';


// Un comment each example code and run in browser


//--------------Example-1-------------------------//

//1. Create an AddressLabel component that takes a person object as a prop and renders their
//   name and address like so:


// function AddressLabel({person}){
//     return(
//         <div>
//             <div>{person.name}</div>
//             <div>{person.address}</div>
//         </div>
//     );
// }

// AddressLabel.propTypes={
//     person:PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         address:PropTypes.string.isRequired
//     }).isRequired
// };

// const testperson={
//     name:"saqib amin",
//     address:"B-090, Melbourne",
//     toAddress:"Amin House Haroon Attock.",
//     fromAddress:"77-xyz Road. Manchester."
// };

// ReactDOM.render(    
//     <AddressLabel person={testperson}/>,
//     document.getElementById("root")
// )


//-------------------Example-2-------------------------//


// 2. Create an Envelope component that takes toPerson and fromPerson as props and uses your
//    AddressLabel from Exercise 1 to display the return address and the recipient address. Make
//    sure to include a Stamp too!

// function Envelope({mailDetails}){
//     return(
//         <div>
        
//             <div className="toPerson">
//             <p>{mailDetails.toPerson.name}</p>
//             <p>{mailDetails.toPerson.address}</p>                        
//             </div>

//             <br/>
//             <br/>
//             <br/>
//             <br/>

//             <div className="fromPerson">
//             <p>{mailDetails.fromPerson.name}</p>
//             <p>{mailDetails.fromPerson.address}</p>                        
//             </div>

//             <div>Stamp:
//                 <img
//                 src={stamp}
//                 alt="stamp"
//                 />
//             </div>
//         </div>
//     );
// }

// const testDetails={
//     toPerson:{
//         name:"Saqib Amin.",
//         address:"Village Haroon Attock."
//     },
//     fromPerson:{
//         name:"Waqar Amin.",
//         address:"ABC Road Manchester."
//     }
// }


// ReactDOM.render(    
//     <Envelope mailDetails={testDetails} />,
//     document.getElementById("root")
// )


//-------------------Example-2(b)-------------------------//

// breaks into small component.
// Parent Component is Envelop Component.
// Child components are FromPerson Component & ToPerson Component. 

// function Envelop({mail}){
//     return(
//         <div>
//             <FromPerson person={mail.fromPerson}/>
//             <ToPerson person={mail.toPerson}/>
//             <Stamp/>
//         </div>
//     );
// }

// function FromPerson({person}){
//     return(
//         <div>
//             <p>From: {person.name}</p>
//             <p>Address: {person.address}</p>
//         </div>
//     );
// }

// //-------PropTypes---------//
// FromPerson.propTypes={
//     person:PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         address:PropTypes.string.isRequired
//     }).isRequired
// };

// function ToPerson({person}){
//     return(
//         <div>
//              <p>To: {person.name}</p>
//              <p>Address: {person.address}</p>
//         </div>
//     );
// }

// //-------PropTypes---------//
// ToPerson.propTypes={
//     person:PropTypes.shape(
//         {
//             name:PropTypes.string.isRequired,
//             address:PropTypes.string.isRequired
//         }).isRequired    
// };

// function Stamp(){
//     return(
//         <div>Stamp:
//              <img
//               src={stamp}
//               alt="stamp"
//              />
//         </div>
//     );

// }

// const mailDetail={
//     fromPerson:{
//         name:"Waqar Amin.",
//         address:"ABC RD Manchester"
//     },
//     toPerson:{
//         name:"Saqib Amin.",
//         address:"Village Haroon Attock."
//     }
// };

// ReactDOM.render(
//     <Envelop mail={mailDetail} />,
//     document.getElementById('root')
// );


//-------------------Example-3-------------------------//

//3. Create a CreditCard component based on this design. Style it up with CSS or inline styles.
//   Accept a cardInfo prop that contains the person’s name, expiration date, credit card number,
//   and bank name.


//---------Functional Component--------------------//
// function CreditCard({cardInfo}){
//     return(
//         <div>
//             <p>Name: {cardInfo.name}</p>
//             <p>Expiry Date: {cardInfo.expiry}</p>
//             <p>Card No.: {cardInfo.cardNo}</p>
//             <p>Bank: {cardInfo.bankName}</p>
//         </div>
//     );
// }

//------------ ES6 way to write component---------------------//
// const CreditCard = ({cardInfo}) => {
//     return(
//         <div>
//             <p>Name: {cardInfo.name}</p>
//             <p>Expiry Date: {cardInfo.expiry}</p>
//             <p>Card No.: {cardInfo.cardNo}</p>
//             <p>Bank: {cardInfo.bankName}</p>
//         </div>
//     );
// }

// //--------------PropTypes------------------//
// CreditCard.propTypes={
//     cardInfo:PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         expiry:PropTypes.string.isRequired,
//         cardNo:PropTypes.string.isRequired,
//         bankName:PropTypes.string.isRequired
//     }).isRequired
// }

// const cardInfo={
//     name:"Saqib Amin",
//     expiry:"10/20",
//     cardNo:"1044 4455 6325 8888",
//     bankName:"Standard Chartered Bank"
// }

// ReactDOM.render(
//     <CreditCard cardInfo={cardInfo}/>,
//     document.getElementById("root")
// );


//----------------------------Example-4-------------------//

//4. Create a Poster component that takes image, title, and text as props. Render something
//like the image below. Google “demotivational posters” for inspiration.


const Poster = ({posterInfo}) => {
    return(
        <div>
            {posterInfo.image}
            <h2>{posterInfo.title}</h2>
            <h3>{posterInfo.text}</h3>
        </div>
    );
};

const posterInfo = {
    image:<img src={logo512} alt="React Poster"/>,
    title:"REACT.",
    text: "Best thing since jquery probably."
};


ReactDOM.render(
    <Poster posterInfo={posterInfo} />,
    document.getElementById("root")
);