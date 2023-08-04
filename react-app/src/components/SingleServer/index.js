import { thunkGetSingleServer } from "../../store/servers"
import { useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Servers from "../Servers"
import Channels from "../Channels"
import ChannelTest from "../channel-socket"


// outside of your component, initialize the socket variable


function SingleServer() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const { userId, serverId, channelId } = useParams()


    useEffect(() => {
        dispatch(thunkGetSingleServer(userId, serverId, channelId))
    }, [dispatch, serverId])

    const server = useSelector(state => state.servers.singleServer)
    return (
        <>
            <div>
                <Servers server={server} />
                {/* <Channels server={server} /> */}
            </div>
        </>
    )
}

export default SingleServer
