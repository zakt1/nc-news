
import { createContext } from 'react'
import { useEffect, useState } from 'react';


export const UserContext = createContext() 

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({
        username: 'jessjelly'
      });
    const logOutObj = null

      const isLoggedIn = loggedInUser.username !== null
    
      if (isLoggedIn){
          
      }
      return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
        {props.children}
        {console.log(props.children, '<< User.js props.children')}
        <span>User: {loggedInUser.username}</span>
        <button onClick={() => {<UserProvider/>}}> Log me in</button>

        <button onClick={()=> setLoggedInUser(logOutObj)}> Log me out</button>
            {/* <img
            className="Nav_avatar"
            src={loggedInUser.avatar_url}
            alt={loggedInUser.username}></img> */}
        </UserContext.Provider>
      )
}