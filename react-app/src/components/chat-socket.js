import './chatCss.css'
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from 'socket.io-client';
import { thunkDeleteReaction, thunkGetAllMsg } from "../store/messages";
import { thunkGetSingleChannel } from '../store/channels';
import { useParams, useHistory } from 'react-router-dom'
import DeleteMsg from "./DeleteMessages/deleteMsg";
import CreateReaction from "./CreateReaction";
import hashtag from "../images/hashtag.png"
import DeleteReaction from "./DeleteReaction";
import Servers from './Servers';
import Channels from './Channels';
import ChannelTest from './channel-socket';

let socket;


const Chat = () => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const { channelId } = useParams()
    // const { serverId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [reactValue, setReactValue] = useState('')
    const [userReactValue, setUserReactValue] = useState('')
    const [clicked, setClicked] = useState(false);
    const [messageValue, setMessageValue] = useState('');
    const [messageUserId, setMessageUserId] = useState('');
    const [points, setPoints] = useState({
        x: 0,
        y: 0,
    });

    let msgs = useSelector(state => state.messages.allMessages)


    let channel = useSelector(state => state.channels.singleChannel)



    const messagesEndRef = useRef(null)

    const helperForToolKit = () => {
        if(window.innerHeight - points.y < 200 ){
            setPoints({
                x: points.x ,
                y: points.y - 200
            })
        }

    }


    const helperDeleteReact = async() => {
        await dispatch(thunkDeleteReaction(user.id,channelId, reactValue))
    }

    useEffect(()=>{
        if(userReactValue){
            helperDeleteReact()
        }
    },[reactValue])


    useEffect(()=> {
        helperForToolKit()
    }, [points.x, points.y])


    useEffect(() => {
        const handleClick = () => setClicked(false);
        window.addEventListener("click", handleClick);

        return () => { window.removeEventListener("click", handleClick) };
    }, []);

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        dispatch(thunkGetAllMsg(user.id, channelId))
        dispatch(thunkGetSingleChannel(channelId))

        socket.on("chat", (chat) => {
            let old_msg = dispatch(thunkGetAllMsg(user.id, channelId))
            old_msg = Object.values(old_msg)
            setMessages(messages => [...old_msg])
        })

        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [channelId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView()//POSSIBLE FIX USE MSGARRLENGTH SO WHEN ADDING REACTION TO TOP MESSAGE IT DEOSNT AUTO SCROLL DOWN
    }, [messages,Object.values(msgs).length])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView()
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


    return (user && (
        <>
            <div className="ChatContainer">
                <div className='ChatBoxHeader'>
                    <h4 className='channelNameInHeader'><img className="headerChannelHashtag" src={hashtag}/> {channel.name}</h4>
                </div>
                <div className="ChatBox" >
                    <div className='ChatMessagesContainer' >
                        {msg_arr.map((msg) => {

                            // {console.log('index of message current',msg_arr.indexOf(msg))}
                            // {console.log('index of message previous',msg_arr[msg_arr.indexOf(msg)-1]?.username.id)}
                            return (
                                <div className='CreateReadDelete-ForMsgAndEmoji' >
                                <div value={msg.id} className='Msg-Emoji-Container'
                                    onContextMenu={(e) => {
                                    e.preventDefault();
                                    // {console.log(msg.id, 'heloooooo')}
                                    setMessageValue(msg.id)
                                    setMessageUserId(msg.user_id)
                                    setClicked(true);
                                    setPoints({ x: e.pageX, y: e.pageY });
                                    helperForToolKit() }}>
                                <div className='divholdingprofileimageandmessage' key={msg.id} value={msg.id} >
                                    {/* {msg.username.id === msg_arr[msg_arr.length-1].username.id && <div>{<img className='profileimageinchatboxmessages' src={`${msg.username.userPhoto}`}></img>}
                                    </div>} */}
                                    <div className='divholdingprofileimageinchatbox'>{(msg.username.id !==msg_arr[msg_arr.indexOf(msg)-1]?.username.id) && <img className='profileimageinchatboxmessages' src={`${msg.username.userPhoto}`}></img>}</div>
                                    <div className='divusernameandmessage'>
                                       {(msg.username.id !==msg_arr[msg_arr.indexOf(msg)-1]?.username.id) && <div className='usernamestylingchatbox'>
                                            {msg.username.username}
                                        </div>}
                                        <div>
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>

                                <div className='EachEmojiContainer'> {Object.values(msg.emoji_count).length ?
                                    Object.keys(msg.emoji_count).map(each => (
                                    <div className='EachEmojiContainerSingleEmoji' onClick={() => {
                                        setReactValue(msg.reactions.find((e) => { return e.emoji === each && e.user_id === user.id})?.id)
                                        setUserReactValue(msg.reactions.find((e) => { return e.emoji === each && e.user_id === user.id}))
                                        }} >{each} {msg.emoji_count[each]} {msg.reactions.map((react) => {
                                        })}
                                    </div>
                                    )) : null}
                                </div>

                                </div>
                                </div>
                            )
                        })
                        }
                        <div className='pleasework' ref={messagesEndRef}></div>
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
                </form>
            </div>
                        {clicked && (<div className='RightClickReaction' style={{ top: `${points.y}px`, left: `${points.x}px` }}>
                            <CreateReaction messageId={messageValue} channelId={channelId} />
                            {messageUserId === user.id && <DeleteMsg msgId={messageValue} />}
                        </div>
                        )}
        </>
    )
    )
};


export default Chat;
