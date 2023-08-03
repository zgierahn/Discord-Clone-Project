import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';
import hashtag from "../images/hashtag.png"
import EditChannel from "./EditChannel";
// let socket;

const ChannelTest = ({channel}) => {
    const [buttonStatus, setButtonStatus] = useState(false)
    const [openModal,setOpenModal] = useState(false)

    let socket;
    const user = useSelector(state => state.session.user)

    const handleClick = () => {
        if(buttonStatus) setButtonStatus(false)
        else setButtonStatus(true)
    }

    useEffect(() => {
        if (buttonStatus){
            socket = io();

            // setSocket(thesocket)

            socket.on('join',{channel: channel.id})

            return (() => {
                socket.disconnect()
            })
        }

    }, [buttonStatus])





    return (user && (
        <div className="channelNameCont">
            <button className="channelnamebutton" onClick={handleClick} ><img className="hashtagchannel" src={hashtag}/> {channel.name}</button>
                <button className="editChannelModalButton" onClick={()=>setOpenModal(true)}><span className="tooltiptext2">Edit Channel</span><span><i class="fa-solid fa-gear"></i></span></button>
            {buttonStatus && <Chat channelId={channel.id} /> }
            {openModal && <EditChannel closeModal ={setOpenModal} channelId={channel.id}/>}
        </div>
    ))

}


export default ChannelTest
