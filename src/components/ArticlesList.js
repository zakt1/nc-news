import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import Votes from './Votes'



const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();

    const searchTopic = searchParams.get("topic");
    console.log(searchTopic,'<< searchTopic')

    //  console.log(props, '<< props')
    
    useEffect(() => {
        getArticles(searchTopic)
        .then((res) => {
            setArticles(res)
        })
    }, [searchTopic]);


    return(
        <main>
            <h1> Articles - {searchTopic}</h1>
            <ul>
                {articles.map((article,index) => {
                    return (
                        <main>
                        {/* <a key={article.id}>{article.votes}</a> */}

                        <Link key={article.article_id} to={`/api/articles/${article.article_id}`}>
                        <li>{article.title} {article.author}</li> 
                        </Link>
                        <Votes votes={article.votes} articleId={article.article_id} />

                        </main>


                       
                    )
                })}
            </ul>
        </main>
    )
};

export default ArticlesList