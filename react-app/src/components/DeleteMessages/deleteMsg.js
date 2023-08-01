import { useDispatch } from "react-redux"
import { thunkDeleteMessage } from "../../store/messages"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"

export default function DeleteMsg ({msgId}) {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const history = useHistory()

    const deleteMsg = async() => {
        await dispatch(thunkDeleteMessage(msgId))
    }
    return (
        <div>

            <button onClick={(e) => {
                deleteMsg()
            }}
            >Delete Message</button>
        </div>
    )
}
