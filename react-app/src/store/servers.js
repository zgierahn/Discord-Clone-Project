const GET_SERVERS = "servers/GET_SERVERS"
const GET_SINGLE_SERVER = "servers/GET_SINGLE_SERVER"

const getServer = (servers) => ({
    type:GET_SERVERS,
    data:servers
})

const getSingleServer = (server) => ({
    type:GET_SINGLE_SERVER,
    data:server
})

export const thunkGetSingleServer = (userId,serverId,channelId) => async(dispatch) => {
    const res = await fetch(`/api/servers/${userId}/${serverId}/${channelId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getSingleServer(data))
        return data
    }
    else {
        const err = await res.json()
        return {errors:err}
    }
}

export const thunkGetServers = (id) => async(dispatch) => {
    const res = await fetch(`/api/servers/${id}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getServer(data))
        return data
    }
    else {
        const err = await res.json()
        return {errors:err}
    }
}

const initialState = {allServers:{}, singleServer:{}}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERVERS: {
            let newState = {...state, allServers:{...state.allServers}}
            newState.allServers = {}
            action.data.forEach(ele => {
                newState.allServers[ele.id]= ele
            });
            return {...newState}
        }
        case GET_SINGLE_SERVER:{
            let newState = {...state, singleServer:{...state.singleServer}}
            newState.singleServer = {}
            action.data.forEach(ele => {
                newState.singleServer[ele.id]= ele
            });
            return {...newState}
        }
        default:
            return state
    }
}
