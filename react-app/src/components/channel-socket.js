import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';
import hashtag from "../images/hashtag.png"
// let socket;

const ChannelTest = ({channel}) => {
    const [buttonStatus, setButtonStatus] = useState(false)
    const [click, setClick] = useState(false)
    const [leftClick, setLeftClick] = useState(false)

    // const {channelId} = useParams()
    let socket;

    const user = useSelector(state => state.session.user)

    const handleClick = (e) => {
        // if (e.type === 'contextmenu') {
        //     e.preventDefault()
        //     setClick(true)
        //     console.log('Right click');
        // }
        if (e.type === 'click'){
            setLeftClick(true)
            if(!buttonStatus) setButtonStatus(true)
            if(buttonStatus) setButtonStatus(false)

        }
    }

    useEffect(() => {
        if (buttonStatus){
            socket = io();


            socket.on('join',{channel: channel.id})

            return (() => {
                socket.disconnect()
            })
        }

    }, [buttonStatus])



    return (user && (
        <div>
            <button className="channelnamebutton" onClick={handleClick} onContextMenu={handleClick}><img className="hashtagchannel" src={hashtag}/> {channel.name}</button>
            {/* {click && <div>Helllloooo</div> } */}
            {buttonStatus && leftClick && <Chat channelId={channel.id} /> }
        </div>
    ))

}


export default ChannelTest
