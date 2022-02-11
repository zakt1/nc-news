import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleArticle, getArticleComments } from '../utils/api';
import { getTopics } from "../utils/api"
//for comments post/delete..
import { useContext } from 'react';
import { UserContext } from '../contexts/User';


const SingleArticle = () => {
    const { loggedInUser, setLoggedInUser, isLoggedIn  } = useContext(UserContext)
    console.log(loggedInUser, '<< singleArticle context loggedInUser')
    console.log(setLoggedInUser, '<< setLoggedInUser')
    console.log(isLoggedIn, '<< isLoggedIn')
    
    const { article_id }= useParams()
    console.log(article_id,'<< params SingArticle')
    getTopics().then((res) =>{
        console.log(res)
    })

    const [singleArticle, setSingleArticle] = useState({})

    const [deleteCom, setDeleteCom] =useState()
    
    // const [commentMatch, setCommentMatch] = useState(false)

    useEffect(() => {
        getSingleArticle(article_id).then((res) => {
            setSingleArticle(res)
        })
    }, [article_id])

     const [articleComments, setComments] = useState([])
     useEffect(() => {
         getArticleComments(article_id).then((res) => {
             setComments(res)
         })
     }, [article_id])
     console.log(articleComments, '<< articleComments after setState')


     


    return (
        <div>

            <h1>{singleArticle.title} </h1>
            <h2>author: {singleArticle.author}</h2>
            <h2>votes: {singleArticle.votes}</h2>
            <h3>posted {singleArticle.created_at}</h3>
            <p> {singleArticle.body}</p>
            <h4>comments: {singleArticle.comment_count}</h4>

            {/* <h5>{articleComments[0].author}</h5> */}

            <ul>
                {articleComments.map((comment) => {
                    return (
                        
                        <a key={comment.comment_id}>
                        {/* {if ({comment.author == <loggedInUser.username/>)} */}
                        <li key={comment.comment_id}> {comment.votes} {comment.author}: {comment.body}</li>

                         <button key={comment.comment_id+1} onClick={() => setDeleteCom(true)}>uCanDeleteThis</button>
                        </a>
                    )
                })}
            </ul>

        </div>
    )

}

export default SingleArticle 
