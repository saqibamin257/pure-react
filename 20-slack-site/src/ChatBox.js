import React from 'react';



const ChatBox = ({ID,categoryName,ChatData}) => {
   // console.log(`ID: ${ID} Category: ${categoryName}`)
    
    let Msg="";
    if(categoryName === "Channel"){
        Msg = ChatData.Channel.filter(msg => msg.ID === ID);
    }
    else{
        Msg = ChatData.People.filter(msg => msg.ID === ID);
    }        
    //console.log('Chat-Data:', Msg);

    return(
        <div>
           <h2>Chat</h2>
           <div>
            {Msg.map( (MsgHistory)=>(
                    <div key={MsgHistory.ID}>
                        <div>
                            <h2>{MsgHistory.Name}</h2>                        
                        </div>
                        <div className="MsgData">
                            {MsgHistory.Data.map( (MsgList) => (
                               <div key={MsgList.id}>
                                 <div><b>{MsgList.Name}</b> <span>{MsgList.Date}</span></div>
                                 <p>{MsgList.Message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}            
            </div> 
        </div>
    );
}

export default ChatBox; 