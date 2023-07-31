import { thunkGetServers } from "../../store/servers"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Channels from "../Channels"



function Servers() {
    const serversAll = useSelector(state => Object.values(state.servers.allServers))
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()
    const [state, setState] = useState('start')
    const[test,setTest]=useState(false)
    const[valueServerId,setValueServerId]=useState(serversAll?serversAll[0].id:0)

    useEffect(() => {
        dispatch(thunkGetServers(userId))
    }, [dispatch])
    useEffect(() => {
        setTest(true)
    }, [test,valueServerId])


    return (
        <div>
            {serversAll.map((ele) => {
                return <div key={ele.id} >
                    <button value={ele.id} onClick={(e)=> {
                        setValueServerId(e.target.value)
                        setTest(false)}}>{ele.name}</button>
                    {ele.public ? <p>True</p> : <p>False</p>}
                    {/* <Channels serverId={ele.id}/> */}
                </div>

})}
{test?<Channels serverId={valueServerId}/>:null}
        </div>
    )
}

export default Servers
