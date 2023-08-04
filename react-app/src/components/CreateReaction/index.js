import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { thunkCreateReaction } from '../../store/messages'
import './reaction.css'

function CreateReaction({messageId,channelId}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId } = useParams()

    const [emoji,setEmoji] = useState('')

    useEffect(() => {
        if (emoji.length > 0){
            dispatch(thunkCreateReaction(userId,messageId,emoji,channelId))
        }
    },[emoji])

    // const onSubmit = async() => {
    //     // let payload = {}
    //     const err = await dispatch(thunkCreateReaction(userId,messageId,emoji,channelId))
    // }

    return (
        <div className=''>
            <div className='SelectEmojiContainer'>
                <option className='Emoji' value="😄" onClick={(e) => setEmoji(e.target.value)}>😄</option>
                <option className='Emoji' value="💗" onClick={(e) => setEmoji(e.target.value)}>💗</option>
                <option className='Emoji' value="💀" onClick={(e) => setEmoji(e.target.value)}>💀</option>
                <option className='Emoji' value="🔥" onClick={(e) => setEmoji(e.target.value)}>🔥</option>
                <option className='Emoji' value="✅ " onClick={(e) => setEmoji(e.target.value)}>✅ </option>
                <option className='Emoji' value="👍" onClick={(e) => setEmoji(e.target.value)}>👍</option>
                <option className='Emoji' value="🎉" onClick={(e) => setEmoji(e.target.value)}>🎉</option>
                <option className='Emoji' value="⭐" onClick={(e) => setEmoji(e.target.value)}>⭐</option>
                <option className='Emoji' value="🫠" onClick={(e) => setEmoji(e.target.value)}>🫠</option>
                <option className='Emoji' value="🥹" onClick={(e) => setEmoji(e.target.value)}>🥹</option>
                <option className='Emoji' value="🚀" onClick={(e) => setEmoji(e.target.value)}>🚀</option>
                <option className='Emoji' value="😍 " onClick={(e) => setEmoji(e.target.value)}>😍 </option>
                <option className='Emoji' value="💪" onClick={(e) => setEmoji(e.target.value)}>💪</option>
                <option className='Emoji' value="💰" onClick={(e) => setEmoji(e.target.value)}>💰</option>

            </div>
            {/* <button
                onClick={(e) => {

                    // .then(()=>history.push(`/${userId}/servers`))
                }}
            >submit</button> */}
        </div>
    )
}

export default CreateReaction
