import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
let socket;



const ChannelTest = () => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [channelName, setChannelName] = useState('')
    const user = useSelector(state => state.session.user)


    const handleSubmit = () => {
        socket.on("join", channelName)

    }



    return (user && (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                className=''
                placeholder='Name of Channel'
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                type="text"
                />
                <button>Submit</button>
            </form>
        </div>
    ))

}





export default ChannelTest;
