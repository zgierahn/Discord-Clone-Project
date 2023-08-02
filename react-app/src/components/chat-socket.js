import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from 'socket.io-client';
import { thunkGetAllMsg } from "../store/messages";
import { useParams } from 'react-router-dom'
import DeleteMsg from "./DeleteMessages/deleteMsg";
import CreateReaction from "./CreateReaction";
let socket;

const Chat = ({ channelId }) => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    // const { serverId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let msgs = useSelector(state => state.messages.allMessages)


    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        dispatch(thunkGetAllMsg(user.id, channelId))


        socket.on("chat", (chat) => {
            let old_msg = dispatch(thunkGetAllMsg(user.id, channelId))
            old_msg = Object.values(old_msg)
            setMessages(messages => [...old_msg])
            // console.log(messages, '--------------')
        })
        // when component unmounts, disconnect
        return (() => {
            console.log('disconnected')
            socket.disconnect()
        })
    }, [])


    if (Object.values(msgs) == undefined) {
        return <></>
    }

    let msg_arr = Object.values(msgs)


    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault()
        socket.emit("chat", { user: user.username, user_id: user.id, content: chatInput, channel_Id: channelId });
        setChatInput("")
    }


    const loopThruFunc = (arr) => {
        arr.map(react => {
            console.log(react)
            return react.emoji
        })
    }


    return (user && (
        <div>
            <div>
                {/* {msg_arr.length?msg_arr[0].emoji:'trddddd'} */}
                {msg_arr.map((msg) => {
                    return (
                        <>
                            <div key={msg.id}value={msg.id}>{msg.content}</div>
                            {msg.reactions.length ? <div>{msg.reactions.map(each => (
                                <div>{each.emoji}</div>
                            ))}</div> : null}
                            {msg.user_id === user.id ? <DeleteMsg msgId={msg.id} /> : null}
                            <CreateReaction messageId={msg.id} channelId={channelId}/>
                        </>

                    )
                })}
            </div>
            {/* keep for reference PLEASE */}
            {/* {messages.map((message) => (
                <div>
                    <div key={message.id}>{`${message.user}: ${message.content}`}</div>
                    </div>
            ))} */}
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
