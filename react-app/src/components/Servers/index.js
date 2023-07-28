import { thunkGetServers } from "../../store/servers"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'

function Servers() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()

    useEffect(() => {
        dispatch(thunkGetServers(userId))
    }, [dispatch])

    const serversAll = useSelector(state => Object.values(state.servers.allServers))
    return (
        <div>
            {serversAll.map((ele) => {
                return <div key={ele.id}>
                    <p>{ele.name}</p>
                    {ele.public ? <p>True</p> : <p>False</p>}
                </div>
            })}
        </div>
    )
}

export default Servers
