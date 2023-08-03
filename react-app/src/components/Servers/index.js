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
import { thunkLogout } from "../../store/channels"

import './servers.css'
import ServerForm from "../ServerForm"


function Servers() {
    let serversAll = useSelector(state => Object.values(state.servers.allServers))
    let userState = useSelector(state => Object.values(state.session))
    // console.log('this is userState-----------', userState[0].username);
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()
    const [openModal,setOpenModal] = useState(false)
    // const [state, setState] = useState('start')
    const[test,setTest]=useState(false)
    const[valueServer,setValueServer]=useState(serversAll.length?serversAll[0].id:0)

    const [clicked, setClicked] = useState(false);
    const [points, setPoints] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleClick = () => setClicked(false);
        window.addEventListener("click", handleClick);
        return () => { window.removeEventListener("click", handleClick)};
    }, []);

    useEffect(() => {
        dispatch(thunkGetServers(userId))
    }, [dispatch])
    useEffect(() => {
        setTest(true)
    }, [test,valueServer])


    return (
        <>
        <main className="mainserverpage">
            <nav className="servers-container">
            <div className="tooltip logo-container" id="blue">
                <span className="tooltiptext">Direct Messages</span>
                <div className="server-logo">
                    <img className="solo-server-discord" src={soloDiscord} alt='server-logo' />
                </div>
            </div>
            <div className="guildSeparator"></div>
            {serversAll.map((ele) => {
                return <div  key={ele.id} value={ele.id}>
                            <div className="tooltip" value={ele.id} onContextMenu={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation()
                                                                    setClicked(true);
                                                                    setPoints({x: e.pageX, y: e.pageY});
                                                                    }} >
                                <span className="tooltiptext" value={ele.id}>{ele.name}</span>
                                <img className="server-image" id={ele.id} src={ele.picture? ele.picture: "https://www.vhv.rs/dpng/d/276-2761550_discord-icon-default-cool-discord-server-logos-hd.png"} alt={ele.name} onClick={(e)=> {
                                    setValueServer(ele)
                                    setTest(false)}}/>
                            </div>
                        </div>
            })}
        {clicked && (<div className='App' style={{top:`${points.y}px`,left:`${points.x}px`}}>
                        <ul >
                            <li>Edit</li>
                            <li>Delete</li>
                        </ul>
                    </div>
        )}
            <div className="tooltip logo-container" id="green" onClick={()=>setOpenModal(true)}>
                <span className="tooltiptext">Add a Server</span>
                <img className="server-logo" src={addServer} alt='server-logo' />
            </div>
                {openModal && <ServerForm closeModal ={setOpenModal} />}
            <div className="tooltip logo-container" id="green">
                <span className="tooltiptext">Explore Discoverable Servers</span>
                <img className="server-logo" src={discoverServer} alt='server-logo' />
            </div>
            <div className="guildSeparator"></div>
            <div className="tooltip logo-container" id="green">
                <span className="tooltiptext">Download Apps</span>
                <img className="server-logo" src={downloadArrow} alt='server-logo' />
            </div>
            </nav>
            <div className="servertochannels">
                {test?<Channels server={valueServer}/>:null}
                <span className="userLogoutDiv">
                    <div id="userNameDiv">
                        {userState[0]?.username}
                    </div>
                    <button id="userChannelLogout" onClick={() =>{dispatch(thunkLogout())
                                                                return dispatch(logout())
                                                            .then(()=>history.push('/login'))
                                                            }}>
                        Log Out
                    </button>
                </span>
            </div>
        </main>
            <footer className="developerfooter">
                <a className="developer-names" href="">Emily</a>
                <a className="developer-names" href="">Matt</a>
                <div>Our Development Team</div>
                <a className="developer-names" href="">Michael</a>
                <a className="developer-names" href="">Zach</a>
            </footer>
        </>
    )
}

export default Servers
