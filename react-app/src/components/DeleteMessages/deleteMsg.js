import { useDispatch } from "react-redux"
import { thunkDeleteMessage } from "../../store/messages"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"

export default function DeleteChannel ({msgId, msgUser}) {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const [errors, setErrors] = useState({})
    const history = useHistory()

    const deleteMsg = async() => {
        await dispatch(thunkDeleteMessage(msgId))
    }
    return (
        <div>

            { msgUser === userId ? <button onClick={(e) => {
                deleteMsg()
            }}
            >Delete Message</button> : null}
        </div>
    )
}
