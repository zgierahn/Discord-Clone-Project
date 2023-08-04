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

        // <div>
        //     <span className='textchannelspan'>
        //     <h3 className='servernamediv'>{server.name} </h3>
        //     <div className="textchannelheader">TEXT CHANNELS
        //         {server.owner[0].id == userId &&<div className="addchannelbttn" onClick={()=>setOpenModal(true)}>
        //     <span className="tooltiptext2">Add Channel</span>+
        //         </div>}
        //     </div>
        //     {/* {server.owner[0].id == userId &&<div className="addchannelbttn" onClick={()=>setOpenModal(true)}><span className="tooltiptext2">Add Channel</span>+</div>} */}
        //     </span>
        //     {openModal && <ChannelForm closeModal ={setOpenModal} serverId={server.id}/>}

        //     {channelsAll.map((ele) => {
        //         return <div key={ele.id}>

        //             <ChannelTest channel={ele} server={server}/>

        //         </div>
        //     })}

        // </div>


        //         </div>
        //     })}
        //     TESTTTTTTTTTTTTTTTSSSSSSS
        //     NOT USING THIS COMPONENT
        // </div>
        null
    )
}

export default Channels
