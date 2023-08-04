import { thunkCreateChannel } from '../../store/channels'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import './channelForm.css'

function ChannelForm({closeModal3,serverId}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()
    const [errors, setErrors] = useState({})

    const [name, setName] = useState('')

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkCreateChannel(name,serverId))
        if (err.error) {
            await setErrors(err)
        }
        else {
            closeModal3(false)
        }
    }
    let disable=true
    if(name.length){
       disable=false
    }
    return (
        <div className="makechannelmodals">
            <div className="makechannelbackg" >
                <h3 className="headerCreateChannel2">Create Channel</h3>
            <label className="channelNameLabel" htmlFor="name">CHANNEL NAME </label>
            <input className="channelInput"type="text"
            placeholder="# new-channel"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
                    <div className="errormessagescreatechannel">{Object.values(errors).length > 0 ? errors.error : ''}</div>

            <div className="buttonContCreateChannel">
                <div className="cancelChannel" onClick={()=>
                    closeModal3(false)
                    }>Cancel</div>
            <button className="createChannelBtn"
                disabled={disable}
                onClick={(e) => {
                    onSubmit()

                }}
            >Create Channel</button>
            </div>
            </div>
        </div>
    )
}

export default ChannelForm
