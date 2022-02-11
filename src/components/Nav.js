import React from 'react';
import { Link } from 'react-router-dom';
// import { getTopics } from "../utils/api"
import TopicsList from "./TopicsList"
import { useContext } from 'react';
import { UserContext, UserProvider } from '../contexts/User';
import Users from './Users'

const Nav = () => {
    console.log('displaying nav.js')
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    console.log(loggedInUser, '<< loggedInUser Nav.js')
    const logOutObj =null
    return (
        <nav>
            <h4>Topics..</h4>
            <TopicsList/>
            <Link to ='/'>Home</Link>

            <Link to ='/api/articles'>Available articles List</Link>
            {/* <Link to ='/users'>Available Users List</Link> */}
            {/* <Link to="/articles/:topic" element={<TopicsList/>}>topics</Link> */}

            {/* <span>User: {loggedInUser.username}</span>
            <img
            className="Nav_avatar"
            src={loggedInUser.avatar_url}
            alt={loggedInUser.username}></img> */}

            {/* <button onClick={() => {setLoggedInUser(loggedInUser)}}> Log me in</button> */}
            <UserProvider/>
            {/* <button onClick={() => {<UserProvider/>}}> Log me in</button>

            <button onClick={()=> setLoggedInUser(logOutObj)}> Log me out</button> */}
        </nav>
    );
};

export default Nav;