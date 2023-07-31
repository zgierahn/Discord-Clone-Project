import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from 'socket.io-client';
import { thunkGetAllMsg } from "../store/messages";
let socket;

const Chat = ({channelId}) => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let msgs = useSelector(state => state.messages.allMessages)
    // let msg_arr;

    // const channelId = 1

    console.log(socket)

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        dispatch(thunkGetAllMsg(user.id, channelId))

        socket.on("chat", (chat) => {
            let old_msg = dispatch(thunkGetAllMsg(user.id, channelId))
            old_msg = Object.values(old_msg)

            setMessages(messages => [...old_msg])
            console.log(messages)
        })
        // when component unmounts, disconnect
        return (() => {
            console.log('disconnected')
            socket.disconnect()
        })
    }, [])


    if(msgs === undefined){
        return <>hi</>
    }

    let msg_arr = Object.values(msgs)
    console.log(msg_arr)


    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault()
        socket.emit("chat", {user: user.username, user_id: user.id, content: chatInput, channel_Id: channelId });
        setChatInput("")
    }

    return (user && (
        <div>
            <div>
                {msg_arr.map((msg) => {
                    return (
                        <div>{msg.content}</div>
                    )
                })}
            </div>
            <div>
                {messages.map((message, ind) => (
                    <div key={ind}>{`${message.user}: ${message.content}`}</div>
                ))}
            </div>
            <form onSubmit={sendChat}>
                <input
                    value={chatInput}
                    onChange={updateChatInput}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
    )
};


export default Chat;
