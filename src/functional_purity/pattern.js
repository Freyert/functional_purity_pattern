const postsURL = 'https://jsonplaceholder.typicode.com/posts';
function getPosts() {
    return [postsURL, {
        method: 'GET',
        headers: {
            'Accepts': 'application/json'
        }
    }]
}

function isOdd(x) {
    return x % 2
}

module.exports = {
    getPosts: getPosts,
    isOdd: isOdd
}