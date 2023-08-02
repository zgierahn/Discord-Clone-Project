import { thunkCreateChannel } from '../../store/channels'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import './channelForm.css'

function ChannelForm({closeModal,serverId}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()

    const [name, setName] = useState('')

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkCreateChannel(name,serverId))
    }
    let disable=true
    if(name.length){
       disable=false
    }
    return (
        <div className="makechannelmodals">
            <div className="makechannelbackg" >
            <label className="channelNameLabel" htmlFor="name">CHANNEL NAME</label>
            <input className="channelInput"type="text"
            placeholder="# new-channel"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <button className="createChannelBtn"
                disabled={disable}
                onClick={(e) => {
                    onSubmit()
                    .then(closeModal(false))
                }}
            >Create Channel</button>
            <button className="cancelChannel" onClick={()=>
                closeModal(false)
                }>Cancel</button>
            </div>
        </div>
    )
}

export default ChannelForm
