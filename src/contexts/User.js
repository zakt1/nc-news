
import { createContext } from 'react'
import { useEffect, useState } from 'react';


export const UserContext = createContext() 

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({
        username: 'jessjelly'
      });
    const logOutObj = {
        username: undefined
      };
      const isLoggedIn = loggedInUser.username !== undefined
      console.log(loggedInUser, '<< User.js loggedInUser')
      console.log(isLoggedIn, '<<< isLoggedIn')
      if (isLoggedIn){
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
          
      }else{
        return (
            <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
            {props.children}
            {console.log(props.children, '<< User.js props.children')}
            <span>User: {'not logged in'}</span>
            <button onClick={() => setLoggedInUser({username: 'jessjelly'})}> Log me in</button>
    
            <button onClick={()=> setLoggedInUser(logOutObj)}> Log me out</button>
            </UserContext.Provider>
        )
      }
}