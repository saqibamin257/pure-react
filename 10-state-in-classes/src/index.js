import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//--------------------Example-1-------------------------------------------//

// // Old fashioned example to keep track of child click.
// // and call function from child to send message upwards child to parent using prop.


// // function handleAction(event){
// //     console.log('child did: ',event);
// // }

// // function Parent(){
// //     return(
// //         <Child onAction={handleAction} />
// //     );    
// // }

// // function Child({onAction}){
// //     return(
// //         <button onClick={onAction}>Click ME!</button>
// //     );    
// // }

// // ReactDOM.render(
// //     <Parent/>,
// //     document.getElementById('root')
// // );

//--------------------Example-2------------------------------------------------------//
//-------------------Create Counter Using State in Class Component-------------------//

// function Child({ onAction,onClick }) {
//     return (
//         <div>
//         <button onClick={onAction}>
//             Click Me!
//         </button>
//         <button onClick={onClick}>
//             Reset
//         </button>
//         </div>
//     );
// }

// class CountingParent extends React.Component {
//     // The constructor is called when a
//     // component is created
//     constructor(props) {
//         super(props);
//         // Set the state here. Use "props" if needed.
//         this.state = {
//             actionCount: 0
//         };
//         // Bind the event handler function, so that its
//         // `this` binding isn't lost when it gets passed
//         // to the button
//         this.handleAction = this.handleAction.bind(this);
//         this.resetCounter = this.resetCounter.bind(this);
//     }
//     handleAction(action) {
//         console.log('Child says', action);
//         // Replace actionCount with an incremented value
//         this.setState({
//             actionCount: this.state.actionCount + 1
//         });
//     }
//--------------Exercice-3  Add reset Counter----------------//.    
//     // resetCounter(){
//     //     this.setState({
//     //         actionCount:0
//     //     });
//     //     console.log('Reset VAlue:',this.state)
//     // }

//----------- show current state value rather than old value
//----------- SetState is Async function which holds old value, in order to get new value
//----------- we need call back function for newest state value in console  


//     resetCounter(){
//         this.setState({actionCount:0},function(){
//             console.log('Reset VAlue:',this.state)
//         });
        
//     }    
//     render() {
//         return (
//             <div>
//                 <Child onAction={this.handleAction} onClick={this.resetCounter} />
//                 <p>Clicked {this.state.actionCount} times</p>
               
//             </div>
//         );
//     }
// }

// // ReactDOM.render(
// //     <CountingParent/>,
// //     document.getElementById('root')
// // )

// //---------------Multiple CountingParent Components------------------//
// // each CountingParent Component will have its own state.

// const Page=() => (
//     <div>
//         <CountingParent/>
//         <CountingParent/>
//         <CountingParent/>
//     </div>
// )

// ReactDOM.render(
//     <Page/>,
//     document.getElementById('root')
// )



//-------------Exercise-4---------------//
//-------------Functional SetState---------------------//
//-------create add count function and call setState 3 times.

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value:0
//         }
//         this.addCount=this.addCount.bind(this);
//     }

//     addCount(){
//         this.setState((state,props)=>{
//             return{
//                 value:state.value+1
//             }
//         });
//         this.setState((state,props)=>{
//             return{
//                 value:state.value+1
//             }
//         });
//         this.setState((state,props)=>{
//             return{
//                 value:state.value+1
//             }
//         });
//         //it will show always previous value as setstate is async
//         //console.log('value:',this.state.value); 
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.addCount}>Add Acounter</button>
//                 <p>Counter:{this.state.value}</p>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Counter/>,
//     document.getElementById('root')
// )

//--------------------Exercise-5------------//
//------------------- class and state without Constructor
//------------------use arrow function, no need to bind in constructor

// const Child=({onAction})=>{
//     return(
//         <button onClick={onAction}>Click Me!</button>
//     )

// }
// class CountingParent extends React.Component{
//     state={
//         actionCount:0
//     };

//     handleAction = (action) => {
//         console.log('Child says', action);
//         this.setState({
//             actionCount:this.state.actionCount+1
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <Child onAction={this.handleAction}/>
//                 <p>Clicked {this.state.actionCount} Times</p>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <CountingParent/>,
//     document.getElementById('root')
// )


//-------------------------Exercise---------------------//
//Create a component called House to model a home with 4 rooms, each with its own light and
//lightswitch. Use state to keep track of whether each light is on or off. Add 4 buttons to represent
//the lightswitches, and flip the respective light on or off when the buttons are clicked. Use this
//initial state:
// state = {
//     kitchen: true,
//     bathroom: false,
//     livingRoom: true,
//     bedroom: false
//     }

