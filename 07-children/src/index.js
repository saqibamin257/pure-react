import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


//uncomment each example one by one to see result in browser. 


//------------Example-1(a)-----------------//
//---Icon Button Component
//---show text inside button.

// function IconButton(){
//     return(
//         <button>Do The Things</button>
//     );
// }

// ReactDOM.render(
//     <IconButton/>,
//     document.getElementById('root')
// )



//------------Example-1(b)-----------------//
//---Icon Button using Children
//---unusual way pass the children as a prop.


// function IconButton({children}){
//     return(
//         <button>
//         <i className="target-icon"/>
//         {children}
//         </button>
//     );
// }

// ReactDOM.render(
//     <IconButton children={"Do The Things"}/>,
//     document.getElementById('root')
// )


// //------------Example-2-----------------//
// //---Icon Button
// //---pass children text with italic html attribute as a prop


// function IconButton({children}){
//     return(
//         <button>
//         <i className="target-icon"/>
//         {children}
//         </button>
//     );
// }

// ReactDOM.render(
//     <IconButton children={<i>Do The Things</i>}/>,
//     document.getElementById('root')
// )


//------------Example-2(b)-----------------//
//---Icon Button
//---italic text inside component


// function IconButton({children}){
//     return(
//         <button>
//         <i className="target-icon"/>
//         <i>{children}</i>
//         </button>
//     );
// }

// ReactDOM.render(
//     <IconButton children={"Do The Things"}/>,
//     document.getElementById('root')
// )


//-------------Different Types of Children-------------//

// function Nav({children}){
//     let items=React.Children.toArray(children);
//     for(let i=items.length-1;i>=1;i--){
//         items.splice(i,0,
//             <span key={i} className="separator">|</span>
//             );
//     }
//     return(
//     <div>{items}</div>
//     );
// }

// ReactDOM.render(
//     <Nav>
//     <NavItem url='/'>Home</NavItem>
//     <NavItem url='/about'>About</NavItem>
//     <NavItem url='/contact'>Contact</NavItem>
//     </Nav>,
//     document.getElementById('root')
// )

//----------------Exercises-------------------//
//1-Make a component to display an “error box” that looks like this:
//Invoking the component should look like this:
        {/* <ErrorBox>
        Something has gone wrong
        </ErrorBox> */}



// function ErrorBox({children}){
//     return(    
//         <button>    
//             <i className="fa fa-car"></i>
//              {children} 
//         </button>
//     );
// }

// ReactDOM.render(
//     <ErrorBox>Something has gone wrong</ErrorBox>,
//     document.getElementById('root')
// );



//1-b
//Use the children prop to place the text properly. The image above uses Bootstrap for styling and
//Font Awesome for the icon. You can add these libraries to your public/index.html file for the
//styling icon if you like, or just make a plain-looking box. It’s more important to get practice with the
//children prop than to get the style perfect.



// function ErrorBox({children}){
//     return(
//         <button>
//             <i className="fa fa-car"></i>
//             {children}            
//         </button>
//     );
// }

// ReactDOM.render(
//     <ErrorBox children={"The world is ending"}/>,
//     document.getElementById('root')
// );

//2. Practice using the React.Children.toArray function with these next few exercises. You can
//   put them all in a single app.


//a) Write a component called AllChildren that accepts any number of children and 
//   renders the All Children.


// function AllChildren({children}){
//     return(
//         <div>
//             {children}
//         </div>       
//     );
// }

// ReactDOM.render(
//     <AllChildren>
//         <p>1st child</p>
//         <p>2nd child</p>
//     </AllChildren>,
//     document.getElementById('root')
// );

//b) Write a component called FirstChildOnly that accepts any number of children but only
//   renders the first.

// function FirstChildOnly({children}){
//     let items = React.Children.toArray(children);
   
//     return(
//         <div>            
//             First Child Only:{items[0]}   
//         </div>       
//     );
// }

// ReactDOM.render(
//     <FirstChildOnly>
//         <p>1st child</p>
//         <p>2nd child</p>
//     </FirstChildOnly>,
//     document.getElementById('root')
// );

//c) Write a component called LastChildOnly that only renders its last child.

// function LastChildOnly({children}){
//     let items = React.Children.toArray(children);
//     return(
//         <div>            
//           Last Child Only: {items[items.length-1]}
//         </div>       
//     );
// }

// ReactDOM.render(
//     <LastChildOnly>
//         <p>1st child</p>
//         <p>2nd child</p>
//         <p>3rd child</p>
//     </LastChildOnly>,
//     document.getElementById('root')
// );


//d) Create a component named Head that takes a number prop, and renders the first [number]
//   children. e.g. If you pass number=3, and 7 child elements, it will render the first 3.


// function Head({number,children}){
//     let items = React.Children.toArray(children);
//     let newItems=[];
//     for(let i=0; i<number; i++)
//     {
//         newItems.push(items[i]);
//     }

//     return(
//         <div>
//               {`First ${number} Head Elements are: `}
//             {newItems}
//         </div>
//     );
// }

// ReactDOM.render(
//     <Head number={3}>
//         <p>child - 1</p>
//         <p>child - 2</p>
//         <p>child - 3</p>
//         <p>child - 4</p>
//         <p>child - 5</p>
//         <p>child - 6</p>
//         <p>child - 7</p>
//     </Head>,
//     document.getElementById('root')
// );

//e) Create a component named Tail that takes a number and renders the last N children.

// function Tail({number,children}){
//     let items = React.Children.toArray(children);
//     let newItems=[];
//     let count=items.length-1;
//     for(let i=0; i<number; i++)
//     {
//         newItems.push(items[count]);
//         count--;
//     }

//     return(
//         <div>
//             {`Last ${number} Tail Elements are: `}
//             {newItems}
//         </div>
//     );
// }

// ReactDOM.render(
//     <Tail number={3}>
//         <p>child - 1</p>
//         <p>child - 2</p>
//         <p>child - 3</p>
//         <p>child - 4</p>
//         <p>child - 5</p>
//         <p>child - 6</p>
//         <p>child - 7</p>
//     </Tail>,
//     document.getElementById('root')
// );


//3- Create a Dialog component which accepts as children Title, Body, and Footer components,
//   all optional. Dialog should verify that all of its children are one of these types, and should
//   output something that looks like this:

function Dialog({children}){
    return(
    <div>{children}</div>
    );
}

// Dialog.propTypes={
//     children: PropTypes.oneOfType([        
//         PropTypes.elementType(Title),
//         PropTypes.elementType(Body)                
//         ])
// }

Dialog.propTypes= {
    children: PropTypes.node
    }

function Title(){
    return(
        <div>Title: This is important</div>
    );
}

function Body(){
    return(
        <div>Body: Here is some important text.</div>
    );
}

function Footer(){
    return(
        <div>Footer: Close</div>
    );
}

ReactDOM.render(
    <Dialog>
        <Title/>
        <Body/>
        <Footer/>
    </Dialog>,
    document.getElementById('root')
);