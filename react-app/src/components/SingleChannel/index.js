import { thunkGetSingleChannel } from '../../store/channels'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'


// outside of your component, initialize the socket variable


function SingleChannel() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId, serverId, channelId } = useParams()


    useEffect(() => {
        dispatch(thunkGetSingleChannel(userId, serverId, channelId))
    }, [dispatch])

    const channel = useSelector(state => Object.values(state.channels.singleChannel))
    return (
        <div>

        </div>
    )
}

export default SingleChannel
