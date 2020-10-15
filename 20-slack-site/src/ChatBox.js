import React, { useRef, useState } from 'react';



const ChatBox = ({ ID, categoryName, Chat }) => {
    // console.log(`ID: ${ID} Category: ${categoryName}`)
    const [ChatData, setChatData] = useState(Chat);
    const inputRef = useRef();


    const AddMessage = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = '';
    }



    let Msg = "";
    if (categoryName === "Channel") {
        Msg = ChatData.Channel.filter(msg => msg.ID === ID);
    }
    else {
        Msg = ChatData.People.filter(msg => msg.ID === ID);
    }
    //console.log('Chat-Data:', Msg);

    return (
        <div>
            <h2>Chat</h2>
            <form onSubmit={AddMessage}>
                {Msg.map((MsgHistory) => (
                    <div key={MsgHistory.ID}>
                        <div>
                            <h2>{MsgHistory.Name}</h2>
                        </div>
                        <div className="MsgData">
                            {MsgHistory.Data.map((MsgList) => (
                                <div key={MsgList.id}>
                                    <div><b>{MsgList.Name}</b> <span>{MsgList.Date}</span></div>
                                    <p>{MsgList.Message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <input type="text" placeholder="write your message and press Enter!" ref={inputRef} ></input>
            </form>
        </div>
    );
}

export default ChatBox; 