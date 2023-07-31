const GET_CHANNELS = "channels/GET_CHANNELS"
const CREATE_CHANNEL = 'channels/CREATE_CHANNEL'
const DELETE_CHANNEL = 'channels/DELETE_CHANNEL'
const EDIT_CHANNEL = 'channels/EDIT_CHANNEL'
const GET_SINGLE_CHANNEL = "channels/GET_SINGLE_CHANNEL"

const getChannel = (channels) => ({
    type:GET_CHANNELS,
    data:channels
})
const createChannel = (data) => ({
    type:CREATE_CHANNEL,
    data
})
const deleteChannel = (channelId) => ({
    type:DELETE_CHANNEL,
    data:channelId
})
const editChannel = (channelId) => ({
    type:EDIT_CHANNEL,
    data:channelId
})
const getSingleChannel = (channel) => ({
    type:GET_SINGLE_CHANNEL,
    data:channel
})

export const thunkGetChannels = (id, serverId) => async(dispatch) => {
    const res = await fetch(`/api/channels/${id}/${serverId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getChannel(data))
        console.log('data', data)
        return data
    }
    else {
        const err = await res.json()
        return {errors:err}
    }
}

export const thunkCreateChannel = (name, serverId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/channels/${serverId}/new`, {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name})
        })
        if (response.ok)    {
            const server = await response.json()
            dispatch(createChannel(server))
            return server
        }
    } catch (error) {
        const err = await error.json()
        return {errors:err}
    }
}

export const thunkDeleteChannel = (channelId) => async (dispatch) => {
    // try {
        const res = await fetch(`/api/channels/delete/${channelId}`, {
            method:'DELETE'
        })
        if (res.ok)    {
            const data = await res.json()

            dispatch(deleteChannel(data))
            return data
        }else {
                const err = await res.json()
                return {errors:err}
            }
}
export const thunkGetSingleChannel = (userId,serverId,channelId) => async(dispatch) => {
    const res = await fetch(`/api/channels/${userId}/${serverId}/${channelId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getSingleChannel(data))
        return data
    }
    else {
        const err = await res.json()
        return {errors:err}
    }
}

export const thunkEditChannel = (channelId, data) => async (dispatch) => {
    try {
        const response = await fetch(`/api/channels/edit/${channelId}`, {
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        if (response.ok)    {
            const channel = await response.json()
            dispatch(editChannel(channel))
            return channel
        }
    } catch (error) {
        const err = await error.json()
        return {errors:err}
    }
}

const initialState = {allChannels:{}, singleChannel:{}}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS: {
            let newState = {...state, allChannels:{...state.allChannels}}
            newState.allChannels = {}
            action.data.forEach(ele => {
                newState.allChannels[ele.id]= ele
            });
            return {...newState}
        }
        case GET_SINGLE_CHANNEL:{
            let newState = {...state, singleChannel:{...state.singleChannel}}
            newState.singleChannel = {}
            action.data.forEach(ele => {
                newState.singleChannel[ele.id]= ele
            });
            return {...newState}
        }
        case CREATE_CHANNEL: {
            const newState = {...state}
            newState.allChannels[action.data.id] = action.data
            return newState
        }
        case DELETE_CHANNEL: {
            const newState = {...state, allChannels:{...state.allChannels}}
            delete newState.allChannels[action.channelId]
            return newState
        }
        case EDIT_CHANNEL: {
            const newState = {...state, singleChannel:{...state.singleChannel}}
            newState.singleChannel = action.data
            return newState
        }
        default:
            return state
    }
}
