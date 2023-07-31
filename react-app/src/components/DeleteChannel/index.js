import { useDispatch } from "react-redux"
import { thunkDeleteChannel } from "../../store/channels"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"

export default function DeleteChannel () {
    const dispatch = useDispatch()
    const {userId, channelId, serverId} = useParams()
    const [errors, setErrors] = useState({})
    const history = useHistory()

    const deleteChannel = async() => {
        const err = await dispatch(thunkDeleteChannel(channelId))
        setErrors(err)
    }
    return (
        <div>
            <h2>channel delete</h2>
            <button onClick={(e) => {
                deleteChannel()
                .then(()=>history.push(`/${userId}/servers/${serverId}/channels`))
            }}
            >Delete Channel</button>
        </div>
    )
}
