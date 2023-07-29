import { thunkGetSingleServer } from "../../store/servers"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'

function SingleServer() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId, serverId } = useParams()

    useEffect(() => {
        dispatch(thunkGetSingleServer(userId, serverId))
    }, [dispatch])

    const server = useSelector(state => Object.values(state.servers.singleServer))
    return (
        <div>
            TEST
        </div>
    )
}

export default SingleServer
