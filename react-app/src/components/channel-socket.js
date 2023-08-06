import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';
import hashtag from "../images/hashtag.png"
import ChannelForm from "./ChannelForm";



import { thunkGetChannels, thunkGetSingleChannel } from "../store/channels";
import './Channels/channels.css'
import EditChannel from "./EditChannel";
import DeleteChannel from "./DeleteChannel";




const ChannelTest = () => {
    const [buttonStatus, setButtonStatus] = useState(false)
    const dispatch = useDispatch()
    const {userId, serverId} = useParams()
    const history = useHistory()

    const [openModal,setOpenModal] = useState(false)
    const [openModal3,setOpenModal3] = useState(false)
    const [openModal1,setOpenModal1] = useState(false)
    const [channelId, setChannelId] = useState('')
    let socket;

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


    useEffect(() => {
        dispatch(thunkGetChannels(userId, serverId))
    }, [dispatch, serverId])


    useEffect(() => {
        dispatch(thunkGetSingleChannel(channelId))
    }, [channelId])


    const user = useSelector(state => state.session.user)
    const channelsAll = useSelector(state => Object.values(state.channels.allChannels))
    const server = useSelector(state => state.servers.singleServer)
    const channel = useSelector(state => state.channels.singleChannel)


    if (!server.name) return null
    return (user && (
        <>
              <span className='textchannelspan'>
                <h3 className='servernamediv'>{server.name}</h3>
                <div className="textchannelheader">TEXT CHANNELS
                {server.owner[0].id == userId && <div className="addchannelbttn" onClick={()=>setOpenModal3(true)}>
             <span className="tooltiptext2">Add Channel</span>+
                </div>}
            </div>
             </span>
             {openModal3 && <ChannelForm closeModal3 ={setOpenModal3} serverId={server.id}/>}

        <div className="channelNameCont">
            {channelsAll.map(channel => {
            return <div className="channelnamebutton" onClick={()=>history.push(`/${userId}/servers/${serverId}/channels/${channel.id}`)}
            value={channel.id}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation()
              setChannelId(channel.id)
              setClicked(true);
              setPoints({
                x: e.pageX,
                y: e.pageY,
              });
             }}
            ><img className="hashtagchannel" src={hashtag}/> {channel.name}</div>

          {/* { server.owner[0].id == userId &&<button className="editChannelModalButton" onClick={()=>setOpenModal2(true)}>
             <span className="tooltiptext2">Edit Channel</span>
             <span><i class="fa-solid fa-gear"></i></span></button>} */}

            })}
            {server.owner[0].id == userId && clicked && (
        <div className='IBlameMatt' style={{top:`${points.y}px`,left:`${points.x}px`}}>
          {/* <ul > */}
            <button className="chicken" onClick={()=>setOpenModal(true)}>Edit</button>
            <button className="chicken" onClick={()=>setOpenModal1(true)}>Delete</button>
          {/* </ul> */}
        </div>
      )}

            {openModal && <EditChannel closeModal ={setOpenModal} channel={channel}/>}
            {openModal1 && <DeleteChannel closeModal1 ={setOpenModal1} channel={channel}/>}

        </div>
        </>
    ))

}


export default ChannelTest
