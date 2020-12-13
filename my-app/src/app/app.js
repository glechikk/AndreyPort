import React, {useState} from 'react'
import Table from '../tables'
import AddUser from '../forms'
import EditUserForm from '../forms/editUser'

import './app.css';

const App=()=>{
  const usersData = [
      {id:1 , name:'Adnrey', username:'guchiflipflap'},
      {id:2 , name:'Ivan', username:'activniyglinomes'},
  ]

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const startFromState = {id:null, name:'',username:''}

  const [currentUser, setCurrentUser] = useState(startFromState)

  const addUser = user => {

    user.id = users.length + 1
    setUsers([...users, user])

  }
  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updateUser) => {

      setEditing(false)
      setUsers(users.map(user =>(user.id === id ? updateUser : user)))

  }
  const editRow = user => {
      setEditing(true)
      setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

    return(
        <div className="container">
            <div className="flex-row">
                {editing ? (
                    <div className="column">
                    <h2>Edit user</h2>
                    <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                    />
                    </div>
                ) : (
                    <div className="column">
                    <h2>Add user</h2>
                    <AddUser addUser={addUser}/>
                    </div>)}

                <div className="column">
                <h2>View users</h2>
                <Table users={users} editRow={editRow} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
      
    )
}
export default App;