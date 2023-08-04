import './chatCss.css'
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from 'socket.io-client';
import { thunkGetAllMsg } from "../store/messages";
import { useParams, useHistory } from 'react-router-dom'
import DeleteMsg from "./DeleteMessages/deleteMsg";
import CreateReaction from "./CreateReaction";
import DeleteReaction from "./DeleteReaction";
import Servers from './Servers';
import Channels from './Channels';
import ChannelTest from './channel-socket';

let socket;


const Chat = ({ buttonStatus }) => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const {channelId} = useParams()
    // const [button, setButton] = useState(false)
    // const { serverId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let msgs = useSelector(state => state.messages.allMessages)


    const messagesEndRef = useRef(null)


    useEffect(()=> {
        messagesEndRef.current?.scrollIntoView()
    },[messages])

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
    }, [channelId])


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



    return (user && (
        <>
        <div className="ChatContainer">
            <div className="ChatBox" >
                <div className='ChatMessagesContainer' >
                {msg_arr.map((msg) => {
                    return (
                        <div className='CreateReadDelete-ForMsgAndEmoji'>

                            <div className='Msg-Emoji-Container'>
                            <div key={msg.id} value={msg.id} >{msg.username.username}: {msg.content}</div>

                            <div className='EachEmojiContainer'> {Object.values(msg.emoji_count).length ? Object.keys(msg.emoji_count).map(each => (
                                <div className='EachEmojiContainer'>{each} {msg.emoji_count[each]} {msg.reactions.map((react) => {
                                    return react.emoji === each && react.user_id === user.id ? <DeleteReaction userId={user.id} channelId={channelId} reactionId={react.id}/> : null
                                })  } </div>
                            )) : null} </div>

                            </div>

                            {msg.user_id === user.id ? <DeleteMsg msgId={msg.id} /> : null}
                            <CreateReaction messageId={msg.id} channelId={channelId}/>
                        </div>

                    )
                })
                }
                <div ref={messagesEndRef}></div>
                </div>
            </div>
            {/* keep for reference PLEASE */}
            {/* {messages.map((message) => (
                <div>
                    <div key={message.id}>{`${message.user}: ${message.content}`}</div>
                    </div>
            ))} */}
            <form className='ChatInputContainer' onSubmit={sendChat}>
                <input
                    value={chatInput}
                    onChange={updateChatInput}
                    placeholder='Message'
                />
                {/* <button type="submit">Send</button> */}
            </form>
        </div>
        </>
    )
    )
};


export default Chat;
