export const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => urls.users.base + "/" + id,
    },
    posts: {
        base: '/posts',
        byId: (id: number): string => urls.posts.base + "/" + id,
        ByUserId: (userID:number):string => urls.posts.base + "?userId=" + userID
    },
    comments: {
        base: '/comments',
        byId: (id:number):string => urls.posts.base + '/' + id + '/comments' //'/posts/'+postId+'/comments'
    }

}