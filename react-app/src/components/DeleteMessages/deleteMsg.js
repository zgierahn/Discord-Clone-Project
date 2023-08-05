import { useDispatch } from "react-redux"
import { thunkDeleteMessage } from "../../store/messages"
import {useParams, useHistory} from 'react-router-dom'
import { useState } from "react"
import './DeleteMsg.css'

export default function DeleteMsg ({msgId}) {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const history = useHistory()

    const deleteMsg = async() => {
        await dispatch(thunkDeleteMessage(msgId))
    }
    return (
        <div>

            <button className="DeleteRightClickMessageButtom" onClick={(e) => {
                deleteMsg()
            }}
            >Delete Message</button>
        </div>
    )
}
