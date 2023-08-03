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
        <div className="channelNameCont">
            <button className="channelnamebutton" onClick={handleClick} ><img className="hashtagchannel" src={hashtag}/> {channel.name}</button>
                <button className="editChannelModalButton" onClick={()=>setOpenModal(true)}><span className="tooltiptext2">Edit Channel</span><span><i class="fa-solid fa-gear"></i></span></button>
            {buttonStatus && <Chat channelId={channel.id} /> }
            {openModal && <EditChannel closeModal ={setOpenModal} channel={channel}/>}
        </div>
    ))

}


export default ChannelTest
