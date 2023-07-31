
const GET_MESSAGES = 'messages/GET_MESSAGES'


const getMessages = (data) => ({
    type: GET_MESSAGES,
    data
})




export const thunkGetAllMsg = (id, channelId) => async(dispatch) => {
    const res = await fetch (`/api/messages/${id}/${channelId}`)
    if (res.ok){
        const response = await res.json()
        console.log(response, 'it made it to the thunkkkkkkkkk')
        dispatch(getMessages(response))
    } else{
        const response = await res.json()
        console.log(response)
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
