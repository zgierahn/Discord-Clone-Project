import { thunkCreateServer } from "../../store/servers"
import { useState } from 'react'
import { useDispatch  } from 'react-redux'  //useSelector
// import { useHistory } from "react-router-dom"
// import { useParams } from 'react-router-dom'


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
            disabled={disable}
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

export default ServerForm
