import { thunkGetServers } from "../../store/servers"
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import addServer from "../../images/server-add.png"
import discoverServer from "../../images/discoverable-servers.png"
import downloadArrow from "../../images/download-arrow.png"
import soloDiscord from "../../images/solo-discord-logo.png"
import { logout } from "../../store/session";
import { thunkLogout } from "../../store/channels"
import ServerForm from "../ServerForm"
import EditServer from "../EditServer"
import DeleteServer from "../DeleteServer"
import ChannelTest from "../channel-socket"
import './servers.css'


function Servers({server}) {
    let serversAll = useSelector(state => Object.values(state.servers.allServers))
    let userState = useSelector(state => Object.values(state.session))
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId, serverId } = useParams()
    const [openModal,setOpenModal] = useState(false)
    const [openModalServer,setOpenModalServer] = useState(false)
    const [openModalServerDelete,setOpenModalServerDelete] = useState(false)
    // const [state, setState] = useState('start')
    const[test,setTest]=useState(false)
    const[valueServer,setValueServer]=useState(serversAll.length?serversAll[0].id:0)

    const [clicked, setClicked] = useState(false);
    const [serverValue, setServerValue] = useState('');
    const [points, setPoints] = useState({
      x: 0,
      y: 0,
    });

    // const [serverT, setServerT] = useState(server)

    // const inputRef = useRef()
    // const scrollHandler = _ => {
    //     console.log('maybe the coordunatwqerqw',inputRef.current.getBoundingClientRect());
    //   };
    //   useEffect(() => {
    //     window.addEventListener("mouseover", scrollHandler);
    //     return () => {
    //       window.removeEventListener("mouseover", scrollHandler);
    //     };
    //   }, []);

    useEffect(() => {
        const handleClick = () => setClicked(false);
        window.addEventListener("click", handleClick);
        return () => { window.removeEventListener("click", handleClick)};
    }, []);

    useEffect(() => {
        // setServerT(server)
    }, [serverValue])


    useEffect(() => {
        dispatch(thunkGetServers(userId))
        console.log('getting servers')
    }, [dispatch,userId])
    useEffect(() => {
        // setTest(true)
    }, [valueServer])

    return (
        <>
        <main className="mainserverpage">
            <nav className="servers-container">
            <div  className="tooltip logo-container" id="blue" onClick={()=>{alert("DM's coming soon!")}}>
                {/* <div className="tooltiptext">Direct Messages</div> */}
                <div className="server-logo">
                    <img className="solo-server-discord" src={soloDiscord} alt='server-logo' />
                </div>
            </div>
            <div className="guildSeparator"></div>
            {serversAll.map((ele) => {
                return <div  id='figureouttooltipstuff' key={ele.id} value={ele.id}>

                            <div  className="tooltip" value={ele.id} onContextMenu={(e) => {
                                e.preventDefault();
                                setServerValue(e.target.id)
                                setClicked(true);
                                setPoints({x: e.pageX, y: e.pageY});
                                }} >
                                {/* <div className="tooltiptext" value={ele.id}>{ele.name}</div> */}

                                <img className="server-image" id={ele.id} src={ele.picture? ele.picture: "https://toppng.com/uploads/preview/discord-logo-discord-ico-11562851206m28xz1b1ln.png"} alt={ele.name}
                                onClick={(e)=> {
                                    history.push(`/${userId}/servers/${ele.id}`)
                                    }}/>

                            </div>
                        </div>
            })}
        {clicked && (<div className='App' style={{top:`${points.y}px`,left:`${points.x}px`}}>

            <button className="chicken" onClick={(e)=>{
                setOpenModalServer(true)
            }}>Edit</button>
            <button className="chicken"
            onClick={(e)=>{
                setOpenModalServerDelete(true)
            }}
            >Delete</button>
                    </div>
        )}
        {openModalServerDelete && <DeleteServer closeModal ={setOpenModalServerDelete} serverValue={serverValue}/>}
      {openModalServer && <EditServer closeModal ={setOpenModalServer} serverValue={serverValue}/>}
            <div className="tooltip logo-container" id="green" onClick={()=>setOpenModal(true)}>

                {/* <span className="tooltiptext">Add a Server</span> */}
                <img className="server-logo" src={addServer} alt='server-logo' />
            </div>
                {openModal && <ServerForm closeModal ={setOpenModal} />}
            <div className="tooltip logo-container" id="green" onClick={()=>{alert("Feature coming soon!")}}>
                {/* <span className="tooltiptext">Explore Discoverable Servers</span> */}
                <img className="server-logo" src={discoverServer} alt='server-logo' />
            </div>
            <div className="guildSeparator"></div>
            <div className="tooltip logo-container" id="green" onClick={()=>{alert("Feature coming soon!")}}>
                {/* <span className="tooltiptext">Download Apps</span> */}
                <img className="server-logo" src={downloadArrow} alt='server-logo' />
            </div>
            </nav>
            <div className="servertochannels">
                {/* { server ? <ChannelTest channel={server} /> : null } */}
                {serverId && <ChannelTest /> }
                <span className="userLogoutDiv">
                    <div id="userNameDiv">
                        <div className="memberListUserPhoto">
                            <img className='userImageBG' src={soloDiscord} alt="user-photo"/>
                            {/* //src={userState[0]?.userPhoto} */}
                        </div>
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
            <div id='MembersForServerList'>
                <div>Members</div>
                {server && server.owner && server.owner.map((owner) => {
                    return <div className="memberlistUserPhotoDiv" key={owner.id}>
                        <div className="memberListUserPhoto">
                            <img className='userImageBG' src={soloDiscord} alt="user-photo"/>
                            {/* //src={userState[0]?.userPhoto} */}
                        </div>
                        {/* <img className='memberListUserPhoto' src={owner.userPhoto} alt="user-photo"/> */}
                        {owner.username}
                        </div>
                })}
                {/* {console.log(server, 'hereeeeeeeeee')} */}
            </div>
        </main>
            <footer className="developerfooter">
                <p className="developer-names" >Emily</p>
                <p className="developer-names" >Matt</p>
                <a className="DevTeamLink" onClick={()=>{history.push("/ourDevTeam")}}>Our Development Team</a>
                <p className="developer-names" >Michael</p>
                <p className="developer-names" >Zach</p>
            </footer>
        </>
    )
}

export default Servers
