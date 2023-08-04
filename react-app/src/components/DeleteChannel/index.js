import { useDispatch } from "react-redux"
import { thunkDeleteChannel,thunkGetChannels } from "../../store/channels"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"
import "./deletechannel.css"
export default function DeleteChannel ({closeModal1,channel}) {
    const dispatch = useDispatch()
    const {userId, channelId, serverId} = useParams()
    const [errors, setErrors] = useState({})
    const history = useHistory()

    const deleteChannel = async() => {
        const err = await dispatch(thunkDeleteChannel(channel.id))
        const ans=await dispatch(thunkGetChannels(userId,channel.server_id ))
        setErrors(err)
    }
    return (
        <div className="makechannelmodals1">
        <div className="makedeletebackg" >
        <h3 className="headerDeleteChannel">Delete Channel</h3>
            <div className="deletechannelinnertext">Are you sure you want to delete <span className="innerspandeletechannel">#{channel.name}</span>? This cannot be undone.</div>
            <div className="buttonContCreateChannel">
            <div className="cancelChannel" onClick={()=>
                    closeModal1(false)
                    }>Cancel</div>
            <button className="createChannelBtn"onClick={(e) => {
                deleteChannel()
                .then(closeModal1(false))
            }}
            >Delete Channel</button>
        </div>
        </div>
        </div>
    )
}
