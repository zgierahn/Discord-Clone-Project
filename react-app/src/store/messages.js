
const GET_MESSAGES = 'messages/GET_MESSAGES'


const getMessages = (data) => ({
    type: GET_MESSAGES,
    data
})




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
        default:
            return state
    }
}
