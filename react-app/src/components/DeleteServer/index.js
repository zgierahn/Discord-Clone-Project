import { useDispatch } from "react-redux"
import { thunkDeleteServer, thunkGetServers } from "../../store/servers"
import {useParams} from 'react-router-dom'
import { useState } from "react"

export default function DeleteServer ({closeModal,serverValue}) {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const [errors, setErrors] = useState({})

    const deleteServer = async() => {
        const err = await dispatch(thunkDeleteServer(serverValue))
        dispatch(thunkGetServers(userId))
        setErrors(err)
    }
    return (
        <>
        <div className="makechannelmodals">
            <div className="makechannelbackg">
            <h2>Are you sure you want to delete your server?</h2>
            <button className="createChannelBtn"
            onClick={(e) => {
                deleteServer()
                .then(()=>closeModal(false))
            }}
            >Delete Server</button>
            <button className="cancelChannel" onClick={()=>
                closeModal(false)
                }>Cancel</button>
            </div>
        </div>
            </>
    )
}
