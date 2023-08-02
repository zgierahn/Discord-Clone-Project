import { thunkGetChannels } from '../../store/channels'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import ChannelTest from '../channel-socket'
import "./channels.css"


function Channels({server}) {
    const dispatch = useDispatch()
    // const history = useHistory()
    const { userId} = useParams()

    useEffect(() => {
        dispatch(thunkGetChannels(userId, server.id))
    }, [dispatch])

    const channelsAll = useSelector(state => Object.values(state.channels.allChannels))
    return (
        <div>
            <div className='thisisaclass'>
                <h3 className='servernamediv'>{server.name}</h3>
            </div>
            {channelsAll.map((ele) => {
                return <div key={ele.id}>
                    
                    <ChannelTest channel={ele} />

                </div>
            })}

        </div>

    )
}

export default Channels
