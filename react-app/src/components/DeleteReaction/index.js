import { useDispatch } from "react-redux"
import { thunkDeleteReaction } from "../../store/messages"
import {useParams, useHistory} from 'react-router-dom'
import { useEffect, useState } from "react"
// import { thunkDeleteReaction } from "../../store/messages"


export default function DeleteReaction ({userId, channelId, reactionId}) {
    const dispatch = useDispatch()
    // const {userId,reactionId,messageId} = useParams()
    const [errors, setErrors] = useState({})
    // const history = useHistory()
    useEffect(() => {
        const err = dispatch(thunkDeleteReaction(userId,channelId,reactionId))
        setErrors(err)
    },[])
    return (
        null
    )
}
