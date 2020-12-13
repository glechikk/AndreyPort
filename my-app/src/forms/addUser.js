import React, { useState } from 'react'
import './addUser.css'
const AddUser = props => {

    const startFormState = { id: null, name:'', username:'' }

    const [user, setUser] = useState(startFormState)

    const handleInputChange = event => {
        const {name , value} = event.currentTarget
        setUser({...user, [name]:value})
    }
    const handleSubmit = event =>{
        event.preventDefault()
        if(!user.name || !user.username) return
        props.addUser(user)
        setUser(startFormState)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            value={user.name}
            onChange={handleInputChange}/>
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            value={user.username}
            onChange={handleInputChange}/>
            <button className="add-btn">Add new user</button>
        </form>
    )
}
export default AddUser;