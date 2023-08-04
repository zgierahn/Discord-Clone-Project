import { thunkGetSingleChannel } from '../../store/channels'
import { useEffect } from 'react'   //useState
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Servers from '../Servers'
import ChannelTest from '../channel-socket'
import Chat from '../chat-socket'


// outside of your component, initialize the socket variable


function SingleChannel() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const { channelId } = useParams()  //userId


    useEffect(() => {
        dispatch(thunkGetSingleChannel(channelId))
    }, [dispatch])

    const channel = useSelector(state => state.channels.singleChannel)
    console.log('CHANNEL',channel)
    return (
        <div>
            <Servers />
            <Chat />
            {/* <ChannelTest /> */}
        </div>
    )
}

export default SingleChannel
