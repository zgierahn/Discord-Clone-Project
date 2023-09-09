import { thunkGetSingleChannel } from '../../store/channels'
import { useEffect, useState } from 'react'   //useState
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Servers from '../Servers'
import ChannelTest from '../channel-socket'
import Chat from '../chat-socket'
import { thunkGetSingleServer } from '../../store/servers'


// outside of your component, initialize the socket variable


function SingleChannel() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const {userId,  channelId, serverId } = useParams()  //userId
    useEffect(() => {
        dispatch(thunkGetSingleChannel(channelId))
        dispatch(thunkGetSingleServer(userId, serverId))
    }, [dispatch])

    const server = useSelector(state => state.servers.singleServer)

    const channel = useSelector(state => state.channels.singleChannel)
    return (
        <div>
            <Servers server={server} />
            <Chat />
            {/* <ChannelTest /> */}
        </div>
    )
}

export default SingleChannel
