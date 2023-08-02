
const GET_MESSAGES = 'messages/GET_MESSAGES'
const DELETE_MESSAGE = 'messages/DELETE_MESSAGE'
const DELETE_REACTION = 'messages/DELETE_REACTION'
const CREATE_REACTION = 'message/CREATE_REACTION'

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

const createReaction = (messageId) => ({
    type: GET_MESSAGES,
    data:messageId
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

export const thunkDeleteMessage = (messageId) => async (dispatch) => {
        const res = await fetch(`/api/messages/${messageId}/delete`, {
            method:'DELETE'
        })
        if (res.ok)    {
            const data = await res.json()

            dispatch(deleteMessage(messageId))
            return data
        }else {
                const err = await res.json()
                return {errors:err}
            }
}

export const thunkGetAllMsg = (id, channelId) => async(dispatch) => {
    const res = await fetch (`/api/messages/${id}/${channelId}`)
    if (res.ok){
        const response = await res.json()
        let resss = dispatch(getMessages(response))
        return resss
    } else{
        const response = await res.json()
    }
}

export const thunkCreateReaction = (userId,messageId,emoji,channelId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/messages/${userId}/channel/${channelId}/${messageId}/reaction/new`, {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({userId,messageId,emoji})
        })
        if (response.ok)    {
            const res= await response.json()
            dispatch(createReaction(res))
            return res
        }
    } catch (error) {
        const err = await error.json()
        return {errors:err}
    }
}


const initialState = {allMessages:{}}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_MESSAGES: {
            let newState = {...state, allMessages:{...state.allMessages}}
            newState.allMessages = {}
            // newState.allMessages = action.data
            action.data.messages.forEach(ele => {
                newState.allMessages[ele.id]= ele
            });
            return newState
        }
        case CREATE_REACTION: {
            let newState = {...state, allMessages:{...state.allMessages}}
            newState.allMessages = {}
            action.data.messages.forEach(ele => {
                newState.allMessages[ele.id]= ele
            });
            return newState
        }
        case DELETE_MESSAGE: {
            const newState = {...state, allMessages:{...state.allMessages}}
            delete newState.allMessages[action.data]
            return newState
        }
        default:
            return state
    }
}
