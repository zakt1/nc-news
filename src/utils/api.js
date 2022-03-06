import axios from 'axios';


const newsApi = axios.create({
    baseURL: 'https://real-fake-newz-app.herokuapp.com/'
})

export const getArticles = (searchTopic, sortBy, sortOrder) => {

    let path = `/api/articles/?sort_by=${sortBy}&order=${sortOrder}`;
 
    if (searchTopic) path += `&topic=${searchTopic}`;
    

    return newsApi.get(path)
    .then((res)=> {
        return res.data
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`api/articles/${article_id}`)
    .then((res) => {
        // console.log(res.data.article[0],'<< destructured getsingleArticle api response')
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

    return newsApi
    .post(`/api/articles/${article_id}/comments`, reqBody)
    .then((res) => {
        return res.data
    })
}

export const deleteComment = (article_id, comment_id) => {
    
    return newsApi
    .delete(`/api/articles/${article_id}/comments/${comment_id}`)
    .then((res) => {
        console.log(res.data, '<<< res.data api deleteComment')
    })
}

export const patchArticleById = (article_id, incOrDec) => {
    const incObject = { inc_votes: incOrDec }
    
    return newsApi
    .patch(`/api/articles/${article_id}`, incObject)
    .then((res) => {
    })
} 