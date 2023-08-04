import { thunkGetChannels } from '../../store/channels'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom"
import { useParams, useHistory } from 'react-router-dom'
import ChannelTest from '../channel-socket'
import "./channels.css"
import ChannelForm from '../ChannelForm'
import hashtag from "../../images/hashtag.png"



function Channels({server}) {
    const dispatch = useDispatch()
    // const history = useHistory()
    // const [clickChannel, setClickChannel ] = useState(false)
    const { userId, serverId} = useParams()
    const [openModal,setOpenModal] = useState(false)
    const history = useHistory()
    console.log(serverId, '-----------------')

    useEffect(() => {
        dispatch(thunkGetChannels(userId, serverId))
    }, [dispatch, serverId])

    const channelsAll = useSelector(state => Object.values(state.channels.allChannels))
    if (!server.name) return null
    return (
        // <div className='mainChannelsIndex'>
        //     <span className='textchannelspan'>
        //         <h3 className='servernamediv'>{server.name} </h3>
        //         <div className="textchannelheader">TEXT CHANNEL {server.owner[0].id == userId &&<button className="addchannelbttn" onClick={()=>setOpenModal(true)}>+</button>}</div>
        //     </span>
        //     {openModal && <ChannelForm closeModal ={setOpenModal} serverId={server.id}/>}
        //     {channelsAll.map((ele) => {
        //         return <div key={ele.id}>
        //             TEST
        //         <button className="channelnamebutton" onClick={() => history.push(`/${userId}/servers/${serverId}/channels/${ele.id}`) } ><img className="hashtagchannel" src={hashtag}/> {ele.name}</button>

        //             {/* <ChannelTest channel={ele}/> */}

        //         </div>
        //     })}
        //     TESTTTTTTTTTTTTTTTSSSSSSS
        //     NOT USING THIS COMPONENT
        // </div>
        null
    )
}

export default Channels
