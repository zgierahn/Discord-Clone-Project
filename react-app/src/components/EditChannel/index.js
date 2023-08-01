import { thunkGetSingleChannel, thunkEditChannel } from '../../store/channels'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'

function EditChannel() {
    const channel = useSelector(state => state.channels.singleChannel)
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId,channelId} = useParams()  // serverId
    // console.log('channel', channel)

    const [name, setName] = useState(channel.name)

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkEditChannel(channelId,name))
        // console.log('this is err', err)
    }

    useEffect(() => {
        const err = async () => {
            const err = await dispatch(thunkGetSingleChannel(channelId))
            // setErrors(err)
            // console.log('channelsss', err)
        }
        err()
    },[channelId])
    // console.log('channel name', channel.name)
    useEffect(() => {
        setName(channel.name)
    },[channel])

    if (!channel) {
        return null
    }


    return (
        <div>
            <label htmlFor="name">name</label>
            <input type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <button
                onClick={(e) => {
                    onSubmit()
                    .then(()=>history.push(`/${userId}/servers`))
                }}
            >submit</button>
        </div>
    )
}

export default EditChannel
