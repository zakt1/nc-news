import axios from 'axios';


const newsApi = axios.create({
    baseURL: 'https://real-fake-newz-app.herokuapp.com/'
})

export const getArticles = (searchTopic) => {
    let path = '/api/articles';
    console.log(searchTopic,'<< searchTopic api')
    if (searchTopic) path += `?topic=${searchTopic}`;

    return newsApi.get(path)
    .then((res)=> {
        return res.data
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`api/articles/${article_id}`)
    .then((res) => {
        console.log(res.data,'<< getSingleArticle api response')
        console.log(res.data.article[0],'<< destructured getsingleArticle api response')
        return res.data.article[0]
    })
}

export const getArticleComments = (article_id) => {
    return newsApi.get(`/api/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.article
    })
}

export const getTopics = () => {
    return newsApi.get(`/api/topics`).then((res) => {
        
        return res.data.topics
        
    })
}



export const postComment = (article_id, reqBody) => {
    console.log(reqBody, '<<, reqBody api')

    return newsApi
    .post(`/api/articles/${article_id}/comments`, reqBody)
    .then((res) => {
        console.log(res.data, '<< res.data.comment')
        return res.data
    })
}

export const deleteComment = (article_id, comment_id) => {
    console.log(article_id, '<<< api delete article_id')
    console.log(comment_id, '<<< api delete comment_id')
    
    return newsApi
    .delete(`/api/articles/${article_id}/comments/${comment_id}`)
    .then((res) => {
        console.log(res.data, '<<< res.data api deleteComment')
    })
}

export const patchArticleById = (article_id, incOrDec) => {
    console.log(article_id, '<<< api PATCH article_id')
    console.log(incOrDec, '<<< api PATCH incOrDec')
    const incObject = { inc_votes: incOrDec }
    
    return newsApi
    .patch(`/api/articles/${article_id}`, incObject)
    .then((res) => {
        console.log(res.data, '<< response PATCH res.Data')
    })
} 

//html select tag 
// bootstrap