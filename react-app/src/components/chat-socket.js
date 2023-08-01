import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from 'socket.io-client';
import { thunkGetAllMsg } from "../store/messages";
import { useParams } from 'react-router-dom'
let socket;

const Chat = ({channelId}) => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const { serverId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let msgs = useSelector(state => state.messages.allMessages)
    // let msg_arr;

    // const channelId = 1

    // console.log(socket)

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        dispatch(thunkGetAllMsg(user.id, channelId,serverId))

        socket.on("chat", (chat) => {
            let old_msg = dispatch(thunkGetAllMsg(user.id, channelId,serverId))
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
                        <div key={msg.id}>{msg.content}</div>
                    )
                })}
            </div>
            <div>
                {msg_arr.length?msg_arr[0].emoji:'trddddd'}
                {messages.map((message) => (
                    <div>
                        <div key={message.id}>{`${message.user}: ${message.content}`}</div>
                        </div>
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
