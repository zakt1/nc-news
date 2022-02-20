import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Moment from 'moment'
import { getSingleArticle, getArticleComments, postComment, deleteComment } from '../utils/api';
import { getTopics } from "../utils/api"
//for comments post/delete..
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import axios from 'axios';
import ArticleCommentsList from './ArticleCommentsList';
import Votes from './Votes';
import DeleteComment from './DeleteComment';


const SingleArticle = (props) => {
    // 


    const { loggedInUser, setLoggedInUser, isLoggedIn  } = useContext(UserContext)
    // console.log(loggedInUser, '<< singleArticle context loggedInUser')
    // console.log(setLoggedInUser, '<< setLoggedInUser')
    // console.log(isLoggedIn, '<< isLoggedIn')
    
    
    const { article_id }= useParams()
    // console.log(article_id,'<< article_id params SingArticle')
    getTopics().then((res) =>{
        // console.log(res, '<< getTopics response')
    })
    const newArticleId = article_id

    const [singleArticle, setSingleArticle] = useState({})


    
    
    ArticleCommentsList(article_id)
    // const [commentMatch, setCommentMatch] = useState(false)
    
    useEffect(() => {
        getSingleArticle(article_id).then((res) => {
            setSingleArticle(res)
        })
    }, [article_id])
    
    // POST comment  -------------------------------------- ---------------------------
    
    const [formValue, setFormValue] = useState({
        username: loggedInUser.username,
        body: ''
    })
    
    
    const handleChange = (event, props) => {
        console.log(props, '<< props handleChange')
        // console.log(event.target.value, '<< event.target.value')
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
        console.log(formValue, '<< formValue handleChange')
        // console.log(event.target.value, '<< event.target.value')
        
    }
    
        const [articleComments, setComments] = useState([])
        useEffect(() => {
            getArticleComments(article_id).then((res) => {
                setComments(res)
            })
        }, [article_id])
        // console.log(articleComments, '<< articleComments after setState')

    const commData = new FormData()
    commData.append("username", formValue.username)
    commData.append("body", formValue.body)
    // console.log(formValue, '<<handleSubmit formValue2')
    
    const handleSubmit = (event, props) => {
        event.preventDefault()
        
        // console.log(formValue, '<<handleSubmit formValue1')
        // console.log(commData, '<<handleSubmit commData')
        
        if (isLoggedIn){
            // const egId = 34

            postComment(article_id, formValue)
            .then((res) => {
                
                // getSingleArticle()
                console.log(res, '<<< postComment(article_id, formValue)')
                
                return res
            })
            .catch((err) => {
                console.log(err, '<< postComment errorhnadle')
            })

            
         }else{
             return 'hi'
         }
    }


    return (
        <main className='article-main'>

            <h1 className='articleList-section'>{singleArticle.title} </h1>
            <h4 className='author-span'>author: {singleArticle.author}</h4>
            <h4 className='posted-on'>posted on {Moment(singleArticle.created_at).format("MMM DD YYYY")}</h4>
            <h3>votes:<Votes votes={singleArticle.votes} articleId={singleArticle.article_id} /></h3>
            <p className='article-body'> {singleArticle.body}</p>
            <h4 className='comment-count'>comments: {singleArticle.comment_count}</h4>



            <form onSubmit={handleSubmit}>
                <input
                className='input-box'
                name="body"
                id="comment-post"
                type="text"
                placeholder="write a comment"
                // value={formValue.username.username}
                onChange={handleChange}
                required

                />

                <button type="submit">Post</button>

            </form>

            {/* <h5>{articleComments[0].author}</h5> */}

            <ul className='comments-list'>
                {articleComments.map((comment) => {
                    return (
                        
                        <ul className='comment-item'  key={comment.comment_id} >
                        {/* {if ({comment.author == <loggedInUser.username/>)} */}
                        <li className='single-comment'  key={comment.comment_id}> {comment.votes} {comment.author}: {comment.body}</li>

                        <DeleteComment  article_id={singleArticle.article_id} commentId={comment.comment_id} commentAuthor={comment.author} />
                        </ul>
                    )
                })}
            </ul>

        </main>
    )

}

export default SingleArticle 
