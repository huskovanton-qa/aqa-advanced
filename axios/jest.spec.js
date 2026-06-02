const { getPosts, getPostById, getPostComments, getCommentsByPostId, createPost } = require('./requests.js')

describe('Jest tests', () => {
    
    test('getPosts', async () => {
        const resp = await getPosts()
        expect(resp.status).toBe(200)
        expect(resp.data.length).toBe(100)
    });

    test('getPostById', async () => {
        const resp = await getPostById(1)
        expect(resp.status).toBe(200)
        expect(resp.data.id).toBe(1)
    });

    test('getPostComments', async () => {
        const resp = await getPostComments(1)
        expect(resp.status).toBe(200)
        expect(Array.isArray(resp.data)).toBe(true)
    });

    test('getCommentsByPostId', async () => {
        const resp = await getCommentsByPostId(1)
        expect(resp.status).toBe(200)
        expect(Array.isArray(resp.data)).toBe(true)
    });

    test('createPost', async () => {
        const post = {
            title: 'test',
            body: 'test body',
            userId: 1
        }
        const resp = await createPost(post)
        expect(resp.status).toBe(201)
        expect(resp.data.title).toBe(post.title)
        expect(resp.data.body).toBe(post.body)
        expect(resp.data.userId).toBe(post.userId)
    });
})

