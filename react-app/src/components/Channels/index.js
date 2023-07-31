import { thunkGetChannels } from '../../store/channels'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'

function Channels() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId, serverId } = useParams()

    useEffect(() => {
        dispatch(thunkGetChannels(userId, serverId))
    }, [dispatch])

    const channelsAll = useSelector(state => Object.values(state.channels.allChannels))
    return (
        <div>
            {channelsAll.map((ele) => {
                return <div key={ele.id}>
                    <p>{ele.id}, {ele.name}</p>

                </div>
            })}

        </div>

    )
}

export default Channels
