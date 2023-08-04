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
            <div className="makechannelbackg" >
            <h3 className="headerCreateChannel2">Edit Server</h3>
            <label htmlFor="name" className="serverNameLabel">NAME</label>
            <input type="text"className="serverInput"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <label htmlFor="picture" className="serverNameLabel1">PICTURE</label>
            <input type="text" className="serverInput"
                value={picture}
                onChange={(e) => {
                    setPicture(e.target.value)
                }}
            />
                <div className="errormessagescreateserver">{Object.values(errors).length > 0 ? errors.error : ''}</div>
                <label htmlFor="public" className="serverNameLabel">PUBLIC</label>
                <input type="checkbox" className="serverInput2"
                    value={privates}
                    onChange={(e) => {
                        setPrivates(!privates)
                    }}
                />
            <div className="buttonContCreateServer">
            <div className="cancelChannel" onClick={()=>
                closeModal(false)
            }>Cancel</div>
            <button className="createChannelBtn"

                onClick={(e) => {
                    onSubmit()
                }}
            >Edit Server</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default EditServer
