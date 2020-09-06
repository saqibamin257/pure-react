import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//---------------------Exercise -1----------------//
//class component with state

// class OneTimeButton extends React.Component{
//     state={
//         clicked:false
//     }

//     handleClick=()=>{
//         // The handler won't be called if the button
//         // is disabled, so if we got here, it's safe
//         // to trigger the click.
//         this.props.onClick();
//         //ok no more clicking.
//         this.setState({clicked:true});
//     }

//     render(){
//         return(
//             <button
//              onClick={this.handleClick}
//              disabled={this.state.clicked}             
//             >
//                 You Can Only Click Me Once
//             </button>
//         );
//     }
// }
// ReactDOM.render(
// <OneTimeButton onClick={()=>alert("hi")}/>,
// document.getElementById('root')
// );


//-------------------------Exercise-2-----------------------//
//----------Functional Component

// function OneTimeButton({onClick}){
//     const[clicked,setClicked]=React.useState(false);

//     const handleClick=()=>{
//         //call function which is passed as props onclick
//         onClick();
//         //ok no more clicking
//         setClicked(true);
//     }
//     return(
//         <button
//         onClick={handleClick}
//         disabled={clicked}        
//         >
//             You Can Click Me Only Once
//         </button>
//     );

// }

// ReactDOM.render(
// <OneTimeButton onClick={()=>alert("hi")}/>,
// document.getElementById('root')
// );


//----------------------------------Exercise-3---------------------//
//-----------------------------------step tracker--------------------------//
//Every time you take a step, simply
//click the button. At the end of the day, it will tell you how many steps you took

// function StepTracker(){
//     const[steps,setSteps]=useState(0);

//     function increment(){
//         setSteps(steps => steps+1);
//     }
//     return(
//     <div>
//         Today you have taken {steps} steps!
//         <br/>
//         <button onClick={increment}>I took another step</button>
//     </div>
//     );
// }
// ReactDOM.render(
//     <StepTracker/>,
//     document.getElementById('root')
// );

//----------------------------Exercise-4----------------------------//
//-----------------State as an Array-------------------------//
//example of a list of random numbers.Clicking the button adds a new random number to the list

// function RandomList(){
//     const [items,setItems]=useState([]);
    
//     const addItem=()=>{
//         setItems([
//             ...items,
//             {
//                 id:items.length,
//                 value:Math.random() * 100
//             }
//         ]);
//     };
//     return(
//         <>
//         <button onClick={addItem}>
//             Add a number
//         </button>
//         <ul>
//             {items.map((items) => (
//             <li key={items.id}>{items.value}</li>               
//              ))}
//         </ul>
//         </>
//     );
// }

// ReactDOM.render(
//     <RandomList/>,
//     document.getElementById('root')
// )


//----------------------------Exercise-5----------------------------//
//-------------------------State as an Object------------------------//

// const MultiCounter= () => {
    
//     const[counts,setCount]=useState({
//         countA:0,
//         countB:0
//     });

//     const incA = () => {
//         return(
//             setCount(counts => ({
//                 ...counts,
//                 countA:counts.countA + 1
//             }))
//         );
//     }

//     const incB=()=>{
//         return(
//             setCount(counts => ({
//                 ...counts,
//                 countB:counts.countB + 1
//             }))
//         );
//     }

//     const badIncA=()=>{
//         return(
//            setCount({
//                countA:counts.countA+1
//            })
//         );
//     }

//     return(
//         <>
//         <div>A:{counts.countA}</div>
//         <div>B:{counts.countB}</div>
//         <button onClick={incA}>Increment A</button>
//         <button onClick={incB}>Increment B</button>
//         <button onClick={badIncA}>Bad Increment A</button>
//         </>
//     );
// }

// ReactDOM.render(
//     <MultiCounter/>,
//     document.getElementById('root')
// )

//-------------------------Book Exercises----------------------//

//1. Create a Room component with a “lightswitch” button and some text describing “The room is
//lit” or “The room is dark”. Clicking the button should toggle the light on and off, and update
//the text. Use the useState hook to store the lightswitch state.

// const Room = () =>{
//     const[isLit,setLit] = useState(false);

//     const lightSwitch = () => {
//         setLit(!isLit);
//     }
//     const brightness=isLit?'lit':'dark';

       

//     return(              
//         <>
               
//         <button onClick={lightSwitch}>lightSwitch</button>
//         <div className={ `room ${brightness}` } >
//             {isLit?'lit':'dark' }
//         </div>
//         </>
//     );
// }
// ReactDOM.render(
// <Room/>,
// document.getElementById('root')
// );

//---------------------------------Exeercise-2-------------------------------------------------//
//2. Create a RandomList component that shows a button, and a list of random numbers. When
//   you click the button, add another random number to the list. Store the array of numbers with
//   useState. The initial state should be an empty array.

// const RandomList=()=>{
//     const[list,setList] = useState([]);
    
//     const addItem = () =>{
//         setList([
//             ...list,
//             {
//                 id:list.length,
//                 value:Math.random()*100
//             }
//         ]);
//     }

//     return(
//         <>
//         <button onClick={addItem}>Random Number</button>
//         <div>
//             <ul>
//             {list.map( (randomList) => (
//                 <li id={randomList.id} > {randomList.value} </li>
//             ))}
//             </ul>
//         </div>
//         </>
//     );
// }
// ReactDOM.render(
//     <RandomList/>,
//     document.getElementById('root')
// );

