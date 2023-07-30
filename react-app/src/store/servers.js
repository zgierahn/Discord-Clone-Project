const GET_SERVERS = "servers/GET_SERVERS"

const getServer = (servers) => ({
    type:GET_SERVERS,
    data:servers
})

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


// -----still workin gon this code

// export const thunkGetAllMsg = (id, channelId) => async(dispatch) => {
//     const res = await fetch (`/api/servers/${id}/${channelId}`)
//     if (res.ok){
//         const response = await res.json()
//         console.log(response, 'it made it to the thunkkkkkkkkk')
//     } else{
//         const response = await res.json()
//         console.log(response)
//     }
// }




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
        default:
            return state
    }
}
