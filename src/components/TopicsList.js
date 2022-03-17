import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';


const TopicsList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((res) => {
            console.log(res)
            setTopics(res)
            
        })
    },[])

    return (
        
        <ul className='topics-list'>
            {topics.map((topic)=> {
                return (
                    <Link className='topic-item' key={topic.slug} to={`/api/articles?topic=${topic.slug}`}>
                        <li className='topicItem-slug'>{topic.slug}</li>
                        </Link>
                )

            })}
        </ul>
    )
}

export default TopicsList;