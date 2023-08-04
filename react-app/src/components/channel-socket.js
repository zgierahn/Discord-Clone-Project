import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';
import hashtag from "../images/hashtag.png"
import EditChannel from "./EditChannel";
import DeleteChannel from "./DeleteChannel";


const ChannelTest = ({channel, server}) => {
    const [buttonStatus, setButtonStatus] = useState(false)
    const { userId} = useParams()
    const [openModal,setOpenModal] = useState(false)
    const [openModal1,setOpenModal1] = useState(false)

    const [click, setClick] = useState(false)
    const [leftClick, setLeftClick] = useState(false)

    const [clicked, setClicked] = useState(false);
    const [points, setPoints] = useState({
        x: 0,
        y: 0,
      });
      useEffect(() => {
        const handleClick = () => setClicked(false);
        window.addEventListener("click", handleClick);
        return () => {
          window.removeEventListener("click", handleClick);
        };
      }, []);
    let socket;

    const user = useSelector(state => state.session.user)

    const handleClick = (e) => {
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


    if (!server.name) return null
    return (user && (
        <div className="channelNameCont">
            <button className="channelnamebutton" onClick={handleClick}
            value={channel.name}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation()
              setClicked(true);
              setPoints({
                x: e.pageX,
                y: e.pageY,
              });
             }}
            ><img className="hashtagchannel" src={hashtag}/> {channel.name}</button>
            {server.owner[0].id == userId && clicked && (
        <div className='IBlameMatt' style={{top:`${points.y}px`,left:`${points.x}px`}}>
          {/* <ul > */}
            <button className="chicken" onClick={()=>setOpenModal(true)}>Edit</button>
            <button className="chicken" onClick={()=>setOpenModal1(true)}>Delete</button>
          {/* </ul> */}
        </div>
      )}
               { server.owner[0].id == userId &&<button className="editChannelModalButton" onClick={()=>setOpenModal(true)}>
                  <span className="tooltiptext2">Edit Channel</span>
                  <span><i class="fa-solid fa-gear"></i></span></button>}
            {buttonStatus && <Chat channelId={channel.id} /> }
            {openModal && <EditChannel closeModal ={setOpenModal} channel={channel}/>}
            {openModal1 && <DeleteChannel closeModal1 ={setOpenModal1} channel={channel}/>}
        </div>
    ))

}


export default ChannelTest
