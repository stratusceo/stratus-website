import axios from 'axios'

export const getAllPosts = async () => {
    const posts = await axios.get("https://api.stratusagency.io/posts")
        .then(({ data }) => { return data })
    return posts
}

export const getDetailsPosts = async () => {
    const posts = await axios.get("https://api.stratusagency.io/posts-details")
        .then(({ data }) => { return data })
    return posts
}