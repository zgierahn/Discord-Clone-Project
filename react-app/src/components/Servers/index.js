import { thunkGetServers } from "../../store/servers"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Channels from "../Channels"
import addServer from "../../images/server-add.jpg"
import discoverServer from "../../images/discoverable-servers.jpg"
import downloadArrow from "../../images/download-arrow.jpg"

import './servers.css'




function Servers() {
    const serversAll = useSelector(state => Object.values(state.servers.allServers))
    const dispatch = useDispatch()
    // const history = useHistory()
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


    return (
        <div className="servers-container">
            {serversAll.map((ele) => {
                return <div  key={ele.id}>
                    <div className="tooltip">
                    <span className="tooltiptext">{ele.name}</span>
                     <img className="server-logo" src={ele.picture} alt={ele.name} onClick={(e)=> {
                         setValueServerId(ele.id)
                         setTest(false)}}/>
                    </div>
                    {/* <button value={ele.id} onClick={(e)=> {
                        setValueServerId(e.target.value)
                        setTest(false)}}>
                            {ele.name}
                    </button> */}
                    {ele.public ? <p>True</p> : <p>False</p>}
                    {/* <Channels serverId={ele.id}/> */}
        </div>

})}
        
            <img className="server-logo" src={addServer} alt='server-logo' />
            <img className="server-logo" src={discoverServer} alt='server-logo' />
            <img className="server-logo" src={downloadArrow} alt='server-logo' />
{test?<Channels serverId={valueServerId}/>:null}
        </div>
    )
}

export default Servers
