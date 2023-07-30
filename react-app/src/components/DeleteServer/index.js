import { useDispatch } from "react-redux"
import { thunkDeleteServer } from "../../store/servers"
import {useParams} from 'react-router-dom'
import { useState } from "react"

export default function DeleteServer () {
    const dispatch = useDispatch()
    const {serverId} = useParams()
    const [errors, setErrors] = useState({})

    const deleteServer = async() => {
        const err = await dispatch(thunkDeleteServer(serverId))
        setErrors(err)
    }
    return (
        <div>
            <h2>sever delete</h2>
            <button onClick={(e) => {
                deleteServer()
            }}
            >Delete Server</button>
        </div>
    )
}
