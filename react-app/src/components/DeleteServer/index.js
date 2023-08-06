import { useDispatch } from "react-redux"
import { thunkDeleteServer, thunkGetServers } from "../../store/servers"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"

export default function DeleteServer ({closeModal,serverValue}) {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const [errors, setErrors] = useState({})
    const history =useHistory()

    const deleteServer = async() => {
        const err = await dispatch(thunkDeleteServer(serverValue))
        dispatch(thunkGetServers(userId))
        .then(()=>history.push(`/${userId}/servers`))
        setErrors(err)
    }
    return (
        <>
        <div className="makechannelmodals">
            <div className="makechannelbackg">
            <h3 className="headerDeleteChannel">Delete Server</h3>
            <h3 className="deletechannelinnertext">Are you sure you want to delete your server?</h3>
            <div className="buttonContCreateChannel">
                <div className="cancelChannel" onClick={()=>
                    closeModal(false)
                    }>Cancel</div>
            <button className="createChannelBtn"
            onClick={(e) => {
                deleteServer()
                .then(()=>closeModal(false))
            }}
            >Delete Server</button>
            </div>
        </div>
        </div>
            </>
    )
}
