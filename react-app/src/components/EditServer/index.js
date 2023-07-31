import { thunkEditServer, thunkGetSingleServer } from "../../store/servers"
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom'

function EditServer() {
    const server = useSelector(state => state.servers.singleServer)
    const dispatch = useDispatch()
    const history = useHistory()
    const { serverId,userId} = useParams()
    console.log('server',server)
    const [name, setName] = useState(server.name)
    const [privates, setPrivates] = useState(server.privates)
    const [picture, setPicture] = useState(server.picture)

    const onSubmit = async() => {
        let payload = {}
        const err = await dispatch(thunkEditServer(serverId,name,privates,picture))
    }

    useEffect(() => {
        const err = async () => {
            const err = await dispatch(thunkGetSingleServer(userId,serverId))
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
        <div>
            <label htmlFor="name">name</label>
            <input type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <label htmlFor="public">public</label>
            <input type="checkbox"
                value={privates}
                onChange={(e) => {
                    setPrivates(!privates)
                }}
            />
            <label htmlFor="picture">picture</label>
            <input type="text"
                value={picture}
                onChange={(e) => {
                    setPicture(e.target.value)
                }}
            />
            <button
                onClick={(e) => {
                    onSubmit()
                }}
            >submit</button>
        </div>
    )
}

export default EditServer
