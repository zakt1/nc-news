import { useState } from "react";
import { patchArticleById } from "../utils/api";

const Votes = ({ votes, articleId }) => {
    const [voteChange, setVoteChange] = useState(0)

    const changeVotes = (incOrDec) => {
        setVoteChange((currVotes) => currVotes + incOrDec);
        patchArticleById(articleId, incOrDec)
    }


    return (
        <div>
            <a key={articleId}>{votes + voteChange}</a>
        <button onClick={() => changeVotes(1)}>Upvotez</button>
        <button onClick={() => changeVotes(-1)}>DownVotez</button>
        </div>
        )
}

export default Votes