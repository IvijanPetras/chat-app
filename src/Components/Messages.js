import React,  { useEffect, useRef } from 'react';

function Messages(props){
    const messageContainer = props.messages;
    const activeUser = props.member.id;
    const messageScroll = useRef();

    useEffect(() => {
        if(messageScroll.current) {
            messageScroll.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                }
            )
        }
    }, [messageContainer])

    function showMessages(messages){
         
        const {data, id, member} = messages;
        const myMessage = member.clientData.id === activeUser;
        const messageStyle = myMessage ? "My-message" : "Recived-message"

        return(
            <div className={messageStyle}  key={id} ref={messageScroll}>
                <div className="Username">{member.clientData.name}</div> 
                 <li >{data}             
                </li>
            </div>
        );

    }

    
  
    return(
        <div>
            <ul>{messageContainer.map(m => showMessages(m))}</ul>
        </div>
    );
   
}



export default Messages;

