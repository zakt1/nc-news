import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getArticleComments } from '../utils/api';
import DeleteComment from './DeleteComment';


const ArticleCommentsList = (article_id) => {
    // article_id=34
    // console.log(article_id, '<< ArticleCommentsList article_id')
    const [articleComments, setComments] = useState([])
    useEffect(() => {
        getArticleComments(article_id).then((res) => {
            setComments(res)
        })
    }, [article_id])

    return (
        <div>
            <ul>
                {articleComments.map((comment) => {
                    return (

                            <li key={comment.comment_id}> {comment.author}: {comment.body}</li>
                    )
                })}
            </ul>


        </div>
    )
}

export default ArticleCommentsList