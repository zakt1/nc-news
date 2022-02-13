import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getArticleComments } from '../utils/api';


const ArticleCommentsList = (article_id) => {
    // article_id=34
    console.log(article_id, '<< ArticleCommentsList article_id')
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
                        
                        <a key={comment.comment_id}>
                        {/* {if ({comment.author == <loggedInUser.username/>)} */}
                        <li key={comment.comment_id}> {comment.votes} {comment.author}: {comment.body}</li>

                         {/* <button key={comment.comment_id+1} onClick={() => setDeleteCom(true)}>uCanDeleteThis</button> */}
                        </a>
                    )
                })}
            </ul>


        </div>
    )
}

export default ArticleCommentsList