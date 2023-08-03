const GET_CHANNELS = "channels/GET_CHANNELS"
const CREATE_CHANNEL = 'channels/CREATE_CHANNEL'
const DELETE_CHANNEL = 'channels/DELETE_CHANNEL'
const EDIT_CHANNEL = 'channels/EDIT_CHANNEL'
const GET_SINGLE_CHANNEL = "channels/GET_SINGLE_CHANNEL"
const LOGOUT = 'channels/LOGOUT'


const logout = () => ({
    type:LOGOUT
})

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
    console.log('serverId',serverId)
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

export const thunkLogout = () => async (dispatch) => {
    dispatch(logout())
}

export const thunkCreateChannel = (name, serverId) => async (dispatch) => {

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
        else if (response.status < 500){
        const err = await response.json()
        return err
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
export const thunkGetSingleChannel = (channelId) => async(dispatch) => {
    const res = await fetch(`/api/channels/${channelId}`)
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

export const thunkEditChannel = (channelId,name) => async (dispatch) => {

        console.log('are we in the thiunk')
        const response = await fetch(`/api/channels/edit/${channelId}`, {
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name})
        })
        if (response.ok)    {
            const channel = await response.json()
            dispatch(editChannel(channel))
            return channel
        }
        else if (response.status < 500){
        const err = await response.json()
        return err
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
        case LOGOUT:{
            let newState = {...state, singleChannel:{...state.singleChannel}}
            newState = {}
            newState.allChannels = {}
            newState.singleChannel = {}
            return newState
        }
        case GET_SINGLE_CHANNEL:{
            let newState = {...state, singleChannel:{...state.singleChannel}}

            // console.log('newState', newState)
            newState.singleChannel=action.data
            return newState
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
            const newState = {...state, singleChannel:{...state.singleChannel},allChannels:{...state.allChannels}}
            console.log('editchannelstate', newState)
            newState.singleChannel = action.data
            return newState
        }
        default:
            return state
    }
}
