import { thunkCreateServer } from "../../store/servers"
import { useState } from 'react'
import { useDispatch  } from 'react-redux'  //useSelector
// import { useHistory } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import './serverform.css'

function ServerForm({closeModal}) {
    const dispatch = useDispatch()
    // const history = useHistory()
    // const { userId } = useParams()

    const [name, setName] = useState('')
    const [privates, setPrivates] = useState(false)
    const [picture, setPicture] = useState('')
    const [errors, setErrors] = useState({})

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkCreateServer(name,privates,picture))
        if (err.error) {
            await setErrors(err)
        }
        else {
            closeModal(false)
        }
    }
    let disable=true
    if(name.length){
       disable=false
    }

    return (
        <>
        <div className="makechannelmodals">
            <div className="makechannelbackg" >
            <h3 className="headerCreateChannel2">Create Server</h3>
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
                placeholder="optional:image link here"
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
            disabled={disable}
                onClick={(e) => {
                    onSubmit()
                }}
            >Create Server</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default ServerForm
