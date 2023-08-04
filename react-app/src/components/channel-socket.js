import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chat from './chat-socket'
import { io } from 'socket.io-client';
import hashtag from "../images/hashtag.png"
import { thunkGetChannels } from "../store/channels";
import './Channels/channels.css'


// let socket;

const ChannelTest = ({channel, clickChannel, setClickChannel}) => {
    // console.log(channel, '====+++++++++++++')
    const [buttonStatus, setButtonStatus] = useState(false)
    const dispatch = useDispatch()
    const {userId, serverId} = useParams()
    const history = useHistory()
    let socket;

    useEffect(() => {
        dispatch(thunkGetChannels(userId, serverId))
    }, [dispatch, serverId])

    const channelsAll = useSelector(state => Object.values(state.channels.allChannels))
    // console.log(channelsAll,'heloooooooooooooo')
    const user = useSelector(state => state.session.user)

    return (user && (
        <div>
            {channelsAll.map(channel => {
                return<button className="channelnamebutton" onClick={() =>
                    history.push(`/${userId}/servers/${serverId}/channels/${channel.id}`)}
                    >
                    <img className="hashtagchannel" src={hashtag}/>
                    {channel.name}
                    </button>

            })}


        </div>
    ))

}


export default ChannelTest
