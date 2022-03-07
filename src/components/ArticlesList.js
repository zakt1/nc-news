import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import Votes from './Votes'
import Moment from 'moment'



const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState("created_at")
    const [sortOrder, setSortOrder] =useState("DESC")

    const searchTopic = searchParams.get("topic");


    //  console.log(props, '<< props')
    
    useEffect(() => {
        getArticles(searchTopic, query, sortOrder)
        .then((res) => {
            setArticles(res)
        })
    }, [searchTopic, query, sortOrder]);


    return(
        <main className='article-list'>
            <h1> Articles - {searchTopic}</h1>
            <h4 className='sort-by'>Sortby:</h4>
            <select className='sortBy-button' name="Sort by:" onChange={(event) => {
            setQuery(event.target.value)
            }}>
            <option value="created_at">Date posted</option>
            <option value="title">article name (A-Z)</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
                </select>
            <h4 className='order-text'>Order:</h4>
            <select className='order-select' name="Order" onChange={(event) => {
                setSortOrder(event.target.value)
            }}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select>
            <ul>
                {articles.map((article,index) => {
                    return (
                        <section className='articleList-section'>
                        {/* <a key={article.id}>{article.votes}</a> */}

                        <Link key={article.article_id} to={`/api/articles/${article.article_id}`}>
                        <li>{article.title}  - {article.author} </li> 
                        </Link>
                        <li>posted: {Moment(article.created_at).format("MMM DD YYYY")}</li>
                        <Votes votes={article.votes} articleId={article.article_id} />

                        </section>


                       
                    )
                })}
            </ul>
        </main>
    )
};

export default ArticlesList