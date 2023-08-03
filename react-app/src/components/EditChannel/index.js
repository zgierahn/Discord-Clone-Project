import { thunkGetSingleChannel, thunkEditChannel, thunkGetChannels } from '../../store/channels'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'

function EditChannel({closeModal,channel}) {
    // const channel = useSelector(state => state.channels.singleChannel)
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId} = useParams()  // serverId
    // console.log('channel', channel)

    const [name, setName] = useState(channel.name)

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkEditChannel(channel.id,name))
        const ans=await dispatch(thunkGetChannels(userId,channel.server_id ))
    }

    useEffect(() => {
        const err = async () => {
            const err = await dispatch(thunkGetSingleChannel(channel.id))
            // setErrors(err)
            // console.log('channelsss', err)
        }
        err()
    },[channel.id])
    // console.log('channel name', channel.name)
    useEffect(() => {
        setName(channel.name)
    },[channel])

    if (!channel) {
        return null
    }


    return (
        <div className="makechannelmodals">
            <div className="makechannelbackg" >
            <label htmlFor="name">name</label>
            <input type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <div className="buttonContCreateChannel">
                <div className="cancelChannel" onClick={()=>
                    closeModal(false)
                    }>Cancel</div>
            <button className="createChannelBtn"
                onClick={(e) => {
                    onSubmit()
                    .then(closeModal(false))
                }}
            >Edit Channel</button>
            </div>
            </div>
        </div>
    )
}

export default EditChannel
