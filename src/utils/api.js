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


//html select tag 
// bootstrap