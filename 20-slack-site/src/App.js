import React,{useState} from 'react';
import Categories from './Categories';
import ChatBox from './ChatBox';
import {slackData} from './static-data';
import  './App.css';


const App = () =>{
    const[categoryName,setCategoryName] = useState("People");
    const[ID,setID]=useState(0);
    //const[Chat,setChat] = useState(slackData);
    
    
  const MessageDetails = (Msg_ID,Msg_Category) =>{                    
        //console.log(`ID: ${Msg_ID} Category: ${Msg_Category}`);
        setCategoryName(Msg_Category);
        setID(Msg_ID);
  };


    return(
        <div>
            <div className="categories">
                <Categories  channel={slackData.Channel} people={slackData.People} getMessageDetails={MessageDetails}   />
            </div>

            <div className="chatbox">
                <ChatBox categoryName={categoryName} ID={ID}  Chat={slackData}  />
            </div>
        </div>
    );
}
export default App;