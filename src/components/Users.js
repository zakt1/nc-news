import React, { useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';



const jess = {username: 'jessjelly', avatar_url:'https://i.pinimg.com/originals/13/ee/65/13ee65c80228c4284b97175940db9659.jpg'}

export const Users = () => {
    const [users, setUsers] = useState({});
    const { setLoggedInUser } = useContext(UserContext)

    useEffect(() => {
        setUsers(jess)

    },[])

    const logIn = (newUser) => {
        setLoggedInUser(newUser)
    }

    return (
        <main>
            <h2>Users</h2>
            <ul className="Users__List">
                {users.map((user) => {
                    return (
                        <li key={user.username} className="User__profile">
                            <h3>{user.username}</h3>
                            <img
                            className="Nav_avatar"
                            src={loggedInUser.avatar_url}
                            alt='sfdg'
                            ></img>
                            <button onClick={() => logIn(user)}>Log Me in</button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Users