import { thunkCreateChannel } from '../../store/channels'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'

function ChannelForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId,serverId } = useParams()

    const [name, setName] = useState('')
    const [privates, setPrivates] = useState(false)
    const [picture, setPicture] = useState('')

    const onSubmit = async() => {
        let payload = {}
        const err = await dispatch(thunkCreateChannel(name,serverId))
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
                    .then(()=>history.push(`/${userId}/servers/${serverId}/channels`))
                }}
            >submit</button>
        </div>
    )
}

export default ChannelForm