//---------------------------------Exercise-3(a)-------------------------------------------------//
//3(a). Create a component called AudioControls with 4 pieces of state: “volume”, “bass”, “mid,
//   and”treble”, each storing a value between 1 and 100. The app should look something like this:
//           -    89     +
//              VOLUME  

//           -    100     +
//              TREBBLE  

//           -    25     +
//                MIX

//           -    57     +
//               BASS  
// Display each value along with a label and a pair of +/- buttons for increasing and decreasing the value.
//store the values in their own individual useState variables.

// const AudioControls=()=>{
//     const[volume,setVolume]=useState(10);
//     const[trebble,setTrebble]=useState(20);
//     const[mix,setMix]=useState(30);
//     const[bass,setBass]=useState(40);

//     const volumeHigh=()=>{
//         setVolume(
//             volume=>volume+1
//         );
//     }

//     const volumeLow=()=>{
//         setVolume(
//             volume => volume-1
//         );
//     }

//     const trebbleHigh=()=>{
//         setTrebble(
//             trebble => trebble+1
//         );
//     }

//     const trebbleLow=()=>{
//         setTrebble(
//             trebble => trebble-1
//         );
//     }

//     const mixHigh=()=>{
//         setMix(
//             mix => mix+1
//             );
//     }

//     const mixLow=()=>{
//         setMix(
//             mix => mix-1
//             );
//     }

//     const bassHigh=()=>{
//         setBass(
//             bass => bass+1
//         );
//     }

//     const bassLow=()=>{
//         setBass(
//             bass => bass-1
//         );
//     }




//     return(
//         <div>
            
//             <div className="volume">
//                 <button onClick={volumeLow}>-</button>
//                 <span> {volume} </span>
//                 <button onClick={volumeHigh}>+</button>
//                 <p style={{paddingLeft:10}}>Volume</p>
//             </div>

//             <div className="trebble">
//                 <button onClick={trebbleLow}>-</button>
//                 <span> {trebble} </span>
//                 <button onClick={trebbleHigh}>+</button>
//                 <p style={{paddingLeft:10}}>Trebble</p>
//             </div>

//             <div className="mix">
//                 <button onClick={mixHigh}>-</button>
//                 <span> {mix} </span>
//                 <button onClick={mixLow}>+</button>
//                 <p style={{paddingLeft:18}}>Mix</p>
//             </div>

//             <div className="bass">
//                 <button onClick={bassHigh}>-</button>
//                 <span> {bass} </span>
//                 <button onClick={bassLow}>+</button>
//                 <p style={{paddingLeft:15}}>Bass</p>
//             </div>



//         </div>
//     );
// }

// ReactDOM.render(
//     <AudioControls/>,
//     document.getElementById('root')
// );

//---------------------------------Exercise 3(b)--------------------------------------//
//In the second, store the values together in one state variable, an object that looks
//like this:

// {
//     volume: <number>,
//     bass: <number>,
//     mid: <number>,
//     treble: <number>
// }


const AudioControls=() => {
    const[audio,setAudio]=useState(
        {
           volume: 10,
           bass: 20,
           mix: 30,
           treble: 40
        });

    const volumeHigh=()=>{
        setAudio(audio =>({
            ...audio,
            volume:audio.volume+1
        })            
        );
    }

    const volumeLow=()=>{
        setAudio(audio => ({
            ...audio,
            volume:audio.volume-1
           })
        );
    }

    const trebbleHigh=()=>{
        setAudio(audio =>({
            ...audio,
            treble:audio.treble+1
        }));
    }

    const trebbleLow=()=>{
        setAudio(audio =>({
            ...audio,
            treble:audio.treble-1
        }));
    }

    const mixHigh=()=>{
        setAudio( audio =>({
            ...audio,
            mix:audio.mix+1
        }));
    }

    const mixLow=()=>{
        setAudio( audio =>({
            ...audio,
            mix:audio.mix-1
        }));
    }

    const bassHigh=()=>{
        setAudio(audio =>({
            ...audio,
            bass: audio.bass+1
        }));
    }

    const bassLow=()=>{
        setAudio(audio =>({
            ...audio,
            bass: audio.bass-1
        }));
    }
    return(
        <div>
            
            <div className="volume">
                <button onClick={volumeLow}>-</button>
                <span> {audio.volume} </span>
                <button onClick={volumeHigh}>+</button>
                <p style={{paddingLeft:10}}>Volume</p>
            </div>

            <div className="trebble">
                <button onClick={trebbleLow}>-</button>
                <span> {audio.treble} </span>
                <button onClick={trebbleHigh}>+</button>
                <p style={{paddingLeft:10}}>Trebble</p>
            </div>

            <div className="mix">
                <button onClick={mixLow}>-</button>
                <span> {audio.mix} </span>
                <button onClick={mixHigh}>+</button>
                <p style={{paddingLeft:18}}>Mix</p>
            </div>

            <div className="bass">
                <button onClick={bassLow}>-</button>
                <span> {audio.bass} </span>
                <button onClick={bassHigh}>+</button>
                <p style={{paddingLeft:15}}>Bass</p>
            </div>
            
        </div>
    );
}

ReactDOM.render(
    <AudioControls/>,
    document.getElementById('root')
);