//----------------------solution---------------------------//
//  class House extends React.Component{
//      state={
//         kitchen: true,
//         bathroom: false,
//         livingRoom: true,
//         bedroom: false
//      }
     
     
//      kitchenSwitch=()=>{                         
//          this.setState({
//              kitchen:!this.state.kitchen
//          });
//      }
//      bathroomSwitch=()=>{                         
//         this.setState({
//             bathroom:!this.state.bathroom
//         });
//     }
//     livingRoomSwitch=()=>{                         
//         this.setState({
//             livingRoom:!this.state.livingRoom
//         });
//     }
//     bedroomSwitch=()=>{                         
//         this.setState({
//             bedroom:!this.state.bedroom
//         });
//     }

//      render(){
//          console.log('kitchen:',this.state.kitchen);
//         const brightness_kitchen= this.state.kitchen?'lit':'dark';
//         const brightness_bathroom= this.state.bathroom?'lit':'dark';
//         const brightness_bedroom= this.state.bedroom?'lit':'dark';
//         const brightness_livingroom= this.state.livingRoom?'lit':'dark';
//          return(
//              <div>
//                   <div className={`${brightness_kitchen}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }} >
//                      <button onClick={this.kitchenSwitch}>Kitchen-Switch</button>
//                     <p>Kitchen is : {brightness_kitchen}</p>
//                  </div>
//                  <div className={`${brightness_bathroom}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>
//                      <button onClick={this.bathroomSwitch}>Bathroom-Switch</button>
//                      <p>Bathroom is : {brightness_bathroom}</p>
//                  </div>
//                  <div className={`${brightness_livingroom}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>
//                      <button onClick={this.livingRoomSwitch}> Livingroom-Switch </button>
//                      <p>LivingRoom is : {brightness_livingroom}</p>
//                  </div>
//                  <div className={`${brightness_bedroom}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>
//                      <button onClick={this.bedroomSwitch}>Bedroom-Switch</button>
//                      <p>BedRoom is : {brightness_bedroom}</p>
//                  </div>
                 
//              </div>
//          );
//      }
//  }
//  ReactDOM.render(
//      <House/>,
//      document.getElementById('root')
//  )


//-------------------------Exercise---------------------//
// Change the House component initial state to look like this, with state nested under the rooms
// key. Update the rest of the component accordingly.
// state = {
//     rooms: {
//     kitchen: true,
//     bathroom: false,
//     livingRoom: true,
//     bedroom: false
//     }
//     }

//----------------------solution---------------------------//

class House extends React.Component{
    state={
        room:{
        kitchen: true,
        bathroom: false,
        livingRoom: true,
        bedroom: false
        }       
    }    
    
    kitchenSwitch=()=>{                             
        this.setState({           
                kitchen: !this.state.kitchen   
        });
    }
    bathroomSwitch=()=>{                         
       this.setState({
           bathroom:!this.state.bathroom
       });
   }
   livingRoomSwitch=()=>{                         
       this.setState({
           livingRoom:!this.state.livingRoom
       });
   }
   bedroomSwitch=()=>{                         
       this.setState({
           bedroom:!this.state.bedroom
       });
   }

    render(){
      
       const brightness_kitchen= this.state.kitchen?'lit':'dark';
       const brightness_bathroom= this.state.bathroom?'lit':'dark';
       const brightness_bedroom= this.state.bedroom?'lit':'dark';
       const brightness_livingroom= this.state.livingRoom?'lit':'dark';
        return(
            <div>
                 <div className={`${brightness_kitchen}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }} >
                    <button onClick={this.kitchenSwitch}>Kitchen-Switch</button>
                   <p>Kitchen is : {brightness_kitchen}</p>
                </div>
                <div className={`${brightness_bathroom}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>
                    <button onClick={this.bathroomSwitch}>Bathroom-Switch</button>
                    <p>Bathroom is : {brightness_bathroom}</p>
                </div>
                <div className={`${brightness_livingroom}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>
                    <button onClick={this.livingRoomSwitch}> Livingroom-Switch </button>
                    <p>LivingRoom is : {brightness_livingroom}</p>
                </div>
                <div className={`${brightness_bedroom}`} style = {{border:"2px solid purple",width : 150, height : 150, marginTop : 50, marginBottom : 50  }}>
                    <button onClick={this.bedroomSwitch}>Bedroom-Switch</button>
                    <p>BedRoom is : {brightness_bedroom}</p>
                </div>
                
            </div>
        );
    }
}
ReactDOM.render(
    <House/>,
    document.getElementById('root')
)
