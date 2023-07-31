import { thunkGetSingleServer } from "../../store/servers"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'


// outside of your component, initialize the socket variable


function SingleServer() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId, serverId, channelId } = useParams()


    useEffect(() => {
        dispatch(thunkGetSingleServer(userId, serverId, channelId))
    }, [dispatch])

    const server = useSelector(state => Object.values(state.servers.singleServer))
    return (
        <div>
            
        </div>
    )
}

export default SingleServer
