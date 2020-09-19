import React,{useEffect,useState,useRef} from 'react';
import ReactDOM from 'react-dom';

//---------------------Example-1--------------------//
// useEffect runs after initial render and after each render.
// you will notice it shows initially empty string and then anything you type input later on.

// const LogEffect = () => {
    
//     const [text,setText] = useState('');    

//     useEffect( ()=>{
//         console.log('latest value:',text);
//     });

//     return(
//         <>
//         <input value={text}
//         onChange = {e => setText(e.target.value)}
//         />       
//         </>
//     );
// }; 

//  ReactDOM.render(
//      <LogEffect/>,
//      document.getElementById('root')
//  );


 //---------------------------Example-2------------------------------//
//This one says, “As soon as the user enters the right passcode, then show the secret”
//use  if(passcode === '1234') condition inside useEffect.
//Notice how that code will continue to show the secret even if the user changes the passcode

// const LogEffect = () => {    

//     const [showSecret,setShowSecret]=useState(false);
//     const [passcode,setPassCode]=useState('');

  
//     useEffect(()=>{
//         if(passcode === '1234'){
//             setShowSecret(true);
//         }
//     }, [passcode]); 
 
//     return(
//         <>
//         <input value={passcode}
//         onChange = {e => setPassCode(e.target.value)}
//         />
//         <h3>{showSecret? 'unlocked':'locked'}</h3>
//         </>
//     );
// }; 

//  ReactDOM.render(
//      <LogEffect/>,
//      document.getElementById('root')
//  );


 //---------------------------Example-3------------------------------//
//Hide the secret if they changed the passcode from “1234” to anything else.


// const LogEffect = () => {

//     const [showSecret,setShowSecret]=useState(false);
//     const [passcode,setPassCode]=useState('');
  
//     useEffect(()=>{
//         {
//             setShowSecret(passcode === '1234');
//         }
//     }, [passcode]);
 
//     return(
//         <>
//         <input value={passcode}
//         onChange = {e => setPassCode(e.target.value)}
//         />
//         <h3>{showSecret? 'unlocked':'locked'}</h3>
//         </>
//     );
// }; 

//  ReactDOM.render(
//      <LogEffect/>,
//      document.getElementById('root')
//  );

 //---------------------------Example-4------------------------------//
//If the username changes, then save it to localStorage

// const LogEffect =()=>{
//     const[userName,setUserName] = useState('');

//     useEffect( () => {
//         localStorage.setItem('userName',userName);
//     }, [userName]);

//     return(
//         <>
//         <input value = {userName}
//         onChange={ e => setUserName(e.target.value) }
//         />
//         <p>{localStorage.getItem('userName')}</p>
//         </>
//     );
// };
// ReactDOM.render(
//     <LogEffect/>,
//     document.getElementById('root')
// );

//---------------------------Example-5------------------------------//
//------------Focusing an Input Automatically------------------//
// how you can focus an input control upon first render, using useEffect combined with
// the useRef hook.
// it means cursor will automatically be blinking after intial render and after every input change.



// function App(){
//     //store a reference to the input's DOM node.
//     const inputRef = useRef();

//     //store the input's value in state.
//     const [value,setvalue]=useState("");

//     useEffect(() => {
//         // This runs AFTER the first render,
//         // so the ref is already set.
//         console.log("render");
//         inputRef.current.focus();        
//     }, 
//     //The effect "depends on" inputRef
//     [inputRef]
//     );
//     return(
//         <input
//         ref={inputRef}
//         value={value}
//         onChange = {e => setvalue(e.target.value) }
//         />
//     );

// };

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );


//-------------Example-6-----------------//
//if you pass no array, then you’re telling useEffect to run every render. What if you pass
//an empty array []?

// const LogEffect =()=>{
//     useEffect(() => {
//         console.log('Mounting');
//         return () => {
//             console.log('unmount');
//         }
//     }, [])

//     return(
//         <>
//         <input/>
//         </>
//     );
// };

// ReactDOM.render(
//     <LogEffect/>,
//     document.getElementById('root')
// );

//------------------------------Example-7---------------------------//
//--------------------Fetch Data With useEffect -----------------//

// function Reddit(){
//     //Initialize state to hold the posts
//     const[posts,setPosts] = useState([]);

//     useEffect(() => {
//         //Fetch the data when the component mounts
//         fetch("https://www.reddit.com/r/reactjs.json")
//         .then(res => res.json())
//         .then(json =>
//             //Save the posts into State
//             setPosts(json.data.children.map(c => c.data))
//             )
//     }); // <----we didn't pass the 2nd arg. what will happen?---->

//     //Render as usual
//     return(
//         <ul>
//             {posts.map( (post)=>(
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     );
// }

// ReactDOM.render(
//     <Reddit/>,
//     document.getElementById('root')
// );



//-----------------------ISSUE----------------------------//
// In Above example
// Passing no 2nd argument causes the useEffect to run every render. Then, when it runs, it fetches the
// data and later updates the state. Once the state is updated, the component re-renders, which triggers
// the useEffect again. You can see the problem: we’re going to end up with an infinite loop!


//----------------------Example-8--------------------------//
//---------------Re-fetch When Data Changes----------------//
// Let’s expand on the example to cover another common problem: how to re-fetch data when something
// changes, like a user ID, or in this case, the name of the subreddit.

// First we’ll change the Reddit component to accept the subreddit as a prop, fetch the data based on
// that subreddit, and only re-run the effect when the prop changes:

// function Reddit({subreddit}){
//     const[posts,setPosts] = useState([]);

//     useEffect(() => {
//         //fetch data when the component mounts
//         fetch(
//             `https://www.reddit.com/r/${subreddit}.json`
//         )
//         .then(res=>res.json())
//         .then(json =>
//             //Save the posts into state
//             setPosts(json.data.children.map(c=>c.data))
//             )       
//     }, [subreddit,setPosts]);
    
//     return(
//         <ul>
//             {posts.map( (post) => ( 
//             <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     );
// }

// // 4. Pass "reactjs" as a prop:
// // ReactDOM.render(
// //     <Reddit subreddit='reactjs' />,
// //     document.querySelector("#root")
// //     );


// function App(){
//     // 2 pieces of state: one to hold the input value,
//     // another to hold the current subreddit.    
//     const[inputValue,setInputValue] = useState("reactjs");
//     const[subreddit,setSubreddit] = useState(inputValue);

//     //Update the subreddit when the user presses enter
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setSubreddit(inputValue);
//     };
//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <input
//             value={inputValue}
//             onChange={e => setInputValue(e.target.value)}
//             />
//         </form>
//         <Reddit subreddit={subreddit}/>        
//         </>
//     );
// }
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );



//-------------------Book Exercise-1--------------------//
//1-Render an input box and store its value with useState. Then set the document.title in an
//effect, keeping the page’s title in sync with the input.


const Title =()=>{
const inputRef = useRef();
const[value,SetValue] = useState("");


//note document title will change , see on browser tab.
useEffect( () => {
    document.title=value;
    return () => {
        document.removeEventListener("click",function(){});
    } 
}, [value])



document.addEventListener("click",function(){
    alert("value");
});


return(
    <>
    <input
    ref={inputRef}
    value={value}    
    onChange = {e => SetValue(e.target.value)}
    />   
    </>
);
};

ReactDOM.render(
    <Title/>,
    document.getElementById('root')
);

// 2. Add a click handler to the document, and print a message every time the user clicks. (don’t
//     forget to clean up the handler!)



