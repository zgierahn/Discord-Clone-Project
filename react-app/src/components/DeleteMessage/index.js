import { useDispatch } from "react-redux"
import { thunkDeleteMessage } from "../../store/messages"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"

export default function DeleteMessage () {
    const dispatch = useDispatch()
    const {userId, messageId} = useParams()
    const [errors, setErrors] = useState({})
    const history = useHistory()
    console.log('this is message id',messageId)
    const deleteMessage = async() => {
        const err = await dispatch(thunkDeleteMessage(userId,messageId))
        setErrors(err)
    }
    return (
        <div>
            <h2>message delete</h2>
            <button onClick={(e) => {
                deleteMessage()
            }}
            >Delete Message</button>
        </div>
    )
}
