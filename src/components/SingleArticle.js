import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleArticle, getArticleComments, postComment } from '../utils/api';
import { getTopics } from "../utils/api"
//for comments post/delete..
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import axios from 'axios';
import ArticleCommentsList from './ArticleCommentsList';


const SingleArticle = (props) => {
    console.log(props, '<< props SingleArticle')


    const { loggedInUser, setLoggedInUser, isLoggedIn  } = useContext(UserContext)
    console.log(loggedInUser, '<< singleArticle context loggedInUser')
    console.log(setLoggedInUser, '<< setLoggedInUser')
    console.log(isLoggedIn, '<< isLoggedIn')
    
    
    const { article_id }= useParams()
    console.log(article_id,'<< article_id params SingArticle')
    getTopics().then((res) =>{
        // console.log(res, '<< getTopics response')
    })
    const newArticleId = article_id

    const [singleArticle, setSingleArticle] = useState({})


    const [deleteCom, setDeleteCom] =useState()

    ArticleCommentsList(article_id)
    // const [commentMatch, setCommentMatch] = useState(false)

    useEffect(() => {
        getSingleArticle(article_id).then((res) => {
            setSingleArticle(res)
        })
    }, [article_id])
    
    // POST comment handling -------------------------------------- ---------------------------
    
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
        console.log(articleComments, '<< articleComments after setState')

    const commData = new FormData()
    commData.append("username", formValue.username)
    commData.append("body", formValue.body)
    console.log(formValue, '<<handleSubmit formValue2')
    
    const handleSubmit = (event, props) => {
        event.preventDefault()
        
        console.log(formValue, '<<handleSubmit formValue1')
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
    
    // const handleSubmit = async() => {
    //     const commsData = new FormData()
    //         commsData.append("username", formValue.username)
    //         commsData.append("body", formValue.body)
    //         console.log(commsData, '<<handleSubmit formValue2')

    //     try {
    //         const response = await axios({
    //             method: "post",
    //             url: `/api/articles/${article_id}/comments`,
    //             data: commsData,
    //             headers: { "Content-Type": "multipart/form-data" }
    //         })
    //     } catch(error) {
    //         console.log(error)
    //     }
    // } 
    


    return (
        <div>

            <h1>{singleArticle.title} </h1>
            <h2>author: {singleArticle.author}</h2>
            <h2>votes: {singleArticle.votes}</h2>
            <h3>posted {singleArticle.created_at}</h3>
            <p> {singleArticle.body}</p>
            <h4>comments: {singleArticle.comment_count}</h4>

            <Link key="anythingRandom" to={`/api/articles/${article_id}/comments`}>
                <button key="anythingRandom2" oncClick={ArticleCommentsList(article_id)}>GoToComments</button>
            </Link>


            <form onSubmit={handleSubmit}>
                <input
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
