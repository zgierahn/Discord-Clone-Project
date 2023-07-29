import { thunkGetSingleServer } from "../../store/servers"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'
// import the socket
import { io } from 'socket.io-client';

// outside of your component, initialize the socket variable
let socket;

function SingleServer() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userId, serverId, channelId } = useParams()

    const [messages, setMessages] = useState([])
    const [chatInput, setChatInput] = useState("");

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        // create websocket
        socket = io();
        // listen for chat events
        socket.on("chat", (chat) => {
            // when we recieve a chat, add it into our messages array in state
            setMessages(messages => [...messages, chat])
        })
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    }

    const sendChat = (e) => {
        e.preventDefault()
        // emit a message
        socket.emit("chat", { user: user.username, msg: chatInput });
        // clear the input field after the message is sent
        setChatInput("")
    }

    useEffect(() => {
        dispatch(thunkGetSingleServer(userId, serverId, channelId))
    }, [dispatch])

    const server = useSelector(state => Object.values(state.servers.singleServer))
    return ( //socket walkthrough in mod6 resourse says to add ---user && but im not if problem maybe this
        <div>
            <div>
                {messages.map((message, ind) => (
                    <div key={ind}>{`${message.user}: ${message.msg}`}</div>
                ))}
            </div>
            <form onSubmit={sendChat}>
                <input
                    value={chatInput}
                    onChange={updateChatInput}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SingleServer
