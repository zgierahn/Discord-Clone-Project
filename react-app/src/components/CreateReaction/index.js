import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { thunkCreateReaction } from '../../store/messages'
import './reaction.css'

function CreateReaction({messageId,channelId}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()

    const [emoji,setEmoji] = useState('😄')

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkCreateReaction(userId,messageId,emoji,channelId))
    }

    return (
        <div>
            <label htmlFor="emoji">emoji</label>
            <select name='emoji'
                value={emoji}
                onChange={(e) => {
                    setEmoji(e.target.value)
                }}
            >
                <option value="😄">😄</option>
                <option value="💗">💗</option>
                <option value="💀">💀</option>
                <option value="🔥">🔥</option>
                <option value="✅ ">✅ </option>
                <option value="👍">👍</option>
                <option value="🎉">🎉</option>
                <option value="⭐">⭐</option>
                <option value="🫠">🫠</option>
                <option value="🥹">🥹</option>
                <option value="🚀">🚀</option>
                <option value="😍 ">😍 </option>
                <option value="💪">💪</option>
                <option value="💰">💰</option>

            </select>
            <button
                onClick={(e) => {
                    onSubmit()
                    // .then(()=>history.push(`/${userId}/servers`))
                }}
            >submit</button>
        </div>
    )
}

export default CreateReaction
