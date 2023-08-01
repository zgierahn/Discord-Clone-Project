
const GET_MESSAGES = 'messages/GET_MESSAGES'
const DELETE_MESSAGE = 'messages/DELETE_MESSAGE'
const DELETE_REACTION = 'messages/DELETE_REACTION'

const getMessages = (data) => ({
    type: GET_MESSAGES,
    data
})

const deleteMessage = (messageId) => ({
    type:DELETE_MESSAGE,
    data:messageId
})

const deleteReaction = (reactionId) => ({
    type:DELETE_REACTION,
    data:reactionId
})

export const thunkDeleteReaction = (userId,messageId,reactionId) => async (dispatch) => {
    // try {
        const res = await fetch(`/api/messages/${userId}/${messageId}/reaction/${reactionId}/delete`, {
            method:'DELETE'
        })
        if (res.ok)    {
            const data = await res.json()

            dispatch(deleteReaction(data))
            return data
        }else {
                const err = await res.json()
                return {errors:err}
            }
}

export const thunkDeleteMessage = (userId,messageId) => async (dispatch) => {
    // try {
        const res = await fetch(`/api/messages/${userId}/${messageId}/delete`, {
            method:'DELETE'
        })
        if (res.ok)    {
            const data = await res.json()

            dispatch(deleteMessage(data))
            return data
        }else {
                const err = await res.json()
                return {errors:err}
            }
}

export const thunkGetAllMsg = (id, channelId,serverId) => async(dispatch) => {
    const res = await fetch (`/api/messages/${id}/${channelId}/${serverId}`)
    if (res.ok){
        const response = await res.json()
        dispatch(getMessages(response))
    } else{
        const response = await res.json()
    }
}




const initialState = {allMessages:{}}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_MESSAGES: {
            let newState = {...state, allMessages:{...state.allMessages}}
            newState.allMessages = {}
            action.data.forEach(ele => {
                newState.allMessages[ele.id]= ele
            });
            return {...newState}
        }
        case DELETE_MESSAGE: {
            const newState = {...state, allMessages:{...state.allMessages}}
            delete newState.allMessages[action.messageId]
            return newState
        }
        default:
            return state
    }
}
