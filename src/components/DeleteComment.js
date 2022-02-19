import { useState } from "react";
import { deleteComment } from '../utils/api';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const DeleteComment = ({article_id, commentId, commentAuthor}) => {

    const { loggedInUser, setLoggedInUser, isLoggedIn  } = useContext(UserContext)
    // console.log(loggedInUser, '<< DeleteComment context loggedInUser')
    // console.log(setLoggedInUser, '<< setLoggedInUser DeleteComment')
    // console.log(isLoggedIn, '<< isLoggedIn DeleteComment')

    let commentMatch = false

    if(commentAuthor ===loggedInUser.username){
        commentMatch = true
    }
        // console.log(commentMatch, '<< commentMatch')

        
        
        // console.log(article_id,'<< DeleteComment: article_id')
        // console.log(commentId,'<< DeleteComment: commentId')
        // console.log(commentAuthor, '<< DeleteComment: commentAuthor' )
        
        const [deleteComId, setDeleteComId] =useState(0)
        
        console.log(deleteComId,'<< deletecomId before setState')
        
        const deleteComById = () => {
            
            // console.log(commentId, '<COMMENTID (deleteComById_')
            // console.log(article_id,'<<article_id (deleteComById)')
            setDeleteComId(commentId)
            // console.log(deleteComId, 'deleteComId after setState')
            
            deleteComment(article_id, deleteComId)
            .then((res) => {
                // console.log(res, '<< DeleteComment response')
            })
            
        }
        if(commentMatch){
            return (
                
                <div>
                 <button key={deleteComId} onClick={() => deleteComById() }>Delete Comment</button>
             </div>
                  )
    }  else{
        return <div></div>
        
        }
        
    


}

export default DeleteComment