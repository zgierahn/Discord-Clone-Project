import { useDispatch } from "react-redux"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"
import { thunkDeleteReaction } from "../../store/messages"

export default function DeleteReaction () {
    const dispatch = useDispatch()
    const {userId,reactionId,messageId} = useParams()
    const [errors, setErrors] = useState({})
    const history = useHistory()
    const deleteReaction = async() => {
        const err = await dispatch(thunkDeleteReaction(userId,messageId,reactionId))
        setErrors(err)
    }
    return (
        <div>
            <h2>message reaction</h2>
            <button onClick={(e) => {
                deleteReaction()
            }}
            >Delete Reaction</button>
        </div>
    )
}
