import React from 'react'

import './tables.css';

const Table=props=>{
    const handleDeleteUser = id =>{
        let answer = window.confirm('Are you sure?')
    if(answer){
        props.deleteUser(id)
    }
    }
    
    return(
       <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Username</th>
                   <th>Actions</th>
               </tr>
           </thead>
            <tbody>
                {props.users.length > 0 ?(
                 props.users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button 
                            className="muted"
                            onClick={() => {
                                props.editRow(user)
                            }}
                            >Change</button>
                            <button 
                            className="muted"
                            onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </td>
                 <td>{user.id}</td>
                    </tr>
                    
                ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )}
            </tbody>
       </table>
    )
}
export default Table;