const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    validateStatus: () => true
})

async function getPosts() {
    const resp = await axiosInstance.request({
        method: 'GET',
        url: '/posts'
    })
    console.log(resp.data)
    return resp
}

async function getPostById(id) {
    const resp = await axiosInstance.request({
        method: 'GET',
        url: `/posts/${id}`
    })
    console.log(resp.data)
    return resp
}

async function getPostComments(id) {
    const resp = await axiosInstance.request({
        method: 'GET',
        url: `/posts/${id}/comments`
    })
    console.log(resp.data)
    return resp
}


async function getCommentsByPostId(id) {
    const resp = await axiosInstance.request({
        method: 'GET',
        url: `/comments?postId=${id}`
    })
    console.log(resp.data)
    return resp
}

async function createPost(post) {
    const resp = await axiosInstance.request({
        method: 'POST',
        url: '/posts',
        data: post
    })
    console.log(resp.data)
    return resp
}

module.exports = { getPosts, getPostById, getPostComments, getCommentsByPostId, createPost }

