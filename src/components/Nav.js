import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { getTopics } from "../utils/api"
import TopicsList from "./TopicsList"
import { useContext } from 'react';
import { UserContext, UserProvider } from '../contexts/User';
import Users from './Users'

const Nav = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const logOutObj =null
    return (
        <nav className='nav-section'>
            <h4>Topics</h4>
            <TopicsList/>
            {/* <li><NavLink to ='/'>Home</NavLink></li>

            <li><NavLink to ='/api/articles'>Articles List</NavLink></li> */}
           
            <UserProvider/>
        
        </nav>
    );
};

export default Nav;