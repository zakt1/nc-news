import { useState } from "react";
import { patchArticleById } from "../utils/api";

const Votes = ({ votes, articleId }) => {
    const [voteChange, setVoteChange] = useState(0)

    const changeVotes = (incOrDec) => {
        if (voteChange === 0) {
            setVoteChange((currVotes) => currVotes + incOrDec);
            patchArticleById(articleId, incOrDec);    

        } else if ( voteChange=== 1){

            if (incOrDec ===-1){
                setVoteChange((currVotes) => currVotes + incOrDec);
                patchArticleById(articleId, incOrDec);  
            }
        } else if (voteChange=== -1) {
            if (incOrDec ===1){
                setVoteChange((currVotes) => currVotes + incOrDec);
                patchArticleById(articleId, incOrDec);  
            }

        }
  
    }


    return (
        <div className='vote-item'>
            <a key={articleId}>{votes + voteChange}</a> <button className="votes-button" onClick={() => changeVotes(1)}>👍 Real</button>   <button className="votes-button" onClick={() => changeVotes(-1)}>👎 Fake</button>
        </div>
        )
}

export default Votes