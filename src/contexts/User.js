
import { createContext } from 'react'
import { useEffect, useState } from 'react';


export const UserContext = createContext('jess') 

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({
        username: 'jessjelly'
      });
    const logOutObj = {
        username: undefined
      };
      const isLoggedIn = loggedInUser.username !== undefined
      let placeholderUsername = "enter ' " + loggedInUser.username +" '"
      console.log(loggedInUser, '<< User.js loggedInUser')
      console.log(isLoggedIn, '<<< isLoggedIn')
      if (isLoggedIn){
        placeholderUsername= "'" + `${loggedInUser.username}'`
      return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
        {props.children}
  
        {console.log(props.children, '<< User.js props.children')}
        <span className='username'>username</span>
        <input className='inputBox-username' placeholder={placeholderUsername}></input>

        {/* <button className='login-button' onClick={() => {{<UserProvider/>}}}> Login</button> */}
        

        <button className='logout-button' onClick={()=> setLoggedInUser(logOutObj)}> Log out</button>
    
            {/* <img
            className="Nav_avatar"
            src={loggedInUser.avatar_url}
            alt={loggedInUser.username}></img> */}
        </UserContext.Provider>
      )
          
      }else{
        return (
            <UserContext.Provider className='UserContext' value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
            {props.children}
            {console.log(props.children, '<< User.js props.children')}
            <span className='username'>User: {'not logged in'}</span>
            <button onClick={() => setLoggedInUser({username: 'jessjelly'})}> Log me in</button>
    
            {/* <button onClick={()=> setLoggedInUser(logOutObj)}> Log me out</button> */}
            </UserContext.Provider>
        )
      }
}