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

    const onSubmit = async() => {
        // let payload = {}
        const err = await dispatch(thunkCreateServer(name,privates,picture))
    }

    return (
        <div className="makechannelmodals">
            <div className="makechannelbackg" >
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
        </div>
    )
}

export default ServerForm
