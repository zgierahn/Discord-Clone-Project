import { thunkEditServer, thunkGetServers, thunkGetSingleServer } from "../../store/servers"
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'

function EditServer({closeModal, serverValue}) {
    const server = useSelector(state => state.servers.singleServer)
    const dispatch = useDispatch()
    // const history = useHistory()
    const { serverId,userId} = useParams()
    const [errors, setErrors] = useState({})
    const [name, setName] = useState(server.name)
    const [privates, setPrivates] = useState(server.privates)
    const [picture, setPicture] = useState(server.picture)

    const onSubmit = async() => {
        const err = await dispatch(thunkEditServer(serverValue,name,privates,picture))
        if (err.error) {
            await setErrors(err)
        }
        else {
            dispatch(thunkGetServers(userId))
            closeModal(false)
        }
    }

    useEffect(() => {
        const err = async () => {
            const err = await dispatch(thunkGetSingleServer(userId,serverValue))
            // setErrors(err)
        }
        err()
    },[serverId])

    useEffect(() => {
        setName(server.name)
        setPrivates(server.privates)
        setPicture(server.picture)
    },[server])

    if (!server) {
        return null
    }

    return (
        <>
        <div className="makechannelmodals">
            <div className="makechannelbackg">
            <label htmlFor="name" className="channelNameLabel">name</label>
            <input type="text" className="channelInput"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
             <div className="errormessagescreateserver">{Object.values(errors).length > 0 ? errors.error : ''}</div>
            <label htmlFor="public" className="channelNameLabel">public</label>
            <input type="checkbox" className="channelInput"
                value={privates}
                onChange={(e) => {
                    setPrivates(!privates)
                }}
            />
            <label htmlFor="picture" className="channelNameLabel">picture</label>
            <input type="text" className="channelInput"
                value={picture}
                onChange={(e) => {
                    setPicture(e.target.value)
                }}
            />
            <button className="createChannelBtn"
                onClick={(e) => {
                    onSubmit()
                }}
            >submit</button>
            <button className="cancelChannel" onClick={()=>
                closeModal(false)
                }>Cancel</button>
             </div>
        </div>
        </>
    )
}

export default EditServer
