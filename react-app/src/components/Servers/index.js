import { thunkGetServers } from "../../store/servers"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Channels from "../Channels"
import addServer from "../../images/server-add.png"
import discoverServer from "../../images/discoverable-servers.png"
import downloadArrow from "../../images/download-arrow.png"
import soloDiscord from "../../images/solo-discord-logo.png"
import { logout } from "../../store/session";

import './servers.css'





function Servers() {
    const serversAll = useSelector(state => Object.values(state.servers.allServers))
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()
    // const [state, setState] = useState('start')
    const[test,setTest]=useState(false)
    console.log('servesAll',serversAll)
    const[valueServerId,setValueServerId]=useState(serversAll.length?serversAll[0].id:0)


    useEffect(() => {
        dispatch(thunkGetServers(userId))
    }, [dispatch])
    useEffect(() => {
        setTest(true)
    }, [test,valueServerId])

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     dispatch(logout());
    //   };

    return (
        <main className="mainserverpage">
            <nav className="servers-container">
            <div className="tooltip" id="logo-container">
                <span className="tooltiptext">Direct Messages</span>
                <div className="server-logo">
                    <img className="solo-server-discord" src={soloDiscord} alt='server-logo' />
            </div>
            </div>
            <div class="guildSeparator"></div>
            {serversAll.map((ele) => {
                return <div  key={ele.id}>
                    <div className="tooltip">
                        <span className="tooltiptext">{ele.name}</span>
                        <img className="server-image" src={ele.picture} alt={ele.name} onClick={(e)=> {
                            setValueServerId(ele.id)
                            setTest(false)}}/>
                    </div>
                    {/* {ele.public ? <p>True</p> : <p>False</p>} */}
                </div>
            })}
            <div className="tooltip" id="logo-container">
                <span className="tooltiptext">Add a Server</span>
                <img className="server-logo" src={addServer} alt='server-logo' />
            </div>
            <div className="tooltip" id="logo-container">
                <span className="tooltiptext">Explore Discoverable Servers</span>
                <img className="server-logo" src={discoverServer} alt='server-logo' />
            </div>
            <div class="guildSeparator"></div>
            <div className="tooltip" id="logo-container">
                <span className="tooltiptext">Download Apps</span>
                <img className="server-logo" src={downloadArrow} alt='server-logo' />
            </div>
            </nav>
            <div className="servertochannels">
                {test?<Channels serverId={valueServerId}/>:null}
                <button onClick={() =>{
                        return dispatch(logout())
                    .then(()=>history.push('/login'))
                    }}>Log Out</button>
            </div>
        </main>
    )
}

export default Servers
