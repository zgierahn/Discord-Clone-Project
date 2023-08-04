import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';
import hashtag from "../images/hashtag.png"



import { thunkGetChannels } from "../store/channels";
import './Channels/channels.css'
import EditChannel from "./EditChannel";
import DeleteChannel from "./DeleteChannel";




const ChannelTest = ({channel, server}) => {
    const [buttonStatus, setButtonStatus] = useState(false)
    const dispatch = useDispatch()
    const {userId, serverId} = useParams()
    const history = useHistory()

    const [openModal,setOpenModal] = useState(false)
    const [openModal1,setOpenModal1] = useState(false)
    let socket;

    const [clicked, setClicked] = useState(false);
    const [points, setPoints] = useState({
        x: 0,
        y: 0,
      });
      useEffect(() => {
        const handleClick = () => setClicked(false);
        window.addEventListener("click", handleClick);
        history.push(`/${userId}/servers/${serverId}/channels/${channel.id}`);
        return () => {
          window.removeEventListener("click", handleClick);
        };
      }, []);


    useEffect(() => {
        dispatch(thunkGetChannels(userId, serverId))
    }, [dispatch, serverId])


    if (!server.name) return null
    return (user && (

        <div className="channelNameCont">
            {channelsAll.map(channel => {
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
            ><img className="hashtagchannel" src={hashtag}/> {channel.name}</button>})}
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
