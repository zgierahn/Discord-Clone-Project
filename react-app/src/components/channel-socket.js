import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';


// let socket;

const ChannelTest = ({channelId}) => {
    // const [socket, setSocket] = useState('')
    const [buttonStatus, setButtonStatus] = useState(false)
    // const {channelId} = useParams()
    let socket;

    // const [chatInput, setChatInput] = useState("");
    // const [messages, setMessages] = useState([]);
    // const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const handleClick = () => {
        if(buttonStatus) setButtonStatus(false)
        else setButtonStatus(true)
    }

    useEffect(() => {
        if (buttonStatus){
            socket = io();

            // setSocket(thesocket)

            socket.on('join',{channel: channelId})

            return (() => {
                socket.disconnect()
            })
        }

    }, [buttonStatus])





    return (user && (
        <div>
            <button onClick={handleClick}>Join Channel</button>

            {buttonStatus && <Chat channelId={channelId} /> }
        </div>
    ))

}


export default ChannelTest
